import React from "react";

export default function Formatshortdate (props){
    let date = new Date(props.timestamp);
      let months = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ];
        let month = months[date.getMonth()];
        let datum = date.getDate();
  
        return (<span>{month} {datum}</span>)
  
  }
  