import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function FilmImage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d91b4b2e8fb2707acd809975c49bcf87`)
      .then((res) => res.json())
      .then((res) => {
        setMovies(shuffleArray(res.results));
      });
  }, []);

  return (
    <div className='mb:flex mb:justify-center gap-[20px] mb:flex-wrap xl:flex-nowrap
    mn:grid ct:grid-cols-1 mn:place-items-center'>
      {movies.slice(0, 3).map((film, index) => {
        const isFirst = index === 0;
        return (
          isFirst ?
            <div key={film.id} className={`relative`}>
              <Link to={`/film/?${film.id}/?${film.original_title.split(' ')[0]}`}>
                <div
                  style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${film.backdrop_path})` }}
                  className={`im:w-[820px] ct:w-[300px] ct:h-[400px] mn:w-[400px] h-[500px] bg-cover bg-center rounded-[30px] border-main border-[2px]`}
                ></div>
              </Link>
              <button className='text-black bg-main hidden cd2:block font-[600] w-[160px] h-[60px] rounded-[50px] absolute im:left-[620px] im:top-[300px]'>
                Watch now
              </button>
            </div> :
            <div key={film.id} className={`relative`}>
              <Link to={`/film/?${film.id}/?${film.original_title.split(' ')[0]}`}>
                <div
                  style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${film.backdrop_path})` }}
                  className={`im:w-[400px] ct:w-[300px] ct:h-[400px] mn:w-[400px] h-[500px] bg-cover bg-center rounded-[30px] border-main border-[2px]`}
                ></div>
              </Link>
            </div>
        );
      })}
    </div>
  );
}
