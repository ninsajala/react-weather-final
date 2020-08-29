import React, { useState } from 'react';
import axios from "axios"
import './App.css';
import Loader from 'react-loader-spinner'

import Currentweather from "./weather"
//import Search from "./search"
import Wind from "./wind"
import Humidity from "./humidity"
import Mintemp from "./min-temp"
import Maxtemp from "./max-temp"
import Sunrise from "./sunrise"
import Sunset from "./sunset"
import Footer from "./footer"
import HourForecast from './hourForecast';
import DayForecast from "./dayForecast"
import Tempconverter from "./temp-converter"



function App() {
  const [loaded, setLoaded] = useState(false)
  const [city, setCity] = useState("")
  const [description, setDescription] = useState("")
  const [country, setCountry] = useState("")
  const [currenttemp, setCurrenttemp] = useState("")
  const [mintemp, setMintemp] = useState("")
  const [maxtemp, setMaxtemp] = useState("")
  const [wind, setWind] = useState("")
  const [humidity, setHumidity] = useState("")

  function getWeather(response){
  setLoaded(true)
  setCity(response.data.name)
  setDescription(response.data.weather[0].description)
  setCountry(response.data.sys.country)
  setCurrenttemp(Math.round(response.data.main.temp))
  setMintemp(Math.round(response.data.main.temp_min))
  setMaxtemp(Math.round(response.data.main.temp_max))
  setWind(Math.round(response.data.wind.speed * 3,6))
  setHumidity(response.data.main.humidity)
  }

  function setLocation(){
  const apiKey =`1be83355b3c9da70c189c0df40350020`
  let Url = `https://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=${apiKey}&units=metric` 
  axios.get(Url).then(getWeather)
}

 if (loaded){
  return (
    <div className="App">
    <div className="container-sm">
    <div className="row">
    <div className="col-6">
    <Currentweather city={city} description={description} country={country} temp={currenttemp}/> 
    
    <div className="row">
      <HourForecast />
      <HourForecast />
      <HourForecast />
      <HourForecast />
    </div>
    </div>
    <div className="col-6">
    <div className="Search">
        <input className="Searchbar" type="text" placeholder="Search for a city..." />
        <button className="Searchbutton" type="submit" title="Search"><i className="fas fa-search-location"></i></button>
        <button className="Searchbutton location" title="To current location"><i className="fas fa-map-marker-alt"></i></button>
    </div>
     <Tempconverter />
     <Mintemp temp={mintemp}/>
     <Maxtemp temp={maxtemp}/>
     <Wind wind={wind}/> 
     <Humidity humidity={humidity}/>
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
    
  )}
  else { 
  setLocation()
  return (
    <Loader
         type="Circles"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000} //3 secs
 
      />
  )

  };
}

export default App;
