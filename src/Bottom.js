import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet } from '@fortawesome/free-solid-svg-icons';
import { faWind } from '@fortawesome/free-solid-svg-icons';

const Bottom = (props) => {
    const [viento, setViento] = useState(props.viento);
    const [humedad, setHumedad] = useState(props.humedad);
    return (
        <div className="bottom__container">
            <div className="bottom__container-humidity">
                <span><FontAwesomeIcon icon={faDroplet} size="lg" style={{ color: "#dcf4e0", }} /> </span>
                <span>{humedad ? humedad : ""}%</span>
            </div>
            <div className="bottom__container-wind">
                <span><FontAwesomeIcon icon={faWind} size="lg" style={{ color: "#dcf4e0", }} /></span>
                <span>{viento ? viento : ""}</span>
            </div>
            <div className="bottom__container-conversor">
                <button>ºC</button>
                <button>ºF</button>

            </div>
        </div>
    )
}

export default Bottom;