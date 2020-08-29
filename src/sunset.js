import React from "react"
import sunsetIcon from "./images/sunset.png"
import Formattime from "./formattime"


export default function Sunset(props){
    return(
    <div className="condition">
    <p><img className="icon" src={sunsetIcon} alt="Sunrise Icon"/>The sun sets at <Formattime timestamp={props.timestamp} /></p>
    </div>)

}