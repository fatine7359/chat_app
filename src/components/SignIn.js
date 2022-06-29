import React from 'react';
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore';
import 'firebase/compat/auth';  


firebase.initializeApp({

   //urs
  
  
  });

const auth = firebase.auth();

export const SignIn = () => {


    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
    
        auth.signInWithPopup(provider);
    }

    return (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
    );
}