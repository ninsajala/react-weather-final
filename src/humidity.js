import React from "react"
import humIcon from "./images/humidity.png"

export default function Humidity(props){
    return(
    <div className="condition">
    <p><img className="icon" src={humIcon} alt="Humidity Icon"/>There is a humidity of {props.humidity}%</p>
    </div>)
}