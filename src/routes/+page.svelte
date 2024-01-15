<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { redirect } from '@sveltejs/kit';
  import DrawSct from './drawing.svelte';
  import InfosSct from './infos.svelte';
  import HomeSct from './home.svelte';
  import DrawIcon from '../assets/icons/draw.png';
  import HomeIcon from '../assets/icons/home.png';
  import InfoIcon from '../assets/icons/info.png';
  let selected = 'Home'; // Initiale avec une majuscule, pour correspondre aux valeurs utilisées dans les on:click
  function select(component) {
    selected = component;
  }
</script>
  
<style>
  @import '../public/global.css';
  .App { height: 100vh; width: 100vw; display: flex; flex-direction: column; background-color: var(--color-background); overflow: hidden; }
  .App-content { height: 90vh; width: 100vw; display: flex; flex-direction: column; }
  .App-navbar { height: 10vh; width: 100vw; display: flex; flex-direction: row; align-items: center; justify-content: center; background-color: var(--color-navbar); }
  .App-navbar-Home, .App-navbar-Infos, .App-navbar-Draw { height: 100%; width: 33vw; display: flex; align-items: center; justify-content: center; }
  .App-navbar-Home, .App-navbar-Infos, .App-navbar-Draw:hover { cursor: pointer; }
  .App-navbar-Home img, .App-navbar-Infos img, .App-navbar-Draw img { height: 5vh; width: 5vh; margin-right: 1.3vw; transform: scale(1); transition: transform 0.25s ease-in-out; }
  .App-navbar-Home:hover img, .App-navbar-Infos:hover img, .App-navbar-Draw:hover img { transform: scale(1.2); }
  .App-navbar-Home p, .App-navbar-Infos p, .App-navbar-Draw p { font-family: var(--main-font); font-size: 2.75vh; margin: 0; color: var(--color-font); }
</style>
  
<main>
  <div class="App">
    <div class="App-content">
      {#if selected === 'Home'}
        <HomeSct />
      {:else if selected === 'Infos'}
        <InfosSct />
      {:else if selected === 'Draw'}
        <DrawSct />
      {/if}
    </div>
    <div class="App-navbar">
      <div class="App-navbar-Home" on:click={() => select('Home')}>
        <img src={HomeIcon} alt="HomeIcon">
        <p>Home</p>
      </div>
      <div class="App-navbar-Infos" on:click={() => select('Infos')}>
        <img src={InfoIcon} alt="InfoIcon">
        <p>Infos</p>
      </div>
      <div class="App-navbar-Draw" on:click={() => select('Draw')}>
        <img src={DrawIcon} alt="DrawIcon">
        <p>Draw</p>
      </div>
    </div>
  </div>    
</main>