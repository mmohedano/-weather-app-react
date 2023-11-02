import React, {useState} from 'react';
import './style.css';

const data = [
  {
    id: 1,
    ciudad: "Almería",
    pais: "España",
    humedad: 50,
    gradosc: 28,
    gradosf: 82,
    viento: "11 mph",
    cielo: "soleado",
  },
  {
    id: 2,
    ciudad: "Pamplona",
    pais: "España",
    humedad: 55,
    gradosc: 23,
    gradosf: 73,
    viento: "9 mph",
    cielo: "nublado",
  },
  {
    id: 3,
    ciudad: "Santander",
    pais: "España",
    humedad: 70,
    gradosc: 20,
    gradosf: 68,
    viento: "12 mph",
    cielo: "lluvia",
  },
  {
    id: 4,
    ciudad: "Toledo",
    pais: "España",
    humedad: 40,
    gradosc: 30,
    gradosf: 86,
    viento: "13 mph",
    cielo: "soleado",
  },
  {
    id: 5,
    ciudad: "Soria",
    pais: "España",
    humedad: 60,
    gradosc: 22,
    gradosf: 72,
    viento: "8 mph",
    cielo: "nublado",
  },
  {
    id: 6,
    ciudad: "Huelva",
    pais: "España",
    humedad: 60,
    gradosc: 26,
    gradosf: 79,
    viento: "10 mph",
    cielo: "soleado",
  },
  {
    id: 7,
    ciudad: "Salamanca",
    pais: "España",
    humedad: 50,
    gradosc: 24,
    gradosf: 75,
    viento: "9 mph",
    cielo: "lluvia",
  },
  {
    id: 8,
    ciudad: "Badajoz",
    pais: "España",
    humedad: 45,
    gradosc: 31,
    gradosf: 88,
    viento: "11 mph",
    cielo: "soleado",
  },
  {
    id: 9,
    ciudad: "Cádiz",
    pais: "España",
    humedad: 65,
    gradosc: 27,
    gradosf: 81,
    viento: "12 mph",
    cielo: "soleado",
  },
  {
    id: 10,
    ciudad: "León",
    pais: "España",
    humedad: 55,
    gradosc: 22,
    gradosf: 72,
    viento: "10 mph",
    cielo: "nublado",
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
      <h4>⛅️</h4>
      <h4>{cityState?.cielo}</h4>
      </div>
     </div>
     <div className="bottom__container">
     <div className="bottom__container-humidity">
       <span>💧 </span>
       <span>{cityState?.humedad}%</span>
     </div>
     <div className="bottom__container-wind">
       <span>💨 </span>
       <span>{cityState?.viento}</span>
     </div>
     <div className="bottom__container-conversor">
       <span>Cº </span>
       <span>Fº</span>
     </div>
     </div>
      
     </div>
     <div className="App__select">
     <select 
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


