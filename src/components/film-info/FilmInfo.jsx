import React, { useEffect, useState } from 'react';
import FilmActors from '../film-actors/FilmActors';
import Trailer from '../trailers/Trailer';
import Loading from '../loading/Loading';

function FilmInfo() {
  const [film, setFilm] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const filmId = location.href.split('?')[1].replace('/', '')

  useEffect(() => {
    setIsLoading(true)

    fetch(`https://api.themoviedb.org/3/movie/${filmId}?api_key=d91b4b2e8fb2707acd809975c49bcf87`)
      .then((res) => res.json())
      .then((res) => {
        setFilm([res]);
      }).finally(() => setIsLoading(false))
  }, [filmId]);

  return (
    <div>
      {isLoading && <Loading />}
      <div>
        {film.map((genre, index) => {
          if (genre.id === +filmId) {
            return (
              <div key={index} className='flex fi:justify-between fi:flex-row mn:flex-col mn:items-center'>
                <div>
                  <img
                    className='w-[400px] h-[500px] rounded-[30px] object-cover'
                    src={genre.backdrop_path !== null ? `https://image.tmdb.org/t/p/w500/${genre.backdrop_path}` : 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'} alt="" />
                </div>

                <div className='content'>
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

export default FilmInfo