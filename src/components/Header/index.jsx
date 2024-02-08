import React from 'react'
import Search from './search/Search'

export default function Header() {
  return (
    <header className='header w-[1920px] h-[1080px] bg-header'>
      <div className='header-top flex items-center justify-between px-[80px] py-[100px]'>
        <div>
          <h2 className='text-white text-[32px] font-[600]'>
            Movie
            <span className='text-main text-[35px]'>X</span>
          </h2>
        </div>

        <div>
          <Search />
        </div>
      </div>
    </header>
  )
}
