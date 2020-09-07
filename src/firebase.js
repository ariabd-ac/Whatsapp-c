import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBQBnxK4-EOnFHQDVD8Em-OJa9fpayWfh8",
  authDomain: "whatsapp-clone-7ee74.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-7ee74.firebaseio.com",
  projectId: "whatsapp-clone-7ee74",
  storageBucket: "whatsapp-clone-7ee74.appspot.com",
  messagingSenderId: "848931197011",
  appId: "1:848931197011:web:59aacdbaa7c512f5a936a6",
  measurementId: "G-D57CGY41PV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
