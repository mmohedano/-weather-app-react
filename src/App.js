import React, { useState } from 'react';
import data from './ciudades';
import Bottom from './Bottom';
import Middle from './Middle';

import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




function App() {

  const [currentDate, setCurrentDate] = useState(getDate());

  const [cityState, setCityState] = useState(data[0]);

  // const [celsius, setCelsius] = useState(true);

  const onChangeOptions = (e) => {
    const selectedId = e.target.value;
    const selectedCityState = data.filter((d) => d.id == selectedId)[0];
    setCityState(selectedCityState);
  }
 

  return (<>
    <>
      <div className="App__container">

        <div className="header__container">
          <div className="header__container-location">
            <h4>{cityState?.ciudad}</h4>
            <h5>{cityState?.pais}</h5>
          </div>
          <div className="header__container-date">
            <h5>{currentDate}</h5>
            <h5>DOMINGO</h5>
          </div>
        </div>
      <Middle grados ={cityState.gradosc} cielo={cityState.cielo}/>
       <Bottom viento={cityState.viento} humedad={cityState.humedad}/>
      </div>
      <div className="App__select">
        <select className="App__select"
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
  </>);
}

export default App;


