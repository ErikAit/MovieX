import React, { useState } from 'react'
import Loading from '../components/loading/Loading';

export default function FilmPage() {
  const [isLoading, setIsLoading] = useState(true);


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
    </div>
  )
}
