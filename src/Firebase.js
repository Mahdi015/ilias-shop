import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_3weu_lyAdx46dQriSJTchGhxRV6HSEE",
  authDomain: "iliasshop.firebaseapp.com",
  projectId: "iliasshop",
  storageBucket: "iliasshop.appspot.com",
  messagingSenderId: "892173937982",
  appId: "1:892173937982:web:9fc039cbb8b0b0ae5ed06f",
  measurementId: "G-ZMJ2E75SGQ",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
