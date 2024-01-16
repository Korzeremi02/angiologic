<script>
    import Logo from '../assets/icons/logo.png';
</script>

<style>
    .Export { height: 90vh; width: 100vw; margin: 0; overflow: hidden; background-color: var(--color-background); display: flex; }
    .ExportNavBar { width: 25vw; height: 90vh; background-color: var(--color-editor-navbar);}
    .ExportLogo { height: 15vh; width: 100%; display: flex; justify-content: center; align-items: center; }
    #Logo { height: auto; width: 90%; }
    .ExportBody { height: 90vh; width: 75vw; display: flex; flex-direction: column; }
    .ExportTitle { height: 100%; width: 100%; display: flex; justify-content: center; align-items: center; }
    #ExportTitleFont { font-family: var(--main-font); font-size: 3.75vh; margin: 0; color: red; font-weight: 600;}
</style>

<main>
    <div class="Export">
        <div class="ExportNavBar">
            <div class="ExportLogo">
                <img id="Logo" src={Logo} alt="Logo" />
            </div>
        </div>
        <div class="ExportBody">
            <div class="ExportTitle">
                <p id="ExportTitleFont">Bientôt disponible !</p>
            </div>
        </div>
    </div>
</main>