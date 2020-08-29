
import React from "react";

export default function Formatday (props) {
    let date = new Date(props.timestamp);
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let day = days[date.getDay()];
    return (
        <span>{day}</span>)
}



