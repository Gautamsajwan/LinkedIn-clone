import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAyBfkzR1t78GRH8_NElEeKDr2IQbfw7Ow",
  authDomain: "linkedinclone-73a63.firebaseapp.com",
  projectId: "linkedinclone-73a63",
  storageBucket: "linkedinclone-73a63.appspot.com",
  messagingSenderId: "894965953859",
  appId: "1:894965953859:web:74a19523eef395d0692bf6"
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();

export{ db, auth }
