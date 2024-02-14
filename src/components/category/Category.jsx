import React, { memo } from 'react'

function Category() {
  return (
    <div className='film-card-contaier grid gap-[18px] cd2:grid-cols-2 cd:grid-cols-4 place-items-center mt-[30px] px-[8rem]'>
      <i
        className='bx bxs-left-arrow text-[40px] text-main absolute left-[10px]'
        onClick={() => handlePopularSlide('prev')}
      ></i>
      {popularMovies.slice(currentPopularIndex, currentPopularIndex + 4).map((popular) => (
        <Film key={popular.id} film={popular} />
      ))}
      <i
        className='bx bxs-right-arrow text-[40px] text-main absolute right-[10px]'
        onClick={() => handlePopularSlide('next')}
      ></i>
    </div>
  )
}

export default memo(Category)