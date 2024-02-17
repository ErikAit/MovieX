import React, { memo, useEffect, useState } from 'react';
import NotFound from '../film-not-found/Error';
import Loading from '../loading/Loading';
import Category from '../category/Category';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function SimilarFilms() {
  const [similar, setSimilar] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const filmId = location.href.split('?')[1].replace('/', '');
  const film_title = location.href.split('?')[2];

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
  }, [filmId]);

  return (
    <div className='my-[60px]'>
      {isLoading && <Loading />}
      <h2 className='font-[700] text-[40px] text-black text-center'>Similar films</h2>
      <div>
        {
          similar.length === 0 ? <NotFound /> : (
            <Category film={similar} isSlider={false} />
          )
        }
      </div>
    </div>
  );
}

export default memo(SimilarFilms);