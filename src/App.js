import React, { useState } from 'react';
import data from './ciudades';
import Top from './Top';
import Middle from './Middle';
import Bottom from './Bottom';


import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function App() {

 const [cityState, setCityState] = useState(data[0]);

  // const [celsius, setCelsius] = useState(true);

  const onChangeOptions = (e) => {
    const selectedId = e.target.value;
    const selectedCityState = data.filter((d) => d.id == selectedId)[0];
    setCityState(selectedCityState);
  }

  return (<>
    
      <div className="App__container">

      <Top ciudad ={cityState.ciudad} pais={cityState.pais}/>
      <Middle grados ={cityState.gradosc} cielo={cityState.cielo}/>
       <Bottom viento={cityState.viento} humedad={cityState.humedad}/>
      </div>
      <div className="App__select">
        <select className="App__select"
          onChange={(e) => {
            onChangeOptions(e);
          }}>
          {data.map((d) => (
            <option key={d.id} value={d.id}>{d.ciudad}</option>
          ))}
        </select>
      </div>
   
  </>);
}

export default App;


