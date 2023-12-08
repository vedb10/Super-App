export const options = async (genre) => {
    const Access_key = "af627c6f07a5d1db44458f33343f8998";
    const url = `https://api.themoviedb.org/3/search/multi?query=${genre}&api_key=${Access_key}`;
  
    const movies = await fetch(url).then((response) => response.json());
    // console.log(movies)
    return movies;
  };
  