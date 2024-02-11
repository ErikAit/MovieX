import React from 'react'
import { useAddFilm } from '../store/store'
import Film from '../components/film-card/Film';
import Error from '../components/film-not-found/Error';

export default function FavoritePage() {
  const films = useAddFilm((state) => state.films);

  return (
    <div>
      {
        films.length === 0 &&
        <div className='h-[48.5vh]'>
          <Error />
        </div>
      }
      <div className='film-card-contaier grid grid-cols-4 place-items-center mt-[30px] px-[8rem]'>
        {
          films.map((fav) => {
            return (
              <div key={fav.id} className='my-[20px]'>
                <Film film={fav} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
