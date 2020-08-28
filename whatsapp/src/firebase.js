import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDGPbE6Ab3i3wCYPfiKFYvhQaLRURDRpro",
  authDomain: "wpclone-87f23.firebaseapp.com",
  databaseURL: "https://wpclone-87f23.firebaseio.com",
  projectId: "wpclone-87f23",
  storageBucket: "wpclone-87f23.appspot.com",
  messagingSenderId: "929466658820",
  appId: "1:929466658820:web:a32e17327e7b3378b58551",
  measurementId: "G-4YXGDDM9SJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
