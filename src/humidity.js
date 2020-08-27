import React from "react"
import humIcon from "./images/humidity.png"

export default function Humidity(){
    return(
    <div className="condition">
    <p><img className="icon" src={humIcon} alt="Humidity Icon"/>There is a humidity of 40%</p>
    </div>)
}