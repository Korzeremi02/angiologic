<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { redirect } from '@sveltejs/kit';
  import DrawSct from './drawing.svelte';
  import DrawIcon from '../assets/icons/draw.png'
  import HomeIcon from '../assets/icons/home.png'
  import InfoIcon from '../assets/icons/info.png'
</script>
  
<style>
  @import '../public/global.css';
  .App { height: 100vh; width: 100vw; display: flex; flex-direction: column; background-color: var(--color-background); overflow: hidden; }
  .App-content { height: 90vh; width: 100vw; display: flex; flex-direction: column; }
  .App-navbar { height: 10vh; width: 100vw; display: flex; flex-direction: row; align-items: center; justify-content: center; background-color: var(--color-navbar); }
  .App-navbar-Home { height: 100%; width: 33vw; }
  .App-navbar-Infos { height: 100%; width: 33vw; }
  .App-navbar-Draw { height: 100%; width: 33vw; }
  #IconSct { display: flex; height: 100%; width: 100%; align-items: center; justify-content: center; }
  #IconImg { height: 5vh; width: 5vh; margin-right: 1.3vw; }
  #IconText { font-family: var(--main-font) ; font-size: 2.75vh; margin: 0; color: var(--color-font) }
</style>
  
<main>
  <div class="App">
    <div class="App-content">
      <!-- <DrawSct /> -->
    </div>
    <div class="App-navbar">
      <div class="App-navbar-Home" id="IconSct">
        <img src={ HomeIcon }  id="IconImg" alt="HomeIcon">
        <p id="IconText">Home</p>
      </div>
      <div class="App-navbar-Infos" id="IconSct">
        <img src={ InfoIcon } id="IconImg" alt="InfoIcon">
        <p id="IconText">Infos</p>
      </div>
      <div class="App-navbar-Draw" id="IconSct">
        <img src={ DrawIcon } id="IconImg" alt="DrawIcon">
        <p id="IconText">Draw</p>
      </div>
    </div>
  </div>    
</main>