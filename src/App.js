<<<<<<< HEAD
import React, { useState } from 'react';
import jsonData from './ciudades';

import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDroplet } from '@fortawesome/free-solid-svg-icons'
import { faWind } from '@fortawesome/free-solid-svg-icons'
import { faCloudSun } from '@fortawesome/free-solid-svg-icons'




=======
import React, {useState} from 'react';
import './style.css';
import data from "./data.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDroplet} from '@fortawesome/free-solid-svg-icons'
import {faWind} from '@fortawesome/free-solid-svg-icons'
import {faCloudSun} from '@fortawesome/free-solid-svg-icons'

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDay();
  const date = today.getDate();
  return `${date} ${month} `;
}
>>>>>>> refs/remotes/origin/main

function App() {
  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDay();
    const date = today.getDate();
    return `${date} ${month} `;
  }
  const [currentDate, setCurrentDate] = useState(getDate());

  const [cityState, setCityState] = useState();

  const [celsius, setCelsius] = useState(true);

  const onChangeOptions = (e) => {
    const selectedId = e.target.value;
    const selectedCityState = jsonData.filter((d) => d.id == selectedId)[0];
    setCityState(selectedCityState);
  }
  const handleClickC = () => {
    <h1>{cityState?.gradosc}Cº</h1>
  }
  const handleClickF = () => {
    <h1>{cityState?.gradosf}Fº</h1>
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
            <h5>VIERNES</h5>
          </div>
        </div>
        <div className="body__container">
          <div className="body__container-grades">
            {/* //<h1>{cityState?.gradosc}ºC {cityState?.gradosf}ºF</h1> */}
            <h1>{celsius ? `${cityState.gradosc}°C` : `${cityState.gradosf}°F`}</h1>
          </div>
          <div className="body__container-icon">
            <h4><FontAwesomeIcon icon={faCloudSun} size="2xl" style={{ color: "#dcf4e0", }} /></h4>
            <h4>{cityState?.cielo}</h4>
          </div>
        </div>
        <div className="bottom__container">
          <div className="bottom__container-humidity">
            <span><FontAwesomeIcon icon={faDroplet} size="lg" style={{ color: "#dcf4e0", }} /> </span>
            <span>{cityState?.humedad}%</span>
          </div>
          <div className="bottom__container-wind">
            <span><FontAwesomeIcon icon={faWind} size="lg" style={{ color: "#dcf4e0", }} /></span>
            <span>{cityState?.viento}</span>
          </div>
          <div className="bottom__container-conversor">
            <button onClick={handleClickC} className="bottom__container-button-c">
              ºC
            </button>
           
          </div>
        </div>

      </div>
<<<<<<< HEAD
      <div className="App__select">
        <select className="App__select"
          onChange={(e) => {
            onChangeOptions(e);
          }
          }>
          {jsonData.map((d) => (
            <option key={d.id} value={d.id}>{d.ciudad}</option>
          ))}
        </select>
=======
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
>>>>>>> refs/remotes/origin/main
      </div>
    </>
  </>);
}

export default App;


