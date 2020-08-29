import React from "react"
import maxIcon from "./images/max-temp.png"

export default function Maxtemp(props){
    return(
    <div className="condition">
    <p><img className="icon" src={maxIcon} alt="Maximum Temperature Icon"/>The maximum temperature is {props.temp}°C</p>
    </div>)
}