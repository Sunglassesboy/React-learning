import { useState, useEffect } from 'react'
import { ChatInput } from './components/ChatInput';
import { ChatMessagesComponent } from './components/ChatMessagesComponent';
import { chatbot } from 'supersimpledev'
import './App.css'

    function App() {
      const [chatMessages, setChatMessages] = useState(() => {
        try{
            return  JSON.parse(localStorage.getItem('messages')) || [];
        } catch{
          return [];
        }
      
      });

      useEffect(() => {
        chatbot.addResponses({
          test: "test Sucessfull!!"
        })

      }, [])

      //store the messages
      useEffect(() => {
        localStorage.setItem('messages', JSON.stringify(chatMessages))
      }, [chatMessages])

      //clear messages function
      function clearMessages(){
        localStorage.removeItem('messages');
        setChatMessages([]);
      }

      //--- const chatMessages = array[0];
      //--- const setChatMessages = array[1];

      return (
        <div className='app-container'>
          <ChatMessagesComponent chatMessages={chatMessages} />
          <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages} clearMessages={clearMessages}/>
        </div>
      )
    }

export default App
