import React, { useRef, useState } from 'react';
import { ChatMessage } from './ChatMessage';
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore';
import 'firebase/compat/auth';  
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({

    //usr
  
  
  });

const auth = firebase.auth();
const firestore = firebase.firestore();

export const ChatRoom = () => {
    const dummy = useRef();
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);
    const [messages] = useCollectionData(query, {idField: 'id'});
  
    const [formValue, setFormValue] = useState('');
  
    const sendMessage = async(e) => {
  
      e.preventDefault();
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
          <button type="submit" disabled={!formValue}>👋</button>
        </form>
      </>
    );
}