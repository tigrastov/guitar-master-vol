import './Message.css'
import MessageMe from '../Components/MessageMe.jsx';
export default function Message(){
    return(
       <div className='message'>
      <div className='message-container'>
        <MessageMe/>
      </div>
    </div>
    );
}