// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDO6v2pL7G_x0h6O_iGdvQbgWJcl5xcxq4",
  authDomain: "crowdcube-fcb66.firebaseapp.com",
  projectId: "crowdcube-fcb66",
  storageBucket: "crowdcube-fcb66.firebasestorage.app",
  messagingSenderId: "393156773893",
  appId: "1:393156773893:web:5a40e0fa0a959fe01a346c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;