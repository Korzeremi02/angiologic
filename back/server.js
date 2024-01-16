const express = require('express');
const mariadb = require('mariadb');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const { reset } = require('nodemon');
require('dotenv').config();
const app = express();
// const port = process.env.PORT || 5000;
const port = 5000;

const pool = mariadb.createPool({
    host: 'localhost',
    port : 3306,
    user: 'root',
    password: 'root',
    database: 'angiologic',
    connectionLimit: 10
});

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/account', async (req, res) => {
    try {
        const conn = await pool.getConnection();
        const rows = await conn.query("SELECT * FROM account");
        conn.release();
        res.send(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/account/:id', async (req, res) => {
    try {
        const conn = await pool.getConnection();
        const rows = await conn.query("SELECT * FROM account WHERE id = ?", [req.params.id]);
        conn.release();
        res.send(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/account', async (req, res) => {
    try {
        bcrypt
            .hash(req.body.password, 10)
            .then(hash => {
                const conn = pool.getConnection();
                const rows = conn.query("INSERT INTO account (email, username, firstname, lastname, password) VALUES (?, ?, ?, ?, ?)", [req.body.email, req.body.username, req.body.firstname, req.body.lastname, hash]);
                conn.release();
                res.send(rows);
            })
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
});

app.put('/account/:id', async (req, res) => {
    try {
        const conn = await pool.getConnection();
        const rows = await conn.query("UPDATE account SET email = ?, username = ?, firstname = ?, lastname = ?, password = ? WHERE id = ?", [req.body.email, req.body.username, req.body.firstname, req.body.lastname, req.body.password, req.params.id]);
        conn.release();
        res.send(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.delete('/account/:id', async (req, res) => {
    try {
        const conn = await pool.getConnection();
        const rows = await conn.query("DELETE FROM account WHERE id = ?", [req.params.id]);
        conn.release();
        res.send(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const conn = await pool.getConnection();

    try {
        const rows = await conn.query("SELECT * FROM account WHERE email = ?", [email]);

        if (rows.length > 0) {
            const user = rows[0];
            if (password === user.password) {
                res.status(200).json({
                    userId: user.id,
                    token: 'TOKEN'
                });
            } else {
                res.status(401).json({ error: 'Invalid password' });
            }
        } else {
            res.status(400).send('Invalid email');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    } finally {
        conn.release();
    }
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});