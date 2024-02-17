import React, { useState } from 'react'
import { useAddFilm } from '../store/store'
import Film from '../components/film-card/Film';
import Error from '../components/film-not-found/Error';
import Loading from '../components/loading/Loading';

export default function FavoritePage() {
  const [isLoading, setIsLoading] = useState(true);

  const films = useAddFilm((state) => state.films);

  return (
    <div>
      {
        isLoading &&
        <div className='fixed top-0 left-0 z-50 w-full'>
          <Loading />
          {
            setTimeout(() => {
              setIsLoading(false)
            }, 600)
          }
        </div>
      }
      {
        films.length === 0 &&
        <div className='h-[48.5vh]'>
          <Error />
        </div>
      }
      <div className='film-card-contaier grid gap-[18px] cd2:grid-cols-2 cd:grid-cols-4 place-items-center mt-[30px] sr:px-[8rem] w-full'>
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
