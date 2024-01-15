<script>
    import { imageStore } from "./imageStore.js";
    import Img1 from "../assets/drawings/1.jpg";
    import Img2 from "../assets/drawings/2.webp";
    import Img3 from "../assets/drawings/3.webp";

    function selectImage(image) {
        imageStore.set(image);
    }
</script>

<style>
    .Home { height: 90vh; width: 100vw; margin: 0; overflow: hidden; background-color: var(--color-background); }
    .HomeTitle { height: 10vh; width: 100vw; display: flex; flex-direction: column; align-items: center; justify-content: center; }
    #HomeTitleFont { font-family: var(--main-font); font-size: 3.2vh; margin: 0; color: var(--color-font); text-align: center; font-weight: 600; }
    #HomeTitleDescr { font-family: var(--main-font); font-size: 2.75vh; margin: 0; color: var(--color-font); text-align: center; }
    .HomeStartup { height: 80vh; width: 100vw; display: flex; flex-direction: row; }
    .HomeGallery { height: 100%; width: 100%; display: flex; justify-content: flex-start; align-items: center; overflow-x: scroll;}
    .HomeGallery img { cursor: pointer; margin: 5px; }
    #GalleryImg { height: 40vh; width: 40vh; }
</style>

<main>
    <div class="Home">
        <div class="HomeTitle">
            <p id="HomeTitleFont">ANGIOLOGIC</p>
            <p id="HomeTitleDescr">Le logiciel de croquis médical</p>
        </div>
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
</main>
