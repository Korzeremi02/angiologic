<script>
    import Logo from '../assets/icons/logo.png'
</script>

<style>
    .About { height: 90vh; width: 100vw; margin: 0; overflow: hidden; background-color: var(--color-background); display: flex; }
    .AboutNavBar { width: 25vw; height: 90vh; background-color: var(--color-editor-navbar);}
    .AboutLogo { height: 15vh; width: 100%; display: flex; justify-content: center; align-items: center; }
    #Logo { height: auto; width: 90%; }
    .AboutBody { height: 90vh; width: 75vw; display: flex; flex-direction: column; }
    .AboutTitle { height: 10vh; width: 100%; display: flex; justify-content: center; align-items: center; }
    #AboutTitleFont { font-family: var(--main-font); font-size: 3.75vh; margin: 0; color: var(--color-font); font-weight: 600;}
    .AboutItems { height: 80vh; width: 100%; display: flex; flex-direction: column; justify-content: flex-start; align-items: center; }
    #AboutItemFontV { font-family: var(--main-font); font-size: 4.75vh; margin: 0; color: var(--color-font); margin-left: 2vw; margin-top: 2vh;}
    #AboutItemFont { font-family: var(--main-font); font-size: 2.75vh; margin: 0; color: var(--color-font); margin-left: 2vw; }
    #AboutItemFontAlert { font-family: var(--main-font); font-size: 4.75vh; margin: 0; color: red; margin-left: 2vw; margin-top: 2vh;}
</style>

<main>
    <div class="About">
        <div class="AboutNavBar">
            <div class="AboutLogo">
                <img src={Logo} alt="Logo" id="Logo">
            </div>
        </div>
        <div class="AboutBody">
            <div class="AboutTitle">
                <p id="AboutTitleFont">À propos de ANGIOLOGIC</p>
            </div>
            <div class="AboutItems">
                <div class="AboutItem">
                    <p id="AboutItemFontV">Version</p>
                    <p id="AboutItemFont">0.1</p>
                    <p id="AboutItemFontAlert">AVERTISSEMENT</p>
                    <p id="AboutItemFont">Cette version est une version de test, elle n'est pas destinée à être utilisée en production.</p>
                    <p id="AboutItemFont">De nombreux bugs et fonctionnalités sont à corriger et/ou présents.</p>
                    <p id="AboutItemFont">En cas de relevé de problèmes, merci de bien vouloir en faire part au développeur.</p>
                    <p id="AboutItemFont">Merci de votre compréhension.</p>
                </div>
            </div>
        </div>
    </div>
</main>