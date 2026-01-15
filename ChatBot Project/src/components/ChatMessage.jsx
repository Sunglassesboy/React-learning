import dayjs from 'dayjs'
import robotProfileImage from '../assets/robot.png'
// import userProfileImage from '../assets/user.png' 
import instagramProfileImage from '../assets/Instagram.jpg' 
import './ChatMessage.css'

export function ChatMessage({ message, sender,time }) {

      //const message = props.message;
      //const sender = props.sender;

      //2nd Way of destructuring
      // const { message, sender } = props;

      /* if(sender === 'robot'){
         return(
           <div>
             <img src="robot.png" width='40' />
             {message}
           </div>
         )
       } */
      return (
        <div className={sender === "robot" ? 'chat-message-robot' : 'chat-message-user'}>
          {sender === "robot" && (
            <img src={robotProfileImage} className='chat-message-profile'/>
          )}
          <div className='chat-message-text'>
            {message}
            <p className='chat-message-time'>{dayjs(time).format('h:mma')}</p> 
          </div>

          {sender === "user" && (
            <img src={instagramProfileImage} className='chat-message-profile' />)}
        </div>
      )
    };

    //fragments <></>
  
