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

function App() {
  let defaultCity = "Amsterdam"
 
  const [loaded, setLoaded] = useState(false)
  const [data, setData] = useState("")
  const [forecast, setForecast] =useState("")
  const [city, setCity] = useState(defaultCity)
  const [unit, setUnit] = useState(`C`)
  const [current, setCurrent] = useState("")
  const [min, setMin] = useState("")
  const [max, setMax] = useState("")
  const [hour1, setHour1] = useState("")
  const [hour2, setHour2] = useState("")
  const [hour3, setHour3] = useState("")
  const [hour4, setHour4] = useState("")
  const [day1, setDay1] = useState("")
  const [day2, setDay2] = useState("")
  const [day3, setDay3] = useState("")
  const [day4, setDay4] = useState("")
  const [day5, setDay5] = useState("")
  
  function handleCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setLocation();
    callForecast();
  }
  function getGeolocation(event){
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(getCoords);
    function getCoords(position){
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      let apiKey = "1be83355b3c9da70c189c0df40350020"
      let geoUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
      axios.get(geoUrl).then(handleGeolocation);
    }
  }
 
  function handleGeolocation(response){
    setCity(response.data.name)
    setLocation()
    callForecast()
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
    setCurrent(Math.round(response.data.main.temp))
    setMin(Math.round(response.data.main.temp_min))
    setMax(Math.round(response.data.main.temp_max))
  }
  function getForecast(response){
  setForecast(
    {celHour1: Math.round(response.data.list[0].main.temp),
     dateHour1: response.data.list[0].dt * 1000,
     iconHour1: response.data.list[0].weather[0].icon,
     descriptionHour1: response.data.list[0].weather[0].description,

     celHour2: Math.round(response.data.list[1].main.temp),
     dateHour2: response.data.list[1].dt * 1000,
     iconHour2: response.data.list[1].weather[0].icon,
     descriptionHour2: response.data.list[1].weather[0].description,

     celHour3: Math.round(response.data.list[2].main.temp),
     dateHour3: response.data.list[2].dt * 1000,
     iconHour3: response.data.list[2].weather[0].icon,
     descriptionHour3: response.data.list[2].weather[0].description,

     celHour4: Math.round(response.data.list[3].main.temp),
     dateHour4: response.data.list[3].dt * 1000,
     iconHour4: response.data.list[3].weather[0].icon,
     descriptionHour4: response.data.list[3].weather[0].description,

     celDay1: Math.round(response.data.list[7].main.temp),
     dateDay1: response.data.list[7].dt * 1000,
     iconDay1: response.data.list[7].weather[0].icon,
     descriptionDay1: response.data.list[7].weather[0].description,

     celDay2: Math.round(response.data.list[15].main.temp),
     dateDay2: response.data.list[15].dt * 1000,
     iconDay2: response.data.list[15].weather[0].icon,
     descriptionDay2: response.data.list[15].weather[0].description,

     celDay3: Math.round(response.data.list[23].main.temp),
     dateDay3: response.data.list[23].dt * 1000,
     iconDay3: response.data.list[23].weather[0].icon,
     descriptionDay3: response.data.list[23].weather[0].description,

     celDay4: Math.round(response.data.list[31].main.temp),
     dateDay4: response.data.list[31].dt * 1000,
     iconDay4: response.data.list[31].weather[0].icon,
     descriptionDay4: response.data.list[31].weather[0].description,

     celDay5: Math.round(response.data.list[39].main.temp),
     dateDay5: response.data.list[39].dt * 1000,
     iconDay5: response.data.list[39].weather[0].icon,
     descriptionDay5: response.data.list[39].weather[0].description,
    }
  )
  setHour1(Math.round(response.data.list[0].main.temp))
  setHour2(Math.round(response.data.list[1].main.temp))
  setHour3(Math.round(response.data.list[2].main.temp))
  setHour4(Math.round(response.data.list[3].main.temp))
  setDay1(Math.round(response.data.list[7].main.temp))
  setDay2(Math.round(response.data.list[15].main.temp))
  setDay3(Math.round(response.data.list[23].main.temp))
  setDay4(Math.round(response.data.list[31].main.temp))
  setDay5(Math.round(response.data.list[38].main.temp))
  }

  function setLocation(){
    const apiKey =`1be83355b3c9da70c189c0df40350020`
    let Url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric` 
    axios.get(Url).then(getWeather)
    }

  function callForecast(){
  const apiKey =`1be83355b3c9da70c189c0df40350020`
    let Url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric` 
    axios.get(Url).then(getForecast)
  }
  function setCelsius(event){
    event.preventDefault();
    setUnit(`C`)  
    setLocation()
    callForecast()
  }  

  function setFahrenheit(event){
    event.preventDefault();
    setUnit(`F`)
    setCurrent(Math.round(data.currentCel * 1.8 + 32)) 
    setMin(Math.round(data.minCel *1.8 + 32)) 
    setMax(Math.round(data.maxCel *1.8 + 32)) 
    setHour1(Math.round(forecast.celHour1 *1.8 + 32))
    setHour2(Math.round(forecast.celHour2 *1.8 + 32))
    setHour3(Math.round(forecast.celHour3 *1.8 + 32))
    setHour4(Math.round(forecast.celHour4 *1.8 + 32))
    setDay1(Math.round(forecast.celDay1*1.8 +32))
    setDay2(Math.round(forecast.celDay2*1.8 +32))
    setDay3(Math.round(forecast.celDay3*1.8 +32))
    setDay4(Math.round(forecast.celDay4*1.8 +32))
    setDay5(Math.round(forecast.celDay5*1.8 +32))
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
      <HourForecast timestamp={forecast.dateHour1} icon={forecast.iconHour1} description={forecast.descriptionHour1} temp={hour1} unit={unit}/>
      <HourForecast timestamp={forecast.dateHour2} icon={forecast.iconHour2} description={forecast.descriptionHour2} temp={hour2} unit={unit}/>
      <HourForecast timestamp={forecast.dateHour3} icon={forecast.iconHour3} description={forecast.descriptionHour3} temp={hour3} unit={unit}/>
      <HourForecast timestamp={forecast.dateHour4} icon={forecast.iconHour4} description={forecast.descriptionHour4} temp={hour4} unit={unit}/>
    </div>
    </div>
    <div className="col-6">
    <div className="Search">
        <form>
        <input className="Searchbar" type="text" placeholder="Search for a city..." autoComplete="off" onChange={handleCity}/>
        <button className="Searchbutton" type="submit" title="Search" onClick={handleSubmit}><i className="fas fa-search-location"></i></button>
        <button className="Searchbutton location" title="To current location" onClick={getGeolocation}><i className="fas fa-map-marker-alt"></i></button>
        </form>
    </div>
    <div className="tempConverter">
        <p className="title">Change units</p>
       <a title="Set to metric" href="/"><img className="icon" src={"./images/celsius.png"} alt="Celsius Icon" onClick={setCelsius}/> </a> 
     | <a title="Set to imperial" href="/"><img className="icon" src={"./images/fahrenheit.png"} alt="Fahrenheit Icon" onClick={setFahrenheit}/></a>
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
    <p className="title">Coming Days</p>
    <div className="row">
      <div className="col-1"></div>
      <DayForecast timestamp={forecast.dateDay1} icon={forecast.iconDay1} description={forecast.descriptionDay1} temp={day1} unit={unit}/>
      <DayForecast timestamp={forecast.dateDay2} icon={forecast.iconDay2} description={forecast.descriptionDay2} temp={day2} unit={unit}/>
      <DayForecast timestamp={forecast.dateDay3} icon={forecast.iconDay3} description={forecast.descriptionDay3} temp={day3} unit={unit}/>
      <DayForecast timestamp={forecast.dateDay4} icon={forecast.iconDay4} description={forecast.descriptionDay4} temp={day4} unit={unit}/>
      <DayForecast timestamp={forecast.dateDay5} icon={forecast.iconDay5} description={forecast.descriptionDay5} temp={day5} unit={unit}/>
      <div className="col-1"></div>
    </div>
    <Footer />
    </div>
    </div>
    
  )}
  else { 
  setLocation()
  callForecast()
  return (
    <div className="App">
      Loading page
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
