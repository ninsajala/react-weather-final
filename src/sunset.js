import React from "react"
import sunsetIcon from "./images/sunset.png"

export default function Sunset(){
    return(
    <div className="condition">
    <p><img className="icon" src={sunsetIcon} alt="Sunrise Icon"/>The sun sets at 21:00h</p>
    </div>)

}