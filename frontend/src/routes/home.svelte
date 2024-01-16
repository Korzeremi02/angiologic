<script>
    import { imageStore } from "./imageStore.js";
    import Img1 from "../assets/drawings/1.jpg";
    import Img2 from "../assets/drawings/2.webp";
    import Img3 from "../assets/drawings/3.webp";
    import Logo from "../assets/icons/logo.png";

    function selectImage(image) {
        imageStore.set(image);
    }
</script>

<style>
    @import "../public/global.css";
    .Home { height: 90vh; width: 100vw; margin: 0; overflow: hidden; background-color: var(--color-background); display: flex; }
    .HomeNavbar { width: 25vw; height: 90vh; background-color: var(--color-editor-navbar);}
    .HomeLogo { height: 15vh; width: 100%; display: flex; justify-content: center; align-items: center; }
    .HomeCredit { width: 25vw; height: 31vh; display: flex; justify-content: center; align-items: flex-end; }
    #HomeCreditFont { font-size: 0.55rem; color: var(--color-font); font-family: var(--main-font); }
    #Logo { height: auto; width: 90%; }
    .HomeTitle { width: 25vw; height: 6vh;}
    #HomeTitleFont { font-size: 1.8em; font-weight: bold; color: var(--color-font); text-align: center; margin: 2vh 0; padding: 0; font-family: var(--main-font); }
    .HomeDesc { width: 25vw; height: 2vh;}
    #HomeDescFont { font-size: 0.75em; font-weight: 400; color: var(--color-font); text-align: center; margin: 0; padding: 0; font-family: var(--main-font);}
    .HomeStartupDesc { widows: 25vw; height: 30vh; }
    #HomeStartupDescFont { width: auto; font-family: var(--main-font); color: var(--color-font); margin: 1.33vw; font-size: 0.8rem;    }
    .HomeBody { width: 75vw; height: 90vh; display: flex; flex-direction: column; align-items: center; justify-content: center; }   
    .HomeStartup { height: 90vh; width: 75vw; display: flex; flex-direction: row; }
    .HomeGallery { height: 100%; width: 100%; display: flex; justify-content: flex-start; align-items: center; overflow-x: scroll;}
    .HomeGallery img { cursor: pointer; margin: 5px; }
    #GalleryImg { height: 40vh; width: 40vh; }
    #GalleryImg:hover { transform: scale(1.01); }
    #GalleryImg:active { opacity: 0.85;; }
    ::-webkit-scrollbar-thumb { background-color: var(--color-navbar); height: 1vh; }
    ::-webkit-scrollbar { width: 100%; height: 2vh; }
    ::-webkit-scrollbar-track { background-color: var(--scroll-main); }
</style>

<main>
    <div class="Home">
        <div class="HomeNavbar">
            <div class="HomeLogo">
                <img id="Logo" src={Logo} alt="Logo" />
            </div>
            <div class="HomeTitle">
                <p id="HomeTitleFont">ANGIOLOGIC</p>
            </div>
            <div class="HomeDesc">
                <p id="HomeDescFont">L'outil de suivi pour professionnel</p>
            </div>
            <div class="HomeStartupDesc">
                <p id="HomeStartupDescFont">
                    Bienvenue sur ce logiciel vous permettant de créer des fiches médicales complètes. Vous trouverez toute une suite d'outils pour répondre au mieux à vos besoins.
                </p>
                <p id="HomeStartupDescFont">
                    Pour commencer, veuillez sélectionner un élément dans la banque d'images à droite puis appuyer sur le bouton croquis pour continuer...
                </p>
            </div>
            <div class='HomeCredit'>
                <p id="HomeCreditFont">
                    2024 @LemnixTech
                </p>
            </div>
        </div>
        <div class="HomeBody">
            <div class="HomeStartup">
                <div class="HomeGallery">
                    <img src={Img1} id="GalleryImg" alt="Draw Icon" on:click={() => selectImage(Img1)} /> 
                    <img src={Img2} id="GalleryImg" alt="Home Icon" on:click={() => selectImage(Img2)} /> 
                    <img src={Img3} id="GalleryImg" alt="Home Icon" on:click={() => selectImage(Img3)} /> 
                    <img src={Img1} id="GalleryImg" alt="Draw Icon" on:click={() => selectImage(Img1)} /> 
                    <img src={Img2} id="GalleryImg" alt="Home Icon" on:click={() => selectImage(Img2)} /> 
                    <img src={Img3} id="GalleryImg" alt="Home Icon" on:click={() => selectImage(Img3)} /> 
                    <img src={Img1} id="GalleryImg" alt="Draw Icon" on:click={() => selectImage(Img1)} /> 
                    <img src={Img2} id="GalleryImg" alt="Home Icon" on:click={() => selectImage(Img2)} /> 
                    <img src={Img3} id="GalleryImg" alt="Home Icon" on:click={() => selectImage(Img3)} /> 
                    <img src={Img1} id="GalleryImg" alt="Draw Icon" on:click={() => selectImage(Img1)} /> 
                    <img src={Img2} id="GalleryImg" alt="Home Icon" on:click={() => selectImage(Img2)} /> 
                    <img src={Img3} id="GalleryImg" alt="Home Icon" on:click={() => selectImage(Img3)} /> 
                    <img src={Img1} id="GalleryImg" alt="Draw Icon" on:click={() => selectImage(Img1)} /> 
                    <img src={Img2} id="GalleryImg" alt="Home Icon" on:click={() => selectImage(Img2)} /> 
                    <img src={Img3} id="GalleryImg" alt="Home Icon" on:click={() => selectImage(Img3)} /> 
                </div>
            </div>
        </div>
    </div>
</main>
