import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getnews } from '../api/News'
import  '../assets/styles/homepage.css'
import defaultPic from '../assets/images/DP.png'
import Timer from '../components/Timer';
import Weather from '../components/Weather';



export default function Homepage() {
  const navigate = useNavigate()
 const arr = JSON.parse(localStorage.getItem("selectedCategories"));
 let info = JSON.parse((localStorage.getItem("userInfo")))
 const [news, setNews] = useState([])
 const retrievedNotes = localStorage.getItem('notes')

 useEffect( ()=>{
    fetchNews()
  },[] )
  
const saveNotes = (e)=>{
  localStorage.setItem('notes',e.target.value)
}

  let fetchNews = async ()=>{
    const newsData = await getnews()
    setNews(newsData)
  }
const Entertainmentpage = () =>{
  navigate('/entertainment')
}

  return (<div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
  <div className='home-box'>
    <button id='browse' onClick={Entertainmentpage}>Browse</button>
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
       <Weather />
      </div>
      <div className="notes">
        <h1 className='text-area-heading'>All Notes</h1>
        <textarea onChange={saveNotes} className='text-area-box' placeholder='This is how I am going to learn MERN Stack in next 3 months.'>{retrievedNotes}</textarea>
      </div>
      <div className="timer-div">
          <Timer />
      </div>
    </div>
    <div className="news">
      <div className="news-upper" >
        <img src={news?.articles?.[0]?.urlToImage} />
        <div className="news-title">
        <h1>{news?.articles?.[0]?.title}</h1>
        <p>{news?.articles?.[0]?.publishedAt}</p>
        </div>
      </div>
      <div className="news-bottom">
        <p>
        {news?.articles?.[0]?.content}</p>
      </div>
    </div>
  </div>
  </div>
  )
}