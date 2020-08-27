import React from "react"
import windIcon from "./images/wind.png"

export default function Wind(){
    return(
    <div className="condition">
    <p><img className="icon" src={windIcon} alt="Wind Icon"/>The windspeed is 12 km per hour</p>
    </div>)

}