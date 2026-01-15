import { useState } from 'react'
import { ChatMessage } from './ChatMessage';
import { chatbot } from 'supersimpledev'
import dayjs from 'dayjs'
import loadingSign from '../assets/loading-spinner.gif'
import './ChatInput.css'

//components - Functions - PascleCase Style
export function ChatInput({ chatMessages, setChatMessages,clearMessages }) {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function InputText(event) {
    setInputText(event.target.value);
  }

  async function sendMessage() {
    if (isLoading) return;
    setIsLoading(true);

    //Clear the textBox
    setInputText('');


    //Save user message
    const newChatMessage = [
      ...chatMessages, {
        message: inputText,
        sender: 'user',
        time: dayjs().valueOf(),
        key: crypto.randomUUID()
      }
    ]

    setChatMessages(newChatMessage);
    setChatMessages(
      [
        ...newChatMessage,
        {
          message: <img src={loadingSign} className="loading-icon" />,
          sender: 'robot',
          key: crypto.randomUUID()
        }
      ]
    )


    //get response and save it
    try {
      const response = await chatbot.getResponseAsync(inputText);
      setChatMessages([
        ...newChatMessage, {
          message: response,
          sender: 'robot',
          time: dayjs().valueOf(),
          key: crypto.randomUUID()
        }
      ])
    } finally {
      setIsLoading(false);
    }

  }

  return (
    <div className='input-container'>

      <input
        placeholder="Send your text to chatBot"
        size="30"
        onChange={InputText}
        value={inputText}
        className='chat-input'

        onKeyDown={(event) => {
          if (event.key === "Enter" && inputText.trim() !== '') {
            sendMessage()
          };
          event.key === "Escape" && setInputText('');
        }}
      />
      <button
        disabled={isLoading || inputText.trim() === ''}
        onClick={sendMessage}
        className='send-button'
      >send</button>

      <button
        onClick={clearMessages}
        className='clear-message-button'

      >Clear</button>
    </div>
  );
}
