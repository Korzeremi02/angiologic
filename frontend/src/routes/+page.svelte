<!-- Login.svelte -->
<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import App from './app.svelte';
  import Logo from '../assets/icons/logo.png';

  let email = '';
  let password = '';
  let isLoggedIn = false;
  let failedConnection = false;
  let userId = '';

  async function handleLogin() {
      try {
          const response = await fetch('http://localhost:5000/login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email, password }),
          });

          const data = await response.json();

          if (response.ok) {
              isLoggedIn = true;
              userId = data.userId;
              localStorage.setItem('userId', userId);
          } else {
              console.error(data.error);
          }
      } catch (error) {
          failedConnection = true;
          console.log(failedConnection);
          console.error('Error during login:', error);
          return failedConnection;
      }
  }

  $: if(failedConnection) {
      alert('Identifiants de connexion incorrects, merci de bien vouloir réessayer.');
      failedConnection = false;
  }
</script>

<style>
    @import '../public/global.css';
    main { display: flex; justify-content: center; align-items: center; height: 100vh; width: 100vw; }
    .Connexion { display: flex; flex-direction: column; justify-content: center; align-items: center; }
    .Connexion__logo { width: 30vw; height: 12vh; }
    .Connexion__logo img { width: 100%; height: auto; }
    .Connexion__form { width: 30vw; }
    .Connexion__form form { display: flex; flex-direction: column; }
    .Connexion__form form label { margin-bottom: 2vh; font-family: var(--main-font); color: var(--color-font);}
    .Connexion__form form input { margin-bottom: 2vh; }
    .Connexion__form form button { margin-top: 2vh; }
</style>

<main>
    <!-- {#if isLoggedIn} -->
          <App />
    <!-- {:else}
        <div class="Connexion">
            <div class="Connexion__logo">
                <img src={Logo} alt="logo" />
            </div>
            <div class="Connexion__form">
                <form on:submit|preventDefault="{handleLogin}">
                    <label for="email">Email:</label>
                    <input type="email" bind:value="{email}" required />
                    <label for="password">Mot de passe:</label>
                    <input type="password" bind:value="{password}" required />
                    <button type="submit">Se connecter</button>
                </form>
            </div>
        </div>
    {/if} -->
</main>
