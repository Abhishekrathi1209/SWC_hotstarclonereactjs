import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBcnhuBmvtT-QLYF8SPejyEM-E5g6-nfpI",
    authDomain: "hotstar-auth.firebaseapp.com",
    projectId: "hotstar-auth",
    storageBucket: "hotstar-auth.appspot.com",
    messagingSenderId: "775626754873",
    appId: "1:775626754873:web:529ec7b4004c4e4cc9b6e8"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };