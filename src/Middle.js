import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';

const Middle = (props) => {
    const [grados, setGrados] = useState (props.grados);
    const [cielo, setCielo] = useState (props.cielo);
    return (
        <div className="body__container">
            <div className="body__container-grades">
                {/* //<h1>{cityState?.gradosc}ºC {cityState?.gradosf}ºF</h1> */}
                {/* <h1>{celsius ? `${cityState?.gradosc}°C` : `${cityState?.gradosf}°F`}</h1> */}
                <h1>{grados ? grados : ""}ºC</h1>
            </div>
            <div className="body__container-icon">
                <h4><FontAwesomeIcon icon={faCloudSun} size="2xl" style={{ color: "#dcf4e0", }} /></h4>
                <h4>{cielo ? cielo : ""}</h4>
            </div>
        </div>
    )
}
export default Middle;