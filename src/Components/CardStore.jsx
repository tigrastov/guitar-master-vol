import './Card.css';
import { useNavigate } from 'react-router-dom';

export default function CardVisit({

  title = 'Ремонт ладов',
  description = 'Качество ладов на современных, даже самых недорогих, гитарах вполне неплохое. Но причиной проблем с ладами может быть не только их качество. Древесина и условия хранения, условия эксплуатации и деффекты связанные с ней - это все приводит к необходимости ремонта ладов. Какова бы ни была причина ремонта главное помнить, что гриф - деталь отвественная, а лучшее - враг хорошего    ',
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
        <img src="/lads.jpg" alt={title} className="card-image" />
      </div>
      <h2 className="card-title">{title}</h2>
      <p className="card-desc">{description}</p>
       <button className="card-btn" onClick={handleClick}>
        {buttonText}
      </button>
    </div>
  );
}