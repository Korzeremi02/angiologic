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
    host: process.env.DB_HOST,
    port : process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    connectionLimit: 5
});

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});