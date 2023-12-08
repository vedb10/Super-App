import React, { useEffect, useState } from 'react';
import '../assets/styles/entertainment.css';
import { options } from '../api/Entertainment';

export default function Entertainment() {
  const [moviesByGenre, setMoviesByGenre] = useState({});
  const arr = JSON.parse(localStorage.getItem("selectedCategories"));
  const genresArray = arr;

  useEffect(() => {
    fetchMoviesByGenres();
  }, []); // Re-run the effect only once on mount

  const fetchMoviesByGenres = async () => {
    try {
      const moviesData = {};
  
      for (const genre of genresArray) {
        const result = await options(genre.toLowerCase());
        console.log(`Genre: ${genre}, API Response:`, result);
        moviesData[genre] = result.results || [];
      }
  
      setMoviesByGenre(moviesData);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };
  
  

  return (
    <div >
    <div className='entertainment-container'>
      <div className="top">
        <div className="entertainment-header">
          Super app 
          <div className="dp"></div>
        </div>
        <p>Entertainment according to your choice</p>
      </div>

    
    </div>
    {genresArray.map((genre) => (
  <div className='movie-box'  key={genre}>
    <h2 id='genre'>{genre}</h2>
    <div className="movie-list" style={{display:'grid',gridTemplateColumns:"auto auto auto auto"}}>
      {console.log(`Genre: ${genre}, Number of movies: ${moviesByGenre[genre]?.length || 0}`)}
      {moviesByGenre[genre]?.slice(0, 4).map((movie) => (
        <div key={movie.id} className="movie-item">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        </div>
      ))}
    </div>
  </div>
))}

    </div>
  );
}
