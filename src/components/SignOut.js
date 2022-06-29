import React from 'react';
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore';
import 'firebase/compat/auth';  


firebase.initializeApp({

    apiKey: "AIzaSyDFImCUb5_mflcIpkLsQwlA_vs26hbMV14",
  
    authDomain: "chatapp-8f796.firebaseapp.com",
  
    projectId: "chatapp-8f796",
  
    storageBucket: "chatapp-8f796.appspot.com",
  
    messagingSenderId: "1028289582412",
  
    appId: "1:1028289582412:web:e5d0396482002f3c256be9",
  
    measurementId: "G-ZWKGD68BB3"
  
  
  });

const auth = firebase.auth();

export const SignOut = () => {
    return auth.currentUser && (
        <button onClick={() => auth.signOut()}>Sign Out</button>
      )
}