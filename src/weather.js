import React from "react"
import image from "./images/02d.png"



export default function Currentweather(props){
   return (
    <div className="weather" >
    <h1 className="city">{props.city}
    <span className="country"> ({props.country})</span>
    </h1>
    <p>Last updated: 13:48</p>
    <img className="icon" src={image} alt={props.description} />
    <p>Thursday<br />
    August 27, 2020</p>
    <h2>{props.temp}°C | {props.description} </h2>
    </div>
) 
    
}