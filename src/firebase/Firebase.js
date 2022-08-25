import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAO6FJjCnr1MvwCpaAr1sH3iBUjnf3h3kA",
  authDomain: "tweets-nacho.firebaseapp.com",
  projectId: "tweets-nacho",
  storageBucket: "tweets-nacho.appspot.com",
  messagingSenderId: "289657698189",
  appId: "1:289657698189:web:ff50f2a5e832ac740aafc4",
  measurementId: "G-3Z2XSKMCHD"
};

// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export const firestore = firebase.firestore();

//module of authentication
export const auth = firebase.auth();
// provider of authentication
export const provider = new firebase.auth.GoogleAuthProvider();
// enable to login using Google pop-up
export const googleLogin = () => auth.signInWithPopup(provider);
// enable to logout
export const logout = () => auth.signOut();

export const isLogged = () => {
  return (auth.currentUser !== null && auth.currentUser.uid !== null);
};

export const getCurrentUser = () => {
  return auth.currentUser;
};

export default firebase;