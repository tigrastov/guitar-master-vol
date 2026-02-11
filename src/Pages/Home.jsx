import './Home.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/info');
  };

  return (
    <div className='home'>
      <div className='content-container'>
        <div className='text-content'>
          <h1>Гитарная мастерская №35</h1>
          <p> Ремонт и настройка гитар</p>
          <p> Грифы, анкеры и мензура</p>
          <p> Ремонт ладов</p>
          <p> Ремонт электронных компонентов</p>
          <p> Работа с деревом</p>
          <p> Полировка и покраска</p>

        </div>

        <div className='photo-container'>
          <img src='main.jpg' alt='Portrait' className='profile-photo' />
          <button onClick={handleClick} className='photo-button'>
            <img src="/icons8-forward-50.png" alt="Перейти" />
          </button>
        </div>
      </div>
    </div>
  );
}
