import { initializeApp } from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCgJF6oJshL-VxL-e-X3jeFyZcePrw55mQ",
    authDomain: "clothing-mart-db.firebaseapp.com",
    projectId: "clothing-mart-db",
    storageBucket: "clothing-mart-db.appspot.com",
    messagingSenderId: "728018493347",
    appId: "1:728018493347:web:1fe5788d0b08cfc6038416"
  };

  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef  = doc(db, 'users', userAuth.uid)

    const userSnapShot = await getDoc(userDocRef)
// if block
    if (!userSnapShot.exists()){
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt
        });
      } catch (error) {
        console.log("error creating the user", error.message);
      }
    }

    return userDocRef
  }

  