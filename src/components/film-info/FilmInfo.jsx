import React, { useEffect, useState } from 'react';
import FilmActors from '../film-actors/FilmActors';
import Trailer from '../trailers/Trailer';

export default function FilmInfo() {
  const [film, setFilm] = useState([]);
  const filmId = location.href.split('?')[1];

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${filmId}?api_key=d91b4b2e8fb2707acd809975c49bcf87`)
      .then((res) => res.json())
      .then((res) => {
        setFilm([...film, res]);
      });
  }, [filmId]);

  return (
    <div>
      <div>
        {film.map((genre, index) => {
          if (index < 1) {
            return (
              <div key={filmId} className='flex'>
                <div>
                  <img
                    className='w-[400px] h-[500px] rounded-[30px] object-cover'
                    src={`https://image.tmdb.org/t/p/w500/${genre.poster_path}`} alt="" />
                </div>

                <div className='content ml-[14rem]'>
                  <h2 className='font-[700] text-[40px] text-main'>{genre.original_title}</h2>
                  <p className='py-[36px] text-white font-[500] text-[24px]'>
                    <i className='bx bx-time-five text-[50px] text-main align-middle pr-5'></i>
                    14.10.2001
                  </p>
                  <p className='py-[16px] text-white font-[500] text-[24px]'>
                    <i className='bx bx-star text-[50px] text-main align-middle pr-5'></i>
                    {genre.vote_average.toString().slice(0, 3)}
                  </p>
                  <p className='py-[16px] text-white font-[500] text-[24px]'>
                    <i className='bx bx-user text-[50px] text-main align-middle pr-5'></i>
                    Chris Columbus
                  </p>

                  <div className='actors mt-[10px]'>
                    <FilmActors />
                  </div>
                </div>
              </div>
            )
          }
        })}
      </div>
      <div>
        <Trailer />
      </div>
    </div>
  );
}
