import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='footer w-[1920px] h-[250px] bg-main px-[130px] flex items-center justify-between'>
      <div className='flex gap-[20px]'>
        <a href="#">
          <i className='bx bxl-instagram-alt text-[40px] text-black'></i>
        </a>

        <a href="#">
          <i className='bx bxl-facebook-circle text-[40px] text-black'></i>
        </a>

        <a href="#">
          <i className='bx bxl-telegram text-[40px] text-black'></i>
        </a>
      </div>

      <div>
        <Link to='/'>
          <h2 className='text-white text-[40px] font-[700]'>
            Movie
            <span className='text-black text-[45px]'>X</span>
          </h2>
        </Link>
      </div>
    </footer>
  )
}
