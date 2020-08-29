import React from "react";

export default function Formattime(props){
    let date = new Date(props.timestamp);
    let hour = "0" + date.getHours();
    let minutes = "0" + date.getMinutes();

    return (<span>{hour.substr(-2)}:{minutes.substr(-2)}</span>)
} 
