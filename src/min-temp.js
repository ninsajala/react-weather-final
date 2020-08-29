import React from "react"
import minIcon from "./images/min-temp.png"

export default function Mintemp(props){
    return(
    <div className="condition">
    <p><img className="icon" src={minIcon} alt="Minimum Temperature Icon"/>The minimum temperature is {props.temp}°C</p>
    </div>)
}