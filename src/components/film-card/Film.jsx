import React from 'react'
import Add from '../../buttons/Add'
import { Link } from 'react-router-dom'

export default function Film({ film }) {

  return (
    <div className='film-card relative w-[400px] h-[560px] rounded-[30px] border-[2px] border-main'>
      <Link to={`/film/?${film.id}/?${film.title}`}>
        <img className='w-[350px] h-[400px] mx-auto mt-[30px] rounded-[30px] object-cover'
          src={film.backdrop_path !== null ? `https://image.tmdb.org/t/p/w500/${film.backdrop_path}` : 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'} alt="film" />
      </Link>
      <div className='content'>
        <div className='ml-[25px] my-[30px] font-[700] text-[20px]'>{film.original_title}</div>
      </div>
      <div className='absolute bottom-[6px]'>
        <div className='flex items-center w-[400px] justify-between font-[700]'>
          <div className='ml-[25px]'>
            <div className='bx bx-time-five mr-1 text-[20px] text-main'></div>
            {film.release_date.toString().slice(0, 4)}
          </div>

          <div className='mr-[25px]'>
            <div className='bx bx-star mr-1 text-[20px] text-main'></div>
            {film.vote_average.toString().slice(0, 3)}
          </div>

          <div className="mr-[20px]">
            <Add film={film} />
          </div>
        </div>
      </div>
    </div>
  )
}
