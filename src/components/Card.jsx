import React from 'react'
import '../assets/styles/card.css'

export default function Card({title, categoryImg,bgcolor,onClick}) {
  return (
    <div className='cards' style={{backgroundColor:`${bgcolor}`}} onClick={onClick}>
      <div className="heading">
      <h6>{`${title}`}</h6></div>
      <div className="image">
      <img src={`${categoryImg}`} alt='categoryImg'/></div>
    </div>
  )
}
