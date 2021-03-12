import firebase from "firebase/app";
import "firebase/auth";

const firebase_app = firebase.initializeApp({
  apiKey: "AIzaSyDwtDg2dMJu6PKePUGDleePrmPtDCm4EZU",
  authDomain: "fir-ntp.firebaseapp.com",
  projectId: "fir-ntp",
  storageBucket: "fir-ntp.appspot.com",
  messagingSenderId: "242736510225",
  appId: "1:242736510225:web:da3ace0beb21adb76608b0",
  measurementId: "G-84YY36V127",
});

// const db = firebaseApp.firestore();
const auth = firebase_app.auth();

export { auth };
