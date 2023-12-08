import React, { useState,useEffect } from 'react';
import '../assets/styles/category.css';
import Card from '../components/Card';
import action from '../assets/images/cardImg/action.png';
import drama from '../assets/images/cardImg/drama.png';
import romance from '../assets/images/cardImg/romance.png';
import thriller from '../assets/images/cardImg/thriller.png';
import western from '../assets/images/cardImg/western.png';
import horror from '../assets/images/cardImg/horror.png';
import fantasy from '../assets/images/cardImg/fantasy.png';
import music from '../assets/images/cardImg/music.png';
import fiction from '../assets/images/cardImg/fiction.png';
import danger from '../assets/images/error.svg'
import { useNavigate } from 'react-router-dom';

export default function Category() {
  let navigate = useNavigate()
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [noCategoryError , setNoCategoryError] = useState(null)
  let [categoryCount,setCategoryCount] = useState(0)

  const handleCardClick = (category) => {
    setCategoryCount(categoryCount+1);
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
      
    }
  };
  useEffect(() => {
    localStorage.setItem('selectedCategories', JSON.stringify(selectedCategories));
  }, [selectedCategories]);

  const handleCloseBtnClick = (category) => {
    setSelectedCategories(selectedCategories.filter((c) => c !== category));
    setCategoryCount(categoryCount - 1)
  };
  const nextBtn = () =>{
    if(categoryCount >= 3){
      navigate('/homepage')
      setNoCategoryError(false)
    }
    else{
      setNoCategoryError(true)
      console.log(categoryCount)
    }
  }

  return (
    <div>
      <div className="nextBtn"><button onClick={nextBtn}>Next Page</button></div>
      <div className="categorybox">
        <div className="category-left">
          <h1 id="categorytitle">Super app</h1>
          <h1 id="categoryprompt">Choose your entertainment category</h1>

          <div className="selectecategory">
            {selectedCategories.map((category) => (
              <div key={category} className="categorydiv">
                <p>{category}</p>
                <button className="closebtn" onClick={() => handleCloseBtnClick(category)}>
                  X
                </button>
                
              </div>
            ))}
            <div className='categoryError'>
            {noCategoryError &&
                <p id='categoryError'><img src={danger} /> Minimum 3 category required</p>}
            </div>
          </div>
        </div>
        <div className="category-right">
          <Card bgcolor={"#FF5209"} title={"Action"}categoryImg={action}onClick={() => handleCardClick("Action")}/>
          <Card bgcolor={"#D7A4FF"}title={"Drama"}categoryImg={drama}onClick={() => handleCardClick("Drama")}/>
          <Card bgcolor={"#148A08"}title={"Romance"}categoryImg={romance}onClick={() => handleCardClick("Romance")}/>
          <Card bgcolor={"#148A08"} title={"Thriller"} categoryImg={thriller} onClick={() => handleCardClick("Thriller")} />
          <Card bgcolor={"#902500"} title={"Western"} categoryImg={western} onClick={() => handleCardClick("Western")} />
          <Card bgcolor={"#7358FF"} title={"Horror"} categoryImg={horror} onClick={() => handleCardClick("Horror")} />
          <Card bgcolor={"#FF4ADE"} title={"Fantasy"} categoryImg={fantasy} onClick={() => handleCardClick("Fantasy")} />
          <Card bgcolor={"#E61E32"} title={"Music"} categoryImg={music} onClick={() => handleCardClick("Music")} />
          <Card bgcolor={"#6CD061"} title={"Fiction"} categoryImg={fiction} onClick={() => handleCardClick("Fiction")} />
     
        </div>
      </div>
    </div>
  )
}
