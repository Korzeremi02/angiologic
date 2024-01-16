<script>
    import Logo from '../assets/icons/logo.png';
    import { docDateStore, docNameStore, docFirstnameStore, docNumberStore, docReviewStore, patNameStore, patFirstnameStore, patReviewStore, patBirthStore, patAddressStore, patNumberStore, patSocialNumberStore } from './docStore.js';

</script>

<style>
    .Export { height: 90vh; width: 100vw; margin: 0; overflow: hidden; background-color: var(--color-background); display: flex; }
    .ExportNavBar { width: 25vw; height: 90vh; background-color: var(--color-editor-navbar);}
    .ExportLogo { height: 15vh; width: 100%; display: flex; justify-content: center; align-items: center; }
    #Logo { height: auto; width: 90%; }
    .ExportBody { height: 90vh; width: 75vw; display: flex; flex-direction: column; }
    .ExportTitle { height: 100%; width: 100%; display: flex; justify-content: center; align-items: center; }
    #ExportTitleFont { font-family: var(--main-font); font-size: 3.75vh; margin-top: 2vh; color: var(--color-font); font-weight: 600;}
    .ExportPreview { height: 100%; width: 100%; display: flex; flex-direction: row; }
    .SketchPreview { height: 100%; width: 50%; }
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
</style>

<main>
    <div class="Export">
        <div class="ExportNavBar">
            <div class="ExportLogo">
                <img id="Logo" src={Logo} alt="Logo" />
            </div>
        </div>
        <div class="ExportBody">
            <!-- <div class="ExportTitle">
                <p id="ExportTitleFont">Bientôt disponible !</p>
            </div> -->
            <div class="ExportPreview">
                <div class="SketchPreview">
                    <iframe src="http://localhost:5000/export" frameborder="0" width="100%" height="100%"></iframe>
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