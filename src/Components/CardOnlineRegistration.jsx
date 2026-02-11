import './Card.css';
import { useNavigate } from 'react-router-dom';

export default function CardVisit({

  title = 'Ремонт электронных компонентов',
  description = 'Хотел как Джо Сатриани, а получилось, что фонит и даже слышно какое-то радио. Не все мы прирожденные радиолюбители. Иногда проще пойти другим путем - обратиться к гитарному мастеру',
  buttonText = 'Узнать больше',
to = '/message',
}) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(to);
  };
  return (
    <div className="card">
      <div className="card-image-wrapper">
        <img src="/elektr.jpg" alt={title} className="card-image" />
      </div>
      <h2 className="card-title">{title}</h2>
      <p className="card-desc">{description}</p>
      <button className="card-btn" onClick={handleClick}>
        {buttonText}
      </button>
    </div>
  );
}