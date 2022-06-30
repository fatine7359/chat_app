import React from "react";
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

export const ChatMessage = (props) => {
    const {text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return(
    <>

      <div className={`message ${messageClass}`}>
        <img src = {photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'}/> 
        <p>{text}</p>
      </div>
    </>
    
  ); 
}