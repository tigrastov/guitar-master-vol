import './Card.css';
import { useNavigate } from 'react-router-dom';

export default function CardVisit({

  title = 'Настройка анкера и мензуры',
  description = 'Геометрия инструмента тесно связана с тонкими настройками металлических деталей в электрогитаре Актуальные проблемы: Большое расстояния от накладки грифа до струн, Гитара не строит - часто решаются именно тонкими настройками, которые порой даются только с опытом',       

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
        <img src="/menz.jpg" alt={title} className="card-image" />
      </div>
      <h2 className="card-title">{title}</h2>
      <p className="card-desc">{description}</p>
      <button className="card-btn" onClick={handleClick}>
        {buttonText}
      </button>
    </div>
  );
}