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

  //urs


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