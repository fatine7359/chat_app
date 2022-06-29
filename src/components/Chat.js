import React from 'react';
import { ChatRoom } from './ChatRoom';
import { SignIn } from './SignIn';
import { SignOut } from './SignOut';
import './Style.css';

import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore';
import 'firebase/compat/auth';  

import { useAuthState } from 'react-firebase-hooks/auth';


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

export const Chat = () => {
    const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header">
        <h1>💬</h1>
        <SignOut />
      </header>

      <section>
          {user ? <ChatRoom/> : <SignIn/>}
      </section>

    </div>
  );
}