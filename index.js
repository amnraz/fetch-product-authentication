
  // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js" 
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyADBueU9pnLSO4vM8yJuka-1ComuoSEF5Q",
    authDomain: "amn-865ce.firebaseapp.com",
    projectId: "amn-865ce",
    storageBucket: "amn-865ce.firebasestorage.app",
    messagingSenderId: "459051703025",
    appId: "1:459051703025:web:a3fb0f5f7d6b6b1be46750",
    measurementId: "G-7F27HDGPDP"
  };

  // Initialize Firebase
 const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

window.registerBtn = function registerBtn(event) {
  event.preventDefault(); // ⛔ prevent page reload
  let Username = document.getElementById("nameId").value;
  let Email = document.getElementById("emailId").value;
  let Password = document.getElementById("passwordId").value;

  createUserWithEmailAndPassword(auth, Email, Password)
    .then((userCredential) => {
      document.getElementById("message").innerText = alert("Registration Successful! Please log in.")
      window.location.href = "login.html";
    })
    .catch((error) => {
      document.getElementById("message").innerText = error.message;
    });
};




// ✅ Login function
window.loginBtn = function loginBtn(event) {
  event.preventDefault(); // ⛔ prevent page reload
  let Email = document.getElementById("emailId").value;
  let Password = document.getElementById("passwordId").value;

  signInWithEmailAndPassword(auth, Email, Password)
    .then((userCredential) => {
      document.getElementById("message").innerText = "Login Successful!";
      window.location.href = "index.html";
    })
    .catch((error) => {
      document.getElementById("message").innerText = "Wrong credentials: " + error.message;
    });
};
