import React, { useState } from 'react'
import timer from '../assets/sounds/timer.mp3'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import '../assets/styles/timer.css'
import uparrow from '../assets/images/uparrow.svg'
import downarrow from '../assets/images/downarrow.svg'
import useSound from 'use-sound'


export default function Timer() {
  const [isTimerActive, setIsTimerActive] = useState(false)
  const [play] = useSound(timer);
  const [key, setKey] = useState(0);
  const [hours, setHours] = useState("00")
  const [minutes, setMinutes] = useState('00')
  const [seconds, setSeconds] = useState('00')
 const timerBtn = () =>{
  const btn = document.querySelector(".start-btn")
 isTimerActive === true? setIsTimerActive(false) : setIsTimerActive(true)
 btn.innerText = btn.innerText === "RESET" ? "START" : "RESET "
 if(isTimerActive === true){
  setKey((prevKey) => prevKey + 1);
   setHours("00")
   setMinutes("00")
   setSeconds("00")
 }
}


const formatTime = (time) => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};



  return (
    <div className='parent-div'>
      <div className="timer-circle">
          <CountdownCircleTimer style={{ backgroundColor: 'transparent' }}
          key={key}
          isPlaying = {isTimerActive}
          duration={parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds)}
          strokeWidth={6}
          rotation='counterclockwise'
          colors={["#FF6A6A"]}
          trailColor='#191E39'
          onComplete={play}
          >
            {({ remainingTime }) => (
              <div className="timer">
                <div className="text">{formatTime(remainingTime)}</div>
              </div>
            )}
          </CountdownCircleTimer> 
          </div>
      <div className="timer-buttons">
            <div class="grid-container">
              <div class="grid-item"id='timer-labels'>Hours</div>
              <div class="grid-item"id='timer-labels' >Minutes</div>
              <div class="grid-item"id='timer-labels'>Seconds</div>
              <div class="grid-item"> <img src={uparrow} onClick={() =>setHours((prevHours) => String(parseInt(prevHours, 10) + 1).padStart(2, '0'))}  alt='uparrow'style={{width:"15px",height:"15px"}}/></div>
              <div class="grid-item"> <img src={uparrow} onClick={() =>setMinutes((prevMinutes) => String(parseInt(prevMinutes, 10) + 1).padStart(2, '0'))} alt='uparrow'style={{width:"15px",height:"15px"}}/></div>
              <div class="grid-item"> <img src={uparrow} onClick={() =>setSeconds((prevSeconds) => String(parseInt(prevSeconds, 10) + 1).padStart(2, '0'))} alt='uparrow'style={{width:"15px",height:"15px"}}/></div>
              <div class="grid-item" id='digits'>{hours}</div>
              <div class="grid-item" id='digits'>{minutes}</div>
              <div class="grid-item" id='digits'>{seconds}</div>
              <div class="grid-item"><img src={downarrow} onClick={() =>setHours(hours>0 ?((prevHours) => String(parseInt(prevHours, 10) - 1).padStart(2, '0')):hours)} alt='uparrow'style={{width:"15px",height:"15px"}}/></div>
              <div class="grid-item"><img src={downarrow} onClick={() =>setMinutes(minutes > 0 ?((prevMinutes) => String(parseInt(prevMinutes, 10) - 1).padStart(2, '0')):minutes)} alt='uparrow'style={{width:"15px",height:"15px"}}/></div>
              <div class="grid-item"><img src={downarrow} onClick={() =>setSeconds(seconds > 0 ?((prevSeconds) => String(parseInt(prevSeconds, 10) - 1).padStart(2, '0')):seconds)} alt='uparrow'style={{width:"15px",height:"15px"}}/></div>
            </div>
            <div className="on-off-btn">
              <button className='start-btn' onClick={()=>timerBtn()} >START</button>
            </div>
        </div>    
    </div>
  )
}
