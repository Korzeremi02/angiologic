<script>
    import DefaultProfilePic from '../assets/icons/default-profile-pic.jpg';
    import Logo from '../assets/icons/logo.png';
    import { docDateStore, docFirstnameStore, docNameStore, docNumberStore, docReviewStore, patAddressStore, patBirthStore, patFirstnameStore, patNameStore, patNumberStore, patReviewStore, patSocialNumberStore } from './store.js';
    let docDate, docFirstname, docName, docNumber, docReview, patAddress, patBirth, patFirstname, patName, patNumber, patReview, patSocialNumber;
    docDateStore.subscribe(value => docDate = value);
    docFirstnameStore.subscribe(value => docFirstname = value);
    docNameStore.subscribe(value => docName = value);
    docNumberStore.subscribe(value => docNumber = value);
    docReviewStore.subscribe(value => docReview = value);
    patAddressStore.subscribe(value => patAddress = value);
    patBirthStore.subscribe(value => patBirth = value);
    patFirstnameStore.subscribe(value => patFirstname = value);
    patNameStore.subscribe(value => patName = value);
    patNumberStore.subscribe(value => patNumber = value);
    patReviewStore.subscribe(value => patReview = value);
    patSocialNumberStore.subscribe(value => patSocialNumber = value);
    let selectedImage = null;
    function handleImageUpload(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            selectedImage = reader.result;
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    }
    $: docDateStore.set(docDate);
    $: docFirstnameStore.set(docFirstname);
    $: docNameStore.set(docName);
    $: docNumberStore.set(docNumber);
    $: docReviewStore.set(docReview);
    $: patAddressStore.set(patAddress);
    $: patBirthStore.set(patBirth);
    $: patFirstnameStore.set(patFirstname);
    $: patNameStore.set(patName);
    $: patNumberStore.set(patNumber);
    $: patReviewStore.set(patReview);
    $: patSocialNumberStore.set(patSocialNumber);
</script>

<style>
    .Infos { height: 90vh; width: 100vw; margin: 0; overflow: hidden; background-color: var(--color-background); display: flex; }
    .InfosNavbar { width: 25vw; height: 90vh; background-color: var(--color-editor-navbar);}
    .InfosLogo { height: 15vh; width: 100%; display: flex; justify-content: center; align-items: center; }
    #Logo { height: auto; width: 90%; }
    .InfosDesc { width: 25vw; height: 31vh; display: flex; justify-content: center; align-items: flex-start;}
    #InfosDescFont { font-size: 0.8rem; color: var(--color-font); font-family: var(--main-font); margin: 2vh;}
    .InfosBody { width: 75vw; height: 90vh; display: flex; flex-direction: column; align-items: center; justify-content: center; }
    #InfosFont { font-family: var(--main-font); font-size: 2.75vh; margin: 0; color: var(--color-font); text-align: left;}
    #InfosFontTitle { font-family: var(--main-font); font-size: 3.2vh; margin: 0; color: var(--color-font); text-align: left; font-weight: 600;}
    .Infos-content { height: 100%; width: 100%; display: flex; flex-direction: row; }
    .Infos-patient { height: 100%; width: 50%; }
    .Infos-patient-mainInfos { height:  100%; width: 100%; display: flex; flex-direction: column;}
    .Infos-patient-mainInfos-left { height: 100%; width: 100%; display: flex; flex-direction: column; align-items: center; }
    .Infos-patient-mainInfos-title { height: 10%; width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; }
    .Infos-patient-mainInfos-items { height: 90%; width: 100%; display: flex; flex-direction: row; }
    .Infos-patient-mainInfos-left-items { height: 100%; width: 100%; display: flex; flex-direction: column; align-items: center; }
    #Input-patient-sct { height: 30%; width: 100%; }
    .PatientReview { max-width: 100%; min-width: 100%; }
    #Infos-patient-mainInfos-left-inputSct { height: 10%; width: 80%; display: flex; flex-direction: column; align-items: center; }
    #Infos-patient-mainInfos-left-inputTextArea { height: auto; max-height: 30%; width: 80%; max-width: 80%; min-width: 80%; display: flex; flex-direction: column; align-items: center; }
    /* .Infos-patient-mainInfos-right { height: 100%; width: 25%; }
    .Infos-patient-mainInfos-right-photoSct { height: 60%; width: 100%; display: flex; flex-direction: column; align-items: center; }
    .Infos-patient-mainInfos-right-photoSct-img { height: auto; width: 80%; display: flex; flex-direction: column; }
    .Infos-patient-mainInfos-right-photoSct-input { height: auto; width: 100%; display: flex; flex-direction: column; margin-top: 2vh; } */
    .Infos-doctor { height: 100%; width: 50%; }
    .Infos-doctor-mainInfos { height: 100%; width: 100%; display: flex; flex-direction: column; }
    .Infos-doctor-mainInfos-title { height: 10%; width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; }
    .Infos-doctor-mainInfos-items { height: 100%; width: 100%; display: flex; flex-direction: column; align-items: center; }
    #Input-doctor-sct { height: 30%; width: 100%; }
    #Infos-doctor-mainInfos-right-inputSct { height: 10%; width: 80%; display: flex; flex-direction: column; align-items: center; }
    #Infos-doctor-mainInfos-right-inputTextArea {  height: auto; max-height: 30%; width: 80%; max-width: 80%; min-width: 80%; display: flex; flex-direction: column; align-items: center; }
    .DoctorReview { max-width: 100%; min-width: 100%;  }
    .Alert { height: 100%; width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; }
    #InfosFontTitle { font-family: var(--main-font); font-size: 3.75vh; margin: 0; color: var(--color-font); text-align: center; font-weight: 600; color: var(--color-font);}
</style>

<main>
    <div class="Infos">
        <div class="InfosNavbar">
            <div class="InfosLogo">
                <img id="Logo" src={Logo} alt="Logo" />
            </div>  
            <div class="InfosDesc">
                <div class="InfosDescText">
                    <p id="InfosDescFont">
                        Cette partie du logiciel vous permet de renseigner les informations concernant la consultation entre le praticien et le patient.
                    </p>
                    <p id="InfosDescFont">
                        Vous pourrez ensuite exporter votre croquis accompagné des informations renseignées dans un fichier du type de votre choix.
                    </p>
                </div>
            </div>
        </div>
        <div class="InfosBody">
            <!-- <div class="Alert">
                <p id="InfosFontTitle">Bientôt disponible !</p>
            </div> -->
            <div class="Infos-content">
                <div class="Infos-patient">
                    <div class="Infos-patient-mainInfos">
                        <div class="Infos-patient-mainInfos-title">
                            <p id="InfosFontTitle">Informations du patient</p>
                        </div>
                        <div class="Infos-patient-mainInfos-items">
                            <div class="Infos-patient-mainInfos-left">
                                <div class="Infos-patient-mainInfos-left-items">
                                    <div class="Infos-patient-mainInfos-left-name" id="Infos-patient-mainInfos-left-inputSct">
                                        <p id="InfosFont">Nom</p>
                                        <input type="text" bind:value={patName} placeholder={$patNameStore} name="PatientName" class="PatientName" id="Input-patient-sct">
                                    </div>
                                    <div class="Infos-patient-mainInfos-left-firstname" id="Infos-patient-mainInfos-left-inputSct">
                                        <p id="InfosFont">Prénom</p>
                                        <input type="text" bind:value={patFirstname} placeholder={$patFirstnameStore} name="PatientFirstname" class="PatientFirstname" id="Input-patient-sct">
                                    </div>
                                    <div class="Infos-patient-mainInfos-left-birthdate" id="Infos-patient-mainInfos-left-inputSct">
                                        <p id="InfosFont">Date de naissance</p>
                                        <input type="date" bind:value={patBirth} placeholder={$patBirthStore} name="PatientBirthdate" class="PatientBirthdate" id="Input-patient-sct">
                                    </div>   
                                    <div class="Infos-patient-mainInfos-left-address" id="Infos-patient-mainInfos-left-inputSct">
                                        <p id="InfosFont">Adresse</p>
                                        <input type="text" bind:value={patAddress} placeholder={$patAddressStore} name="PatientAddress" class="PatientAddress" id="Input-patient-sct">
                                    </div> 
                                    <div class="Infos-patient-mainInfos-left-number" id="Infos-patient-mainInfos-left-inputSct">
                                        <p id="InfosFont">Numéro de téléphone</p>
                                        <input type="tel" bind:value={patNumber} placeholder={$patNumberStore} name="PatientNumber" class="PatientNumber" id="Input-patient-sct">
                                    </div> 
                                    <div class="Infos-patient-mainInfos-left-social" id="Infos-patient-mainInfos-left-inputSct">
                                        <p id="InfosFont">Numéro de sécurité sociale</p>
                                        <input type="text" bind:value={patSocialNumber} placeholder={$patSocialNumberStore} name="PatientSocial" class="PatientSocial" id="Input-patient-sct">
                                    </div>
                                    <div class="Infos-patient-mainInfos-left-review" id="Infos-patient-mainInfos-left-inputTextArea">
                                        <p id="InfosFont">Remarques du patient</p>
                                        <textarea bind:value={patReview} placeholder={$patReviewStore} name="PatientReview" id="Input-patient-sct" class="PatientReview" cols="30" rows="10"></textarea>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="Infos-patient-mainInfos-right">
                                <div class="Infos-patient-mainInfos-right-photoSct">
                                    <div class="Infos-patient-mainInfos-right-photoSct-img">
                                        {#if selectedImage}
                                            <img src={selectedImage} alt="Selected Image" />
                                        {:else}
                                            <img src={DefaultProfilePic} id="DefaultPatientPhoto" alt="Patient Photo" />
                                        {/if}
                                    </div>
                                    <div class="Infos-patient-mainInfos-right-photoSct-input">
                                        <input type="file" accept="image/*" on:change={handleImageUpload} />
                                    </div>
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
                <div class="Infos-doctor">
                    <div class="Infos-doctor-mainInfos">
                        <div class="Infos-doctor-mainInfos-title">
                            <p id="InfosFontTitle">Informations du médecin</p>
                        </div>
                        <div class="Infos-doctor-mainInfos-items">
                            <div class="Infos-doctor-mainInfos-right-Date" id="Infos-doctor-mainInfos-right-inputSct">
                                <p id="InfosFont">Date de la consultation</p>
                                <input type="date" bind:value={docDate} placeholder={$docDateStore} name="DoctorDate" class="DoctorDate" id="Input-doctor-sct">
                            </div>
                            <div class="Infos-doctor-mainInfos-right-name" id="Infos-doctor-mainInfos-right-inputSct">
                                <p id="InfosFont">Nom</p>
                                <input type="text" bind:value={docName} placeholder={$docNameStore} name="DoctorName" class="DoctorName" id="Input-doctor-sct">
                            </div>
                            <div class="Infos-doctor-mainInfos-right-firstname" id="Infos-doctor-mainInfos-right-inputSct">
                                <p id="InfosFont">Prénom</p>
                                <input type="text" bind:value={docFirstname} placeholder={$docFirstnameStore} name="DoctorFirstname" class="DoctorFirstname" id="Input-doctor-sct">
                            </div>
                            <div class="Infos-doctor-mainInfos-number" id="Infos-doctor-mainInfos-right-inputSct">
                                <p id="InfosFont">Numéro de téléphone</p>
                                <input type="tel" bind:value={docNumber} placeholder={$docNumberStore} name="DoctorNumber" class="DoctorNumber" id="Input-doctor-sct">
                            </div>
                            <div class="Infos-doctor-review" id="Infos-doctor-mainInfos-right-inputTextArea">
                                <p id="InfosFont">Remarques du médecin</p>
                                <textarea bind:value={docReview} placeholder={$docReviewStore} name="DoctorReview" id="Input-doctor-sct" class="DoctorReview" cols="30" rows="10"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</main>