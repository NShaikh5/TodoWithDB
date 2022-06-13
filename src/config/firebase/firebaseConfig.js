import firebase from 'firebase';  

const firebaseConfig = {
  apiKey: "AIzaSyCS4buMI5_CsGxB04_QY-WWhzeBBT0TGJk",
  authDomain: "todowithdb-496e3.firebaseapp.com",
  projectId: "todowithdb-496e3",
  storageBucket: "todowithdb-496e3.appspot.com",
  messagingSenderId: "342727563876",
  appId: "1:342727563876:web:2385b8f6345e933977dd71"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db =  firebaseApp.firestore();

export default db;