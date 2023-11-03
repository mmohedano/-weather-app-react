import React, {useState} from 'react';

import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDroplet} from '@fortawesome/free-solid-svg-icons'
import {faWind} from '@fortawesome/free-solid-svg-icons'
import {faCloudSun} from '@fortawesome/free-solid-svg-icons'


const data = [
  {
    id: 1,
    ciudad: "ALMERÍA",
    pais: "ESPAÑA",
    humedad: 50,
    gradosc: 28,
    gradosf: 82,
    viento: "11 mph",
    cielo: "SOLEADO",
  },
  {
    id: 2,
    ciudad: "PAMPLONA",
    pais: "ESPAÑA",
    humedad: 55,
    gradosc: 23,
    gradosf: 73,
    viento: "9 mph",
    cielo: "NUBLADO",
  },
  {
    id: 3,
    ciudad: "SANTANDER",
    pais: "ESPAÑA",
    humedad: 70,
    gradosc: 20,
    gradosf: 68,
    viento: "12 mph",
    cielo: "LLUVIA",
  },
  {
    id: 4,
    ciudad: "TOLEDO",
    pais: "ESPAÑA",
    humedad: 40,
    gradosc: 30,
    gradosf: 86,
    viento: "13 mph",
    cielo: "SOLEADO",
  },
  {
    id: 5,
    ciudad: "SORIA",
    pais: "ESPAÑA",
    humedad: 60,
    gradosc: 22,
    gradosf: 72,
    viento: "8 mph",
    cielo: "NUBLADO",
  },
  {
    id: 6,
    ciudad: "HUELVA",
    pais: "ESPAÑA",
    humedad: 60,
    gradosc: 26,
    gradosf: 79,
    viento: "10 mph",
    cielo: "SOLEADO",
  },
  {
    id: 7,
    ciudad: "SALAMANCA",
    pais: "ESPAÑA",
    humedad: 50,
    gradosc: 24,
    gradosf: 75,
    viento: "9 mph",
    cielo: "LLUVIA",
  },
  {
    id: 8,
    ciudad: "BADAJOZ",
    pais: "ESPAÑA",
    humedad: 45,
    gradosc: 31,
    gradosf: 88,
    viento: "11 mph",
    cielo: "SOLEADO",
  },
  {
    id: 9,
    ciudad: "CÁDIZ",
    pais: "ESPAÑA",
    humedad: 65,
    gradosc: 27,
    gradosf: 81,
    viento: "12 mph",
    cielo: "SOLEADO",
  },
  {
    id: 10,
    ciudad: "LEÓN",
    pais: "ESPAÑA",
    humedad: 55,
    gradosc: 22,
    gradosf: 72,
    viento: "10 mph",
    cielo: "NUBLADO",
  },
];
function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDay();
  const date = today.getDate();
  return `${date} ${month} `;
}

function App() {
  const [currentDate, setCurrentDate] = useState(getDate());
  
  const [cityState, setCityState] = useState();

  const onChangeOptions = (e) => {
    const selectedId = e.target.value;
    const selectedCityState = data.filter((d) => d.id ==selectedId)[0];
    setCityState(selectedCityState);
  }
  const handleClickC = () =>{
    <h1>{cityState?.gradosc}Cº</h1>
  }
  const handleClickF = () =>{
    <h1>{cityState?.gradosf}Fº</h1>
  }

  return (
  <>
    <div className="App__container">

      
    
      <div className="header__container"> 
   <div className="header__container-location">
     <h4>{cityState?.ciudad}</h4>
     <h5>{cityState?.pais}</h5>
   </div>
   <div className="header__container-date">
     <h5>{currentDate}</h5>
     <h5>VIERNES</h5>
    </div>
   </div>
   <div className="body__container"> 
      <div className="body__container-grades">
      <h1>{cityState?.gradosc}Cº {cityState?.gradosf} Fº</h1>
      </div>
      <div className="body__container-icon">
      <h4><FontAwesomeIcon icon={faCloudSun} size="2xl" style={{color: "#dcf4e0",}} /></h4>
      <h4>{cityState?.cielo}</h4>
      </div>
     </div>
     <div className="bottom__container">
     <div className="bottom__container-humidity">
       <span><FontAwesomeIcon icon={faDroplet} size="lg" style={{color: "#dcf4e0",}} /> </span>
       <span>{cityState?.humedad}%</span>
     </div>
     <div className="bottom__container-wind">
       <span><FontAwesomeIcon icon={faWind} size="lg" style={{color: "#dcf4e0",}} /></span>
       <span>{cityState?.viento}</span>
     </div>
     <div className="bottom__container-conversor">
       <button onClick={handleClickC} className="bottom__container-button-c">
        Cº 
        </button>
       <button onClick={handleClickF} className="bottom__container-button-f">
        Fº
        </button>
     </div>
     </div>
      
     </div>
     <div className="App__select">
     <select  className="App__select"
      onChange={(e) => {
        onChangeOptions(e);
      }
      }>
        {data.map((d) => (
          <option key={d.id} value={d.id}>{d.ciudad}</option>
        ))}
      </select>
      </div>
    </>
  );
}

export default App;


