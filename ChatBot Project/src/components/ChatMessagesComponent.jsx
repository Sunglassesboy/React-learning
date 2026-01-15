import { useRef, useEffect } from 'react'
import { ChatMessage } from './ChatMessage';

function useAutoScroll(dependencies) {
        const chatMessagesRef = useRef(null);

        useEffect(() => {
          const containerElem = chatMessagesRef.current;
          if (containerElem) {
            containerElem.scrollTop = containerElem.scrollHeight;
          }
        }, [dependencies]);

        return chatMessagesRef;

      }


export function ChatMessagesComponent({ chatMessages }) {

      const chatMessagesRef= useAutoScroll(chatMessages);


      return (
        <div className='chat-messages-component' ref={chatMessagesRef}>

          <p className='welcome-message'>
            {chatMessages.length === 0 && "Welcome to the chatbot Project, Send the message using the textbox below"}
          </p>

          {chatMessages.map((message) => {
            return (
              <ChatMessage
                message={message.message}
                sender={message.sender}
                time={message.time}
              />
            )
          })}
        </div>
      )
    }