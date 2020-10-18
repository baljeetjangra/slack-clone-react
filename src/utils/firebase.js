import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZkQ3nub3BPokL_TQ3BcGU-41Uvo9MKNo",
  authDomain: "slack-clone-web.firebaseapp.com",
  databaseURL: "https://slack-clone-web.firebaseio.com",
  projectId: "slack-clone-web",
  storageBucket: "slack-clone-web.appspot.com",
  messagingSenderId: "247134706295",
  appId: "1:247134706295:web:e1679228c715244c948472",
  measurementId: "G-5MJQ43ST13",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
