import React, { memo, useEffect, useState } from 'react';
import Film from '../film-card/Film';
import NotFound from '../film-not-found/Error';
import Loading from '../loading/Loading';

function SimilarFilms() {
  const [similar, setSimilar] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const film_title = location.href.split('?')[2];
  const filmId = location.href.split('?')[1].replace('/', '');

  useEffect(() => {
    setIsLoading(true)

    fetch(`https://api.themoviedb.org/3/search/movie?query=${film_title}&api_key=d91b4b2e8fb2707acd809975c49bcf87&page=`)
      .then((res) => res.json())
      .then((res) => {
        const filteredSimilar = res.results.filter((film) => film.id !== parseInt(filmId));
        setSimilar(filteredSimilar.slice(0, 4));
      }).finally(() => {
        setIsLoading(false)
      })
  }, [filmId, film_title]);

  return (
    <div className='my-[60px]'>
      {isLoading && <Loading />}
      <h2 className='font-[700] text-[40px] text-black text-center'>Similar films</h2>
      <div>
        {
          similar.length < 1 ? <NotFound /> : (
            <div className='film-card-contaier grid gap-[18px] cd2:grid-cols-2 cd:grid-cols-4 place-items-center mt-[30px] px-[8rem]'>
              {
                similar.map((film) => (
                  <div key={film.id} className='my-[20px]'>
                    <Film film={film} />
                  </div>
                ))
              }
            </div>
          )
        }
      </div>
    </div>
  );
}

export default memo(SimilarFilms);