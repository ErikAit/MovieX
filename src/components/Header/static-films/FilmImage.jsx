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
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d91b4b2e8fb2707acd809975c49bcf87&query=`)
      .then((res) => res.json())
      .then((res) => {
        setMovies(shuffleArray(res.results));
      });
  }, []);

  return (
    <div className='flex justify-center gap-[20px]'>
      {movies.slice(0, 3).map((film, index) => {
        const isLarge = index === 0;
        return (
          <div key={film.id} className='relative w-[820px]'>
            <Link to={`/film/?${film.id}`}>
              <div
                style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${film.backdrop_path})` }}
                className={`w-[${isLarge ? 820 : 400}px] h-[500px] bg-cover bg-center rounded-[30px] border-main border-[2px]`}
              ></div>
            </Link>
            {isLarge && (
              <button className='text-black bg-main font-[600] w-[160px] h-[60px] rounded-[50px] absolute left-[620px] top-[400px]'>
                Watch now
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
