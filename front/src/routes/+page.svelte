<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { redirect } from '@sveltejs/kit';
  import DrawSct from './drawing.svelte';
  import InfosSct from './infos.svelte';
  import HomeSct from './home.svelte';
  import ExportSct from './export.svelte';
  import AccountSct from './account.svelte';
  import AboutSct from './about.svelte';
  import DrawIcon from '../assets/icons/draw.png';
  import HomeIcon from '../assets/icons/home.png';
  import InfoIcon from '../assets/icons/info.png';
  import AccountIcon from '../assets/icons/account.png';
  import MoreIcon from '../assets/icons/more_horiz.png';
  import AboutIcon from '../assets/icons/about.png';
  import UpIcon from '../assets/icons/upgrade.png';
  let selected = 'Home';
  let showMore = false;
  function select(component) {
    selected = component;
    if (component === 'More') {
      showMore = !showMore;
    } else {
      showMore = false;
    }
  }
</script>
  
<style>
  @import '../public/global.css';
  .App { height: 100vh; width: 100vw; display: flex; flex-direction: column; background-color: var(--color-background); overflow: hidden; }
  .App-content { height: 90vh; width: 100vw; display: flex; flex-direction: column; }
  .App-navbar { height: 10vh; width: 100vw; display: flex; flex-direction: row; align-items: center; justify-content: center; background-color: var(--color-navbar); }
  .App-navbar-Home, .App-navbar-Infos, .App-navbar-Draw, .App-navbar-More { height: 100%; width: 20vw; display: flex; align-items: center; justify-content: center; }
  .App-navbar-Home, .App-navbar-Infos, .App-navbar-More, .App-navbar-Draw:hover { cursor: pointer; }
  .App-navbar-Home img, .App-navbar-Infos img, .App-navbar-Draw img, .App-navbar-More img { height: 5vh; width: 5vh; margin-right: 1.3vw; transform: scale(1); transition: transform 0.25s ease-in-out; }
  .App-navbar-Home:hover img, .App-navbar-Infos:hover img, .App-navbar-Draw:hover img, .App-navbar-More:hover img { transform: scale(1.2); }
  .App-navbar-Home p, .App-navbar-Infos p, .App-navbar-Draw p { font-family: var(--main-font); font-size: 2.75vh; margin: 0; color: var(--color-font); }
  .active { border-top: 2px solid var(--color-font);}
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
      {:else if selected === 'Export'}
        <ExportSct />
      {:else if selected === 'Account'}
        <AccountSct />
      {:else if selected === 'About'}
        <AboutSct />
      {/if}
    </div>
    <div class="App-navbar">
      <div class="App-navbar-Home  {selected === 'Home' ? 'active' : ''}" on:click={() => select('Home')}>
        <img src={HomeIcon} alt="HomeIcon">
        <p>Accueil</p>
      </div>
      <div class="App-navbar-Draw {selected === 'Draw' ? 'active' : ''}" on:click={() => select('Draw')}>
        <img src={DrawIcon} alt="DrawIcon">
        <p>Croquis</p>
      </div>
      <div class="App-navbar-Infos  {selected === 'Infos' ? 'active' : ''}" on:click={() => select('Infos')}>
        <img src={InfoIcon} alt="InfoIcon">
        <p>Infos</p>
      </div>
      <div class="App-navbar-Draw  {selected === 'Export' ? 'active' : ''}" on:click={() => select('Export')}>
        <img src={UpIcon} alt="DrawIcon">
        <p>Export</p>
      </div>
      <div class="App-navbar-Draw {selected === 'Account' ? 'active' : ''}" on:click={() => select('Account')}>
        <img src={AccountIcon} alt="DrawIcon">
        <p>Mon Compte</p>
      </div>
      <div class="App-navbar-Draw {selected === 'About' ? 'active' : ''}" on:click={() => select('About')}>
        <img src={AboutIcon} alt="DrawIcon">
        <p>À propos</p>
      </div>
    </div>
  </div>    
</main>