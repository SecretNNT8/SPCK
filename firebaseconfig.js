
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBSYD3FY2xvIaiU8pbpJrvHDhLYgzQFSRE",
    authDomain: "valorent-d691d.firebaseapp.com",
    projectId: "valorent-d691d",
    storageBucket: "valorent-d691d.appspot.com",
    messagingSenderId: "785573428949",
    appId: "1:785573428949:web:57d287d4d77cd9a0f3ec5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
