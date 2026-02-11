import './Card.css';
import { useNavigate } from 'react-router-dom';

export default function CardVisit({
  title = 'Работа с деревом',
  description = 'Ничто не вечно и никто не застрахован - все в таком духе.. В вопросах ремонта инструментов не следует мыслить столь широко. Скорее надо смотреть конкретно по месту. Глаза все еще боятся, а дело уже идет. Приносите - что-нибудь придумаем',
  buttonText = 'Узнать больше',
to = '/message',
}) {
    const navigate = useNavigate(); 
  const handleClick = () => {
    navigate(to);
  }
  return (
    <div className="card">
      <div className="card-image-wrapper">
        <img src="/glue.JPG" alt={title} className="card-image" />
      </div>
      <h2 className="card-title">{title}</h2>
      <p className="card-desc">{description}</p>
      <button className="card-btn" onClick={handleClick}>
        {buttonText}
      </button>
    </div>
  );
}