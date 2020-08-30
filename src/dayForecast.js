import React from "react"
import Formatshortdate from "./formatshortdate"
import Formatday from "./formatday.js"

export default function DayForecast(props){
    return (
        <div className="col-2 DayForecast">
        <p><Formatday timestamp={props.timestamp}/><br />
           <Formatshortdate timestamp={props.timestamp} /></p>       
        <img className="icon" src={`./images/${props.icon}.png`} alt={props.description} />
        <p>{props.temp}°{props.unit}</p>
        </div>
    )
    }

