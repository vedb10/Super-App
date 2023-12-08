import React, { useEffect, useState } from 'react'
import  '../assets/styles/homepage.css'
import defaultPic from '../assets/images/DP.png'
import {getweatherdetails} from '../api/weather'

export default function Homepage() {
  
 const arr = JSON.parse(localStorage.getItem("selectedCategories"));
 let info = JSON.parse((localStorage.getItem("userInfo")))
 const [weather, setWeather] = useState([])

 useEffect( ()=>{
  const weather = 
  getweatherdetails()
 },[] )


  return (<div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
  <div className='home-box'>
    <div className="first-box">
      <div className="info-weather">
        <div className="info">
          <img src={defaultPic}/>
          <div className="userDetail">
            <p id='nameEmail'>{info.name}</p>
            <p id='nameEmail'>{info.email}</p>
            <h1 id='username'>{info.username}</h1>
            <div className="displaycategory">
              {arr.map(category => <p>{category}</p>)}
            </div>
          </div>
        </div>
        <div className='weather'>
          <div className="weather-heading">
              {weather.current}
          </div>
          <div className="weather-body">p</div>
        </div>
      </div>
      <div className="notes">
        <h1 className='text-area-heading'>All Notes</h1>
        <textarea className='text-area-box'></textarea>
      </div>
    </div>




    <div className="news">new</div>
  </div>
  </div>
  )
}



















import React, { useEffect, useState } from 'react'
import  '../assets/styles/homepage.css'
import defaultPic from '../assets/images/DP.png'
import {getweatherdetails} from '../api/weather'

export default function Homepage() {
  
 const arr = JSON.parse(localStorage.getItem("selectedCategories"));
 let info = JSON.parse((localStorage.getItem("userInfo")))
 const [weather, setWeather] = useState("")

 useEffect( ()=>{
fetchWeatherDetails()
 },[] )
  
 const fetchWeatherDetails = async () =>{
  const response = await getweatherdetails();
  setWeather(response)
 }

  return (<div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
  <div className='home-box'>
    <div className="first-box">
      <div className="info-weather">
        <div className="info">
          <img src={defaultPic}/>
          <div className="userDetail">
            <p id='nameEmail'>{info.name}</p>
            <p id='nameEmail'>{info.email}</p>
            <h1 id='username'>{info.username}</h1>
            <div className="displaycategory">
              {arr.map(category => <p>{category}</p>)}
            </div>
          </div>
        </div>
        <div className='weather'>
          <div className="weather-heading">
              {weather.last_updated}
          </div>
          <div className="weather-body">p</div>
        </div>
      </div>
      <div className="notes">
        <h1 className='text-area-heading'>All Notes</h1>
        <textarea className='text-area-box'></textarea>
      </div>
    </div>




    <div className="news">new</div>
  </div>
  </div>
  )
}

