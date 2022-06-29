import logo from './logo.svg';
import React, { useRef, useState } from 'react';
import './App.css';

// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';

import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore';
import 'firebase/compat/auth';  

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';


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
const firestore = firebase.firestore();



function App() {

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

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider);
  }

  return(
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  );
}

function SignOut() {
  return auth.currentUser && (
    <button onClick={() => auth.SignOut()}>Sign Out</button>
  )
}

function ChatRoom() {

  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);
  const [messages] = useCollectionData(query, {idField: 'id'});

  const [formValue, setFormValue] = useState('');

  const sendMessage = async(e) => {

    e.preventDefault();

    //const {uid, photoURL} = auth.currentUser();
    const {uid, photoURL} = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    });

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth'});

  }

  return(
    <>
      <main>
        { messages && messages.map(message => <ChatMessage key={message.id} message={message}/>)}

        <span ref={dummy}></span>

      </main>

      <form onSubmit={sendMessage}>
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice"/>
        <button type="submit" disabled={!formValue}>🕊️</button>
      </form>
    </>
  );
}

function ChatMessage(props){
  const {text, uid, photoURL } = props.message;

  // const {text, uid, photoURL } = props.message;

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

export default App;
