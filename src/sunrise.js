import React from "react"
import sunriseIcon from "./images/sunrise.png"

export default function Sunrise(){
    return(
    <div className="condition">
    <p><img className="icon" src={sunriseIcon} alt="Sunrise Icon"/>The sun rises at 07:00h</p>
    </div>)

}