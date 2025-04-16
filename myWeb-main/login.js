  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-analytics.js";
  import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
  const auth = getAuth(app)
  const log = document.getElementById('log')

log.addEventListener("click", function(event) {
    event.preventDefault();
    let mail = document.getElementById('mail').value;
    let pass = document.getElementById('pass').value;
    signInWithEmailAndPassword(auth, mail, pass)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    window.location = 'index.html';
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("invalid email or password");
  });
  
});
