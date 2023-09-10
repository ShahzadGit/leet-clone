import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAMtdwV-5RlmvdrWd1VGSg7Q6UHwen3_F8",
    authDomain: "leet-clone-01.firebaseapp.com",
    projectId: "leet-clone-01",
    storageBucket: "leet-clone-01.appspot.com",
    messagingSenderId: "996251610540",
    appId: "1:996251610540:web:b4a4742e3338905e465e09"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };