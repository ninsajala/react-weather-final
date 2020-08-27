import React from "react"
import icon from "./images/04n.png"

export default function HourForecast(){
    return (
        <div className="col-3 HourForecast">
        <p>15h</p>       
        <img className="icon" src={icon} alt="Weather Icon" />
        <p>17°C</p>
        </div>
    )
    }

