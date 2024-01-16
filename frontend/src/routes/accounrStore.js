import { writable } from 'svelte/store';

export const accountInfo = writable({
    email: '',
    username: '',
    firstname: '',
    lastname: '',
    password: ''
});
