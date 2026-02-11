import './Info.css';
import CardVisit from '../Components/CardVisit.jsx';
import CardMobile from '../Components/CardMobile.jsx';
import CardLanding from '../Components/CardLanding.jsx';
import CardOnlineRegistration from '../Components/CardOnlineRegistration.jsx';
import CardStore from '../Components/CardStore.jsx';

export default function Info(){
    return (
<div className='info'>
      <div className='info-container'>



<div className='text-cont'>
<h1>Гитарная мастерская №35</h1>  
</div>

<div className='cards-container'>
<CardVisit/>
<CardMobile/>
<CardStore/>
<CardOnlineRegistration/>
<CardLanding/>


</div>




      </div>
    </div>
);
}