import CallBack from '../Components/CallBack.jsx';
import './Contacts.css';


export default function Contacts() {


  return (
    <div className='contacts'>
      <div className='contacts-container'>
        <div className='text-content'>

          <h2>Контакты</h2>

          <div className='link-container'>
            <img src='/phone.png' className='icon-link' alt='phone' />
            <a href="tel:+79005532251" className="contact-link">+7 (900) 553-22-51</a>
          </div>


          <div className='link-container'>
            <img src='/telega.png' className='icon-link' alt='telega' />
            <a href="https://t.me/guitarmaster35" target="_blank" className="contact-link">Telegram</a>
          </div>


        </div>

        <div className='callback-form'>
          <CallBack />

        </div>

      </div>

    </div>


  );
}