import firebase from 'firebase/app';

import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDi2Yx0Q5Rk4U_Gk0tvOswQsHDNgApakWA",
    authDomain: "programming-stuff-fbe0c.firebaseapp.com",
    projectId: "programming-stuff-fbe0c",
    storageBucket: "programming-stuff-fbe0c.appspot.com",
    messagingSenderId: "856969903991",
    appId: "1:856969903991:web:8dbb57aeea324f607eeb72"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();