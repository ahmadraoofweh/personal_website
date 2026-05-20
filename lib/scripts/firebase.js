// IMPORTS
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";

// FIREBASE CONFIG
const firebaseConfig = {
    apiKey: "AIzaSyClevQU2L5hedZTHTwmEzdOampkozfnvDA",
    authDomain: "ahmadraoofweh-db.firebaseapp.com",
    projectId: "ahmadraoofweh-db",
    storageBucket: "ahmadraoofweh-db.firebasestorage.app",
    messagingSenderId: "300018832228",
    appId: "1:300018832228:web:aacd7155f84d0046a7a071"
};

const app = initializeApp(firebaseConfig);
window.firebaseApp = app;