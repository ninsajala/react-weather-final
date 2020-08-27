import React from 'react';
import Weather from "./weather"
import Search from "./search"
import Wind from "./wind"
import Humidity from "./humidity"
import Mintemp from "./min-temp"
import Maxtemp from "./max-temp"
import Sunrise from "./sunrise"
import Sunset from "./sunset"
import Footer from "./footer"
import './App.css';
import HourForecast from './hourForecast';
import DayForecast from "./dayForecast"
import Tempconverter from "./temp-converter"


function App() {
  return (
    

    <div className="App">
    <div className="container-sm">
    <div className="row">
    <div className="col-6">
    <Weather /> 
    
    <div className="row">
      <HourForecast />
      <HourForecast />
      <HourForecast />
      <HourForecast />
    </div>
    </div>
    <div className="col-6">
     <Search />
     <Tempconverter />
     <Mintemp />
     <Maxtemp />
     <Wind /> 
     <Humidity />
     <Sunrise />
     <Sunset />
     
    </div>
    </div>
    <hr />
    <p>Coming Days</p>
    <div className="row">
      <div className="col-1"></div>
      <DayForecast />
      <DayForecast />
      <DayForecast />
      <DayForecast />
      <DayForecast />
      <div className="col-1"></div>
    </div>
    <Footer />
    </div>
    </div>
    
  );
}

export default App;
