import React from "react"
import windIcon from "./images/wind.png"

export default function Wind(props){
    return(
    <div className="condition">
    <p><img className="icon" src={windIcon} alt="Wind Icon"/>The wind speed is {props.wind} km per hour</p>
    </div>)

}