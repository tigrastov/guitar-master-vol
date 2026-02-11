import { NavLink } from 'react-router-dom';
import './Header.css';

const icons = {
  home: '/icons8-home-100.png',
  contacts: '/icons8-phone-100.png',
  info: '/icons8-folder-100.png',
  telegram: '/icons8-telegram-100.png',
  message: '/icons8-mail-100.png'
};

export default function Header() {
  return (
    <header className="header">
      <nav>
        <NavLink to="/" end>
          <img src={icons.home} alt="Home" className="nav-icon" />
        </NavLink>
        <NavLink to="/info">
          <img src={icons.info} alt="Info" className="nav-icon" />
        </NavLink>
        <NavLink to="/contacts">
          <img src={icons.contacts} alt="Contacts" className="nav-icon" />
        </NavLink>
        <NavLink to="/message">
          <img src={icons.message} alt="Message" className="nav-icon" />
        </NavLink>
       <a 
          href="https://t.me/guitarmaster35" 
          target="_blank" 
          rel="noopener noreferrer"
          className="telegram-link"
        >
          <img src={icons.telegram} alt="Telegram" className="nav-icon" />
        </a>
      </nav>
    </header>
  );
}
