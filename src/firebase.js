import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCkGfzp1UO-9NQXpDqFV36HBfozteyoIz8",
    authDomain: "instagram-reels-clone-cb279.firebaseapp.com",
    databaseURL: "https://instagram-reels-clone-cb279.firebaseio.com",
    projectId: "instagram-reels-clone-cb279",
    storageBucket: "instagram-reels-clone-cb279.appspot.com",
    messagingSenderId: "975153228334",
    appId: "1:975153228334:web:5ded20eefd010d1fcd8dbf",
    measurementId: "G-YNBESL0VPK"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();

  export default db;