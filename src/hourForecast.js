import React from "react"
import Formattime from "./formattime"

export default function HourForecast(props){
    return (
        <div className="col-3 HourForecast">
        <p><Formattime timestamp={props.timestamp}/><br />
        <img className="icon" src={`./images/${props.icon}.png`} alt={props.description} /> <br />
        {props.temp}°{props.unit}</p>
        </div>
    )
    }

