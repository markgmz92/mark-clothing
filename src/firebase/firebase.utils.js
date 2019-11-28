import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBazAaHWLQBGemS3SdC-WzPZt9_0Y1xKYI",
    authDomain: "mark-clothing.firebaseapp.com",
    databaseURL: "https://mark-clothing.firebaseio.com",
    projectId: "mark-clothing",
    storageBucket: "mark-clothing.appspot.com",
    messagingSenderId: "7364044418",
    appId: "1:7364044418:web:34689fe7d7c5e4dadef69b",
    measurementId: "G-NSZ7ZQSKJ5"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;