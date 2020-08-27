import React from "react"
import image from "./images/02d.png"



export default function Weather(){
   return (
    <div className="weather" >
    <h1 className="city">Amsterdam 
    <span className="country"> (NL)</span>
    </h1>
    <p>Last updated: 13:48</p>
    <img className="icon" src={image} alt="Clear Sky" />
    <p>Thursday<br />
    August 27, 2020</p>
    <h2>18°C | Clear Sky</h2>
    </div>
) 
    
}