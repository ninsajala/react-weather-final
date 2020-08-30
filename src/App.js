import React, { useState } from 'react';
import axios from "axios"
import './App.css';
import Loader from 'react-loader-spinner'
import Currentweather from "./weather"
import Wind from "./wind"
import Humidity from "./humidity"
import Mintemp from "./min-temp"
import Maxtemp from "./max-temp"
import Sunrise from "./sunrise"
import Sunset from "./sunset"
import Footer from "./footer"
import HourForecast from './hourForecast';
import DayForecast from "./dayForecast"
import celsiusIcon from "./images/celsius.png"
import fahrIcon from "./images/fahrenheit.png"

function App() {
  let defaultCity = "Amsterdam"
  let latitude = null
  let longitude = null
 
  const [loaded, setLoaded] = useState(false)
  const [data, setData] = useState("")
  const [city, setCity] = useState(defaultCity)
  const [unit, setUnit] = useState(`C`)
  const [current, setCurrent] = useState("")
  const [min, setMin] = useState("")
  const [max, setMax] = useState("")
  
  function handleCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setLocation();
  }
  function getGeolocation(event){
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(getCoords);
  }
  function getCoords(position){
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    let apiKey = "1be83355b3c9da70c189c0df40350020"
    let geoUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(geoUrl).then(handleGeolocation);
  }
  function handleGeolocation(response){
    setCity(response.data.name)
    setLocation()
  }
  function getWeather(response){
  setLoaded(true)
  setData(
    { city: response.data.name,
      description: response.data.weather[0].description,
      country: response.data.sys.country,
      wind: Math.round(response.data.wind.speed * 3,6),
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      currenttime: response.data.dt *1000,
      risetime: response.data.sys.sunrise *1000,
      settime: response.data.sys.sunset *1000,
      currentCel: Math.round(response.data.main.temp),
      minCel: Math.round(response.data.main.temp_min),
      maxCel: Math.round(response.data.main.temp_max)
    })
    setCurrent(data.currentCel)
    setMin(data.minCel)
    setMax(data.maxCel)
  }
  function setLocation(){
    const apiKey =`1be83355b3c9da70c189c0df40350020`
    let Url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric` 
    axios.get(Url).then(getWeather)
    }
  function setCelsius(event){
    event.preventDefault();
    setUnit(`C`)  
    setLocation()
  }  

  function setFahrenheit(event){
    event.preventDefault();
    setUnit(`F`)
    setCurrent(Math.round(data.currentCel * 1.8 + 32)) 
    setMin(Math.round(data.minCel *1.8 + 32)) 
    setMax(Math.round(data.maxCel *1.8 + 32)) 
  }

 if (loaded){
  return (
    <div className="App">
    <div className="container-sm">
    <div className="row">
    <div className="col-6">

    <Currentweather 
    city={data.city} 
    description={data.description} 
    country={data.country} 
    temp={current}
    unit={unit}  
    icon={data.icon} 
    currenttime={data.currenttime}/> 
    
    <div className="row">
      <HourForecast />
      <HourForecast />
      <HourForecast />
      <HourForecast />
    </div>
    </div>
    <div className="col-6">
    <div className="Search">
        <form>
        <input className="Searchbar" type="text" placeholder="Search for a city..." autocomplete="off" onChange={handleCity}/>
        <button className="Searchbutton" type="submit" title="Search" onClick={handleSubmit}><i className="fas fa-search-location"></i></button>
        <button className="Searchbutton location" title="To current location" onClick={getGeolocation}><i className="fas fa-map-marker-alt"></i></button>
        </form>
    </div>
    <div className="tempConverter">
        <p>Change units</p>
       <a title="Set to metric" href="/"><img className="icon" src={celsiusIcon} alt="Celsius Icon" onClick={setCelsius}/> </a> 
     | <a title="Set to imperial" href="/"><img className="icon" src={fahrIcon} alt="Fahrenheit Icon" onClick={setFahrenheit}/></a>
    </div>
     <Mintemp temp={min} unit={unit} />
     <Maxtemp temp={max} unit={unit}/>
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
