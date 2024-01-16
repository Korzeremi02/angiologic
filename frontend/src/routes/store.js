import { writable } from "svelte/store";
export const canvasImage = writable("default");
export const accountInfo = writable({
    email: '',
    username: '',
    firstname: '',
    lastname: '',
    password: ''
});
export const imageStore = writable('defaultImage.png');
export const docDateStore = writable('01/02/2024');
export const docNameStore = writable('Name');
export const docFirstnameStore = writable('Firstname');
export const docNumberStore = writable('Number');
export const docReviewStore = writable('Review');
export const patNameStore = writable('Name');
export const patFirstnameStore = writable('Firstname');
export const patAddressStore = writable('Address');
export const patBirthStore = writable('01-02-2024');
export const patNumberStore = writable('1234567890');
export const patSocialNumberStore = writable('1234567890');
export const patReviewStore = writable('Review');