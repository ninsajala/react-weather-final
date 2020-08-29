import React from "react";

export default function Formatdate (props){
    let date = new Date(props.timestamp);
    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      let month = months[date.getMonth()];
      let datum = date.getDate();
      let year = date.getFullYear();

      return (<span>{month} {datum}, {year}</span>)
}
