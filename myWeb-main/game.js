import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-analytics.js";
import {getAuth, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";
import { getFirestore, addDoc, collection, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyAf-a9GyrpEFSHM4V6zlI976thNB1Vxvqw",
  authDomain: "aqiscool-105aa.firebaseapp.com",
  projectId: "aqiscool-105aa",
  storageBucket: "aqiscool-105aa.firebasestorage.app",
  messagingSenderId: "424998778831",
  appId: "1:424998778831:web:bd96d34ad6b0e1efc4c4ba",
  measurementId: "G-CK3FM9T0ZN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const home = getAuth(app);
const db = getFirestore(app);

let text=document.getElementById("click");
let a = 0;
let img = document.getElementById("bnn");
function hi() {
    a+=1;
    if (a==2000000000) {
        alert("Congratulation! You have wasted your time! Now enjoy clicking back");
        a=0;
    }
    text.innerHTML=a;
}

onAuthStateChanged(home, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        const name = user.displayName;
        console.log(uid);
        console.log(name);
        console.log(user.score);
        // ...
    } else {
        console.log('User is signed out');
        window.location = 'login.html';
    }
});
