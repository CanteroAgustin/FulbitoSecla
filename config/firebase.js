import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC4NNoc_wO57-CxRdo5f5bqF8p8DLwCA9E",
  authDomain: "fulbitosecla.firebaseapp.com",
  projectId: "fulbitosecla",
  storageBucket: "fulbitosecla.appspot.com",
  messagingSenderId: "535761942486",
  appId: "1:535761942486:web:5cf544781380d70b869677",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, db, provider };