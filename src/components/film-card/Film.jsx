import React from 'react'
import Add from '../../buttons/Add'
import { Link } from 'react-router-dom'

export default function Film({ id, image, title, date, vote }) {
  return (
    <div className='film-card relative w-[400px] h-[560px] rounded-[30px] border-[2px] border-main'>
      <Link to={`/film/?${id}`}>
        <img className='w-[350px] h-[400px] mx-auto mt-[30px] rounded-[30px] object-cover' src={`https://image.tmdb.org/t/p/w500/${image}`} alt="film" />
      </Link>
      <div className='content'>
        <div className='ml-[25px] my-[30px] font-[700] text-[20px]'>{title}</div>
      </div>
      <div className='absolute bottom-[6px]'>
        <div className='flex items-center w-[400px] justify-between font-[700]'>
          <div className='ml-[25px]'>
            <div className='bx bx-time-five mr-1 text-[20px] text-main'></div>
            {date.toString().slice(0, 4)}
          </div>

          <div className='mr-[25px]'>
            <div className='bx bx-star mr-1 text-[20px] text-main'></div>
            {vote.toString().slice(0, 3)}
          </div>

          <div className="mr-[20px]">
            <Add />
          </div>
        </div>
      </div>
    </div>
  )
}
