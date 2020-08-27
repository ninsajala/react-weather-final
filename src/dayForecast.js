import React from "react"
import icon from "./images/04n.png"

export default function DayForecast(){
    return (
        <div className="col-2 DayForecast">
        <p>Wed<br />
        Aug 31</p>       
        <img className="icon" src={icon} alt="Weather Icon" />
        <p>18°C</p>
        </div>
    )
    }

