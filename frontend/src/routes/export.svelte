<script>
    import Logo from '../assets/icons/logo.png';
    import LogoPdf from '../assets/icons/logo2.png';
    import { canvasImage } from './store';
    import { jsPDF } from 'jspdf';
    let isDefault = true;
    import { docDateStore, docNameStore, docFirstnameStore, docNumberStore, docReviewStore, patNameStore, patFirstnameStore, patReviewStore, patBirthStore, patAddressStore, patNumberStore, patSocialNumberStore } from './store.js';
    function generatePdf() {
        const doc = new jsPDF();
        let canvasImageDoc;
        canvasImage.subscribe(value => {
            canvasImageDoc = value;
        });
        doc.addImage(LogoPdf, 'JPEG', 10, 10, 120, 20);
        doc.addImage(canvasImageDoc, 'JPEG', 30, 40, 150, 150);
        doc.addPage();
        doc.addImage(LogoPdf, 'JPEG', 10, 10, 120, 20);
        doc.text('Informations du docteur :', 10, 42);
        doc.text('Date de la consultation : ' + $docDateStore, 10, 52);
        doc.text('Nom du médecin : ' + $docNameStore, 10, 62);
        doc.text('Prénom du médecin : ' + $docFirstnameStore, 10, 72);
        doc.text('Numéro du médecin : ' + $docNumberStore, 10, 82);
        doc.text('Remarques du médecin : ' + $docReviewStore, 10, 92);
        doc.addPage();
        doc.addImage(LogoPdf, 'JPEG', 10, 10, 120, 20);
        doc.text('Informations du patient :', 10, 42);
        doc.text('Nom du patient : ' + $patNameStore, 10, 52);
        doc.text('Prénom du patient : ' + $patFirstnameStore, 10, 62);
        doc.text('Date de naissance du patient : ' + $patBirthStore, 10, 72);
        doc.text('Adresse du patient : ' + $patAddressStore, 10, 82);
        doc.text('Numéro du patient : ' + $patNumberStore, 10, 92);
        doc.text('Numéro de sécurité sociale du patient : ' + $patSocialNumberStore, 10, 102);
        doc.text('Remarques du patient : ' + $patReviewStore, 10, 112);
        doc.save('rapport.pdf');
    }
</script>

<style>
    .Export { height: 90vh; width: 100vw; margin: 0; overflow: hidden; background-color: var(--color-background); display: flex; }
    .ExportNavBar { width: 25vw; height: 90vh; background-color: var(--color-editor-navbar);}
    .ExportItems { width: 25vw; height: 6vh; display: flex; flex-direction: column; justify-content: center; align-items: center; }
    .ExportLogo { height: 15vh; width: 100%; display: flex; justify-content: center; align-items: center; }
    #Logo { height: auto; width: 90%; }
    .ExportBody { height: 90vh; width: 75vw; display: flex; flex-direction: column; }
    .ExportTitle { height: 100%; width: 100%; display: flex; justify-content: center; align-items: center; }
    #ExportTitleFont { font-family: var(--main-font); font-size: 3.75vh; margin-top: 2vh; color: var(--color-font); font-weight: 600;}
    .ExportPreview { height: 100%; width: 100%; display: flex; flex-direction: row; }
    .SketchPreview { height: 100%; width: 50%; display: flex; align-items: center; justify-content: center;}
    .CanvasPreview { height: 60vh; width: 60vh; display: flex; flex-direction: column; align-items: center; justify-content: center;}
    .InfosPreview { height: 100%; width: 50%; display: flex; flex-direction: column; overflow-y: scroll;}
    .InfosPreview_items { height: 100%; width: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center;}
    .InfosPreviewDoctor { height: auto; width: 80%; display: flex; flex-direction: column; margin-top: 2vh;}
    .DoctorItems { height: 100%; width: 100%; display: flex; flex-direction: row; justify-content: space-between; }
    #ItemFont { font-family: var(--main-font); font-size: 2.5vh; margin: 0; color: var(--color-font); font-weight: 600;}
    #ItemResultFont { font-family: var(--main-font); font-size: 2.5vh; margin: 0; color: var(--color-font); font-weight: 400;}
    .InfosPreviewPatient { height: auto; width: 80%; display: flex; flex-direction: column; margin: 2vh 0; }
    .PatientItems { height: 100%; width: 100%; display: flex; flex-direction: row; justify-content: space-between;}
    #ItemFont { font-family: var(--main-font); font-size: 2.5vh; margin: 0; color: var(--color-font); font-weight: 600;}
    #ItemResultFont { font-family: var(--main-font); font-size: 2.5vh; margin: 0; color: var(--color-font); font-weight: 400;}
    #ExportDescV { font-family: var(--main-font); font-size: 2.5vh; margin: 0; color: var(--color-font); font-weight: 400;}
</style>

<main>
    <div class="Export">
        <div class="ExportNavBar">
            <div class="ExportLogo">
                <img id="Logo" src={Logo} alt="Logo" />
            </div>
            <div class="ExportItems">
                <button on:click={generatePdf}>Générer PDF</button>
            </div>
        </div>
        <div class="ExportBody">
            <!-- <div class="ExportTitle">
                <p id="ExportTitleFont">Bientôt disponible !</p>
            </div> -->
            <div class="ExportPreview">
                <div class="SketchPreview">
                    <div class="CanvasPreview">
                        {#if $canvasImage == 'default'}
                            <p id="ExportTitleFont">Aucun croquis enregistré</p>
                            <p id="ExportDescV">Appuyer sur Envoyer vers export dans Croquis</p>
                        {:else}
                            <img src={$canvasImage} alt="SketchPreview" id="canvasImage" width="100%" height="100%"/>
                        {/if}
                    </div>
                    <!-- <iframe src="http://localhost:5000/export" frameborder="0" width="100%" height="100%"></iframe> -->
                </div>
                <div class="InfosPreview">
                    <div class="InfosPreview_items">
                        <div class="DoctorTitle">
                            <p id="ExportTitleFont" class="pTitle">Informations du docteur :</p>
                        </div>
                        <div class="InfosPreviewDoctor">
                            <div class="DoctorItems">
                                <p id="ItemFont">Date de la consultation : </p>
                                <p id="ItemResultFont">{$docDateStore}</p>
                            </div>
                            <div class="DoctorItems">
                                <p id="ItemFont">Nom du médecin : </p>
                                <p id="ItemResultFont">{$docNameStore}</p>
                            </div>
                            <div class="DoctorItems">
                                <p id="ItemFont">Prénom du médecin : </p>
                                <p id="ItemResultFont">{$docFirstnameStore}</p>
                            </div>
                            <div class="DoctorItems">
                                <p id="ItemFont">Numéro du médecin : </p>
                                <p id="ItemResultFont">{$docNumberStore}</p>
                            </div>
                            <div class="DoctorItems">
                                <p id="ItemFont">Remarques du médecin : </p>
                                <p id="ItemResultFont">{$docReviewStore}</p>
                            </div>
                        </div>
                        <div class="PatientTitle">
                            <p id="ExportTitleFont" class="pTitle">Informations du patient :</p>
                        </div>
                        <div class="InfosPreviewPatient">
                            <div class="PatientItems">
                                <p id="ItemFont">Nom du patient : </p>
                                <p id="ItemResultFont">{$patNameStore}</p>
                            </div>
                            <div class="PatientItems">
                                <p id="ItemFont">Prénom du patient : </p>
                                <p id="ItemResultFont">{$patFirstnameStore}</p>
                            </div>
                            <div class="PatientItems">
                                <p id="ItemFont">Date de naissance du patient : </p>
                                <p id="ItemResultFont">{$patBirthStore}</p>
                            </div>
                            <div class="PatientItems">
                                <p id="ItemFont">Adresse du patient : </p>
                                <p id="ItemResultFont">{$patAddressStore}</p>
                            </div>
                            <div class="PatientItems">
                                <p id="ItemFont">Numéro du patient : </p>
                                <p id="ItemResultFont">{$patNumberStore}</p>
                            </div>
                            <div class="PatientItems">
                                <p id="ItemFont">Numéro de sécurité sociale du patient : </p>
                                <p id="ItemResultFont">{$patSocialNumberStore}</p>
                            </div>
                            <div class="PatientItems">
                                <p id="ItemFont">Remarques du patient : </p>
                                <p id="ItemResultFont">{$patReviewStore}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>