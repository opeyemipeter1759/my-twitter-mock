// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBfECFkkNGSd-J3H8vegVG0PN4gBKixX0A",
  authDomain: "twitter-mock-37f21.firebaseapp.com",
  projectId: "twitter-mock-37f21",
  storageBucket: "twitter-mock-37f21.appspot.com",
  messagingSenderId: "1024220743805",
  appId: "1:1024220743805:web:c547479574c55473508914",
  measurementId: "G-ZXF8GJ9MXR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;
