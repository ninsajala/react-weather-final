import React from "react"
import sunriseIcon from "./images/sunrise.png"
import Formattime from "./formattime"

export default function Sunrise(props){
    return(
    <div className="condition">
    <p><img className="icon" src={sunriseIcon} alt="Sunrise Icon"/>The sun rises at <Formattime timestamp={props.timestamp}/></p>
    </div>)

}