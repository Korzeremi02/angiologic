<script>
    import Logo from '../assets/icons/logo.png'
    import axios from 'axios';
    import { onMount } from 'svelte';
    let email = '';
    let username = '';
    let firstname = '';
    let lastname = '';
    let password = '';
    const fetchAccountInfo = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/account/${localStorage.getItem('userId')}`);
            const user = response.data[0];
            console.log(user);
                email = user.email;
                username = user.username;
                firstname = user.firstname;
                lastname = user.lastname;
        } catch (error) {
            console.error('Failed to fetch account information', error);
        }
    };
    onMount(async () => {
        onMount(fetchAccountInfo);
    });
</script>

<style>
    .Account { height: 100vh; width: 100vw; display: flex; flex-direction: row; background-color: var(--color-background); overflow: hidden; }
    .Account-Navbar { height: 90vh; width: 25vw; display: flex; flex-direction: column; background-color: var(--color-editor-navbar); }
    .Account-Logo { width: 100%; height: 15vh; display: flex; justify-content: center; align-items: center; }
    .Account-Logo img { height: auto; width: 90%; }
    .Account-disc { width: 100%; height: 75vh; display: flex; flex-direction: column; justify-content: flex-start; align-items: center; }
    #AccountFont { font-family: var(--main-font); font-size: 2.75vh; margin: 0; color: var(--color-font); margin-top: 2vh; }
    .Account-Body-disc-btn { width: 15vw; height: 5vh; font-family: var(--main-font); font-size: 2.75vh; margin-top: 2vh; }
    .Account-body { height: 90vh; width: 75vw; display: flex; flex-direction: column; }
    .AccountTitle { height: 10vh; width: 100%; display: flex; justify-content: center; align-items: center; }
    #AccountTitleFont { font-family: var(--main-font); font-size: 3.75vh; margin: 0; color: var(--color-font); font-weight: 600; }
    .AccountItems { height: 80vh; width: 100%; display: flex; flex-direction: column; justify-content: flex-start; align-items: center; }
</style>

<main>
    <div class="Account">
        <div class="Account-Navbar">
            <div class="Account-Logo">
                <img src={Logo} alt="Logo">
            </div>
            <div class="Account-disc">
                <p id="AccountFont">C'est fini ?</p>
                <input type="button" value="Déconnexion" class="Account-Body-disc-btn" onclick="window.location.href = '/';">
            </div>
        </div>
        <div class="Account-body">
            <div class="AccountTitle">
                <p id="AccountTitleFont">Mon compte</p>
            </div>
            <div class="AccountItems">
                <div class="AccountEmail">
                    <p id="AccountFont">Email</p>
                    <input type="text" value={email} placeholder={email} class="Account-Body-disc-btn">
                </div>
                <div class="AccountUsername">
                    <p id="AccountFont">Nom d'utilisateur</p>
                    <input type="text" value={username} placeholder={username} class="Account-Body-disc-btn">
                </div>
                <div class="AccountFirstname">
                    <p id="AccountFont">Prénom</p>
                    <input type="text" value={firstname} placeholder={firstname} class="Account-Body-disc-btn">
                </div>
                <div class="AccountLastname">
                    <p id="AccountFont">Nom</p>
                    <input type="text" value={lastname} placeholder={lastname} class="Account-Body-disc-btn">
                </div>
                <div class="AccountPassword">
                    <p id="AccountFont">Mot de passe</p>
                    <input type="text" value={password} placeholder='Nouveau mot de passe' class="Account-Body-disc-btn">
                </div>
                <div class="AccountSubmit">
                    <!-- <input type="button" value="Modifier" class="Account-Body-disc-btn" on:click={handleUpdate}> -->
                </div>
            </div>
        </div>
    </div>
</main>