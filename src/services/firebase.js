import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

//Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-79hUW3SKCYW_PpHeLNjI6tr4ThfEA4c",
  authDomain: "plan-at.firebaseapp.com",
  databaseURL: "https://plan-at.firebaseio.com",
  projectId: "plan-at",
  storageBucket: "plan-at.appspot.com",
  messagingSenderId: "420972155110",
  appId: "1:420972155110:web:d54bf9f098f1a38dc0eb27",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

export default firebase;
