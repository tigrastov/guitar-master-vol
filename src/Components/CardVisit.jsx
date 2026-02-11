import { useNavigate } from 'react-router-dom';
import './Card.css';

export default function CardVisit({

  title = 'Ремонт и настройка гитар',
  description = 'Гитара - это инструмент со своими сложными особенностями. Отклонение от необходимых параметров является тревожным сигналом. Именно это мешает инструменту звучать, а вам  - играть. В общем замкнутый круг, единственный выход из которого - своевременно обращать внимание на неполадки и устранять их. В этом вам поможет гитарный мастер ',
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
        <img src="/repair.jpg" alt={title} className="card-image" />
      </div>
      <h2 className="card-title">{title}</h2>
      <p className="card-desc">{description}</p>
      <button className="card-btn" onClick={handleClick}>
        {buttonText}
      </button>
    </div>
  );
}