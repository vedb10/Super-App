import React, { useEffect, useState } from 'react'
import {getweatherdetails} from '../api/weather'
import pressure from '../assets/images/pressure.svg'
import wind from '../assets/images/wind.svg'
import humidity from '../assets/images/humid.svg'
export default function Weather() {
  const [weather, setWeather] = useState([])

  useEffect( ()=>{
    fetchWeather()
  
  },[] )
  let fetchWeather = async () => {
    const weatherData = await getweatherdetails();
    setWeather(weatherData);
   };
  return (
    <div className="weather">
              <div className="weather-heading">
                {weather?.current?.last_updated}
              </div>
              <div className="weather-body">
                <div className="partition-1">
                  <img
                    src={weather?.current?.condition?.icon}
                    alt="Weather Icon"
                    style={{ width: '60px', height: '60px' }}
                  />
                  <p>{weather?.current?.condition?.text}</p>
                </div>
                <div className="partition-2">
                  <div className="temp">{weather?.current?.temp_c}°C</div>
                  <div className="pressure">
                    <img src={pressure} alt="pressure" style={{width:"20px", height:"20px"}} />
                    <div className="pressure-text">{weather?.current?.pressure_mb} mbar pressure
                    </div>
                  </div>
                </div>
                <div className="partition-3">
                  <div className="partiton3-upper">
                    <img src={wind} alt="" style={{width:"15px",height:"15px",marginRight:"5px"}}/>
                    <div className="pressure-text">{weather?.current?.wind_kph}km/h wind</div>
                  </div>
                  <div className="partition3-bottom">
                  <img src={humidity} alt="" style={{width:"15px",height:"15px",marginRight:"5px"}}/>
                    <div className="pressure-text">{weather?.current?.humidity}% Humidity</div>
                  </div>
                </div>
              </div>
            </div>
  )
}
