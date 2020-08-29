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
  const [data, setData] = useState("")
  let defaultCity = "Amsterdam"

  function getWeather(response){
  setLoaded(true)
  setData(
    {
      city: response.data.name,
      description: response.data.weather[0].description,
      country: response.data.sys.country,
      currenttemp: Math.round(response.data.main.temp),
      mintemp: Math.round(response.data.main.temp_min),
      maxtemp: Math.round(response.data.main.temp_max),
      wind: Math.round(response.data.wind.speed * 3,6),
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      currenttime: response.data.dt *1000,
      risetime: response.data.sys.sunrise *1000,
      settime: response.data.sys.sunset *1000,
    }
  )

  }

  function setLocation(){
  const apiKey =`1be83355b3c9da70c189c0df40350020`
  let Url = `https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&appid=${apiKey}&units=metric` 
  axios.get(Url).then(getWeather)
}

 if (loaded){
  return (
    <div className="App">
    <div className="container-sm">
    <div className="row">
    <div className="col-6">
    <Currentweather city={data.city} description={data.description} country={data.country} temp={data.currenttemp} icon={data.icon} currenttime={data.currenttime}/> 
    
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
     <Mintemp temp={data.mintemp}/>
     <Maxtemp temp={data.maxtemp}/>
     <Wind wind={data.wind}/> 
     <Humidity humidity={data.humidity}/>
     <Sunrise timestamp={data.risetime}/>
     <Sunset timestamp={data.settime}/>
     
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
    <div className="Loader">
      Loading..
    <Loader
         type="Circles"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000} //3 secs
 
      />
      </div>
  )

  };
}

export default App;
