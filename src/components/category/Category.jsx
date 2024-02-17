import React, { memo, useState } from 'react'
import Film from '../film-card/Film'

function Category({ film, isSlider }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleFilmSlide = (direction) => {
    if (direction === 'prev') {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? film.length - 1 : prevIndex - 1));
    } else {
      setCurrentIndex((prevIndex) => (prevIndex === film.length - 1 ? 0 : prevIndex + 1));
    }
  };
  return (
    <div className='film-card-contaier grid gap-[18px] cd2:grid-cols-2 cd:grid-cols-4 place-items-center mt-[30px] sr:px-[8rem] w-full'>
      {isSlider &&
        <i
          className='bx bxs-left-arrow text-[40px] text-main hidden pg:block absolute left-[10px]'
          onClick={() => handleFilmSlide('prev')}
        ></i>}
      {film.slice(currentIndex, currentIndex + 4).map((film) => (
        <Film key={film.id} film={film} />
      ))}
      {isSlider &&
        <i
          className='bx bxs-right-arrow text-[40px] text-main hidden pg:block absolute right-[10px]'
          onClick={() => handleFilmSlide('next')}
        ></i>}
    </div>
  )
}

export default memo(Category)