import React, { useState } from "react";

const Top = (props) => {

    const [ciudad, setCiudad] = useState(props.ciudad);
    const [pais, setPais] = useState(props.pais);
    const [currentDate, setCurrentDate] = useState(getDate());

    const getDate = () => {
        const today = new Date();
        const month = today.getMonth() + 1;
        const date = today.getDate();
        const day = today.getDay();
    return `${date} ${month} `;
    }
    return (
        <div className="header__container">
        <div className="header__container-location">
          <h4>{ciudad ? ciudad : ""}</h4>
          <h5>{pais ? pais : ""}</h5>
        </div>
        <div className="header__container-date">
          <h5>{currentDate}</h5>
          <h5>DOMINGO</h5>
        </div>
      </div>
    )
}
export default Top;
