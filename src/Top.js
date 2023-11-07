import React, { useState } from "react";



  const Top = (props) => {

    const getDate = () => {
      const today = new Date();
      const month = today.getMonth() + 1;
      const year = today.getFullYear();
      const date = today.getDate();
      
      return `${date} / ${month} /${year} `;
    }
    const [ciudad, setCiudad] = useState(props.ciudad);
    const [pais, setPais] = useState(props.pais);
    const [currentDate, setCurrentDate] = useState(getDate());


  
  return (
    <div className="header__container">
      <div className="header__container-location">
        <h4>{ciudad ? ciudad : ""}</h4>
        <h5>{pais ? pais : ""}</h5>
      </div>
      <div className="header__container-date">
        <h5>{currentDate}</h5>
        
      </div>
    </div>
  )
}
export default Top;
