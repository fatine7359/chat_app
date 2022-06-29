import React from 'react';
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore';
import 'firebase/compat/auth';  


firebase.initializeApp({

    //urs
  
  
  });

const auth = firebase.auth();

export const SignOut = () => {
    return auth.currentUser && (
        <button onClick={() => auth.signOut()}>Sign Out</button>
      )
}