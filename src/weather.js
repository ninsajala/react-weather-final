import React from "react"
import Formatday from "./formatday.js"
import Formattime from "./formattime"
import Formatdate from "./formatdate"


export default function Currentweather(props){
    let iconSrc = `./images/${props.icon}.png`

   return (
    <div className="weather" >
    <h1 className="city">{props.city}
    <span className="country"> ({props.country})</span>
    </h1>
    <p>Last updated: <Formattime timestamp={props.currenttime}/> </p>
    <img className="icon" src={(iconSrc)} alt={props.description} />
    <p><Formatday timestamp={props.currenttime} /><br />
    <Formatdate timestamp={props.currenttime} /></p>
    <h2>{props.temp}°C | {props.description} </h2>
    </div>
) 
    
}