import React from "react"
import celsiusIcon from "./images/celsius.png"
import fahrIcon from "./images/fahrenheit.png"

export default function Tempconverter(){
    return(
    <div className="tempConverter">
    <a title="Set to Celsius" href="/"><img className="icon" src={celsiusIcon} alt="Celsius Icon" /></a> | <a title="Set to Fahrenheit" href="/"><img className="icon" src={fahrIcon} alt="Fahrenheit Icon" /></a>
    </div>)
}