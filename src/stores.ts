import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const lsLabelWsConnString = "LS_WS_CN_STR";
const lsLabelUserName = "LS_UN";

let localWsConnString = '';
let localUserName = '';

if (browser) {
    localWsConnString = localStorage.getItem(lsLabelWsConnString) || '';
}

const wsReady = writable(false);

const wsConnString = writable(localWsConnString);
wsConnString.subscribe(val => {
    if (browser) {
        localStorage.setItem(lsLabelWsConnString, val);
    }
});

if (browser) {
    localUserName = localStorage.getItem(lsLabelUserName) || '';
}

export const userName = writable(localUserName);
userName.subscribe(val => { 
    if (browser) { 
        localStorage.setItem(lsLabelUserName, val) 
    } 
});

export default {
    wsConnString,
    wsReady,
    userName
}