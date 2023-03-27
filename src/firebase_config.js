import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFIqnXkinWV0HvwPppWjrueR17jjLS-fc",
    authDomain: "estiamshopping.firebaseapp.com",
    projectId: "estiamshopping",
    storageBucket: "estiamshopping.appspot.com",
    messagingSenderId: "243278822051",
    appId: "1:243278822051:web:5dd0c9c09a71dc0fc1dd16"
};
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
export default db;