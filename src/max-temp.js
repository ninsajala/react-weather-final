import React from "react"
import maxIcon from "./images/max-temp.png"

export default function Maxtemp(){
    return(
    <div className="condition">
    <p><img className="icon" src={maxIcon} alt="Maximum Temperature Icon"/>The maximum temperature is 21°C</p>
    </div>)
}