import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBLEBj8TjlyenE2nmETjwDhfkzCSDoQF2c",
    authDomain: "shop-it-230597.firebaseapp.com",
    databaseURL: "https://shop-it-230597.firebaseio.com",
    projectId: "shop-it-230597",
    storageBucket: "shop-it-230597.appspot.com",
    messagingSenderId: "1048131918007",
    appId: "1:1048131918007:web:b3f485a2434dd4f49a9532",
    measurementId: "G-HLE1EJL8HZ"
  };

  export const createUserProfileDocument = async(userAuth , additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot  = await userRef.get();
    if(!snapShot.exists){
      const { displayName , email } = userAuth;
      const createdAt = new Date();
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(error){
        console.log('error creating Data', error.message)
      }
    }
    return userRef;
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore  = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;