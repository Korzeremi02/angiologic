<script>
    import Logo from '../assets/icons/logo.png';
</script>

<style>
    .Export { height: 90vh; width: 100vw; margin: 0; overflow: hidden; background-color: var(--color-background); display: flex; }
    .ExportNavBar { width: 25vw; height: 90vh; background-color: var(--color-editor-navbar);}
    .ExportLogo { height: 15vh; width: 100%; display: flex; justify-content: center; align-items: center; }
    #Logo { height: auto; width: 90%; }
</style>

<main>
    <div class="Export">
        <div class="ExportNavBar">
            <div class="ExportLogo">
                <img id="Logo" src={Logo} alt="Logo" />
            </div>
        </div>
        <div class="ExportBody">
        
        </div>
    </div>
</main>