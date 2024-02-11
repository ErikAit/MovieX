import React, { useEffect, useState } from 'react'
import Film from '../film-card/Film';
import NotFound from '../film-not-found/Error'

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function SimilarFilms() {
  const [similar, setSimilar] = useState([]);

  const empty = []

  const film_title = location.href.split('?')[2]
  const filmId = location.href.split('?')[1].replace('/', '')

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${film_title}&api_key=d91b4b2e8fb2707acd809975c49bcf87&page=`)
      .then((res) => res.json())
      .then((res) => {
        setSimilar(res.results)
      });
  }, [])

  return (
    <div className='my-[60px]'>
      <h2 className='font-[700] text-[40px] text-black text-center'>Similar films</h2>
      <div>
        <div className='film-card-contaier h-[50vh] grid grid-cols-4 place-items-center mt-[30px] px-[8rem]'>
          {
            similar.map((film, index) => {
              if (index < 5 && film.id !== +filmId && film.length !== 0) {
                return (
                  <div key={film.id} className='my-[20px]'>
                    <Film film={film} />
                  </div>
                )
              } else {
                return (
                  <div className='absolute'>
                    <NotFound />
                  </div>
                )
              }
            })
          }
        </div>
      </div>
    </div >
  )
}
