import React from 'react'
import { Link } from 'react-router-dom'

export default function RegisterPage() {
  return (
    <div>
      <div className='bg-header h-screen flex justify-center items-center'>
        <form className='w-[420px] h-[560px] border-[3px] border-main rounded flex flex-col justify-center items-center'>
          <h2 className='text-main text-[25px]'>Register</h2>
          <div className='m-[15px]'>
            <input
              type="text"
              placeholder='Enter your email...'
              className='px-[13px] py-[12px] bg-transparent text-white border-[2px] border-main rounded-[25px] outline-none'
            />
            {/* {emailError ? <div className='text-red-600'>Неверный адресс.</div> : null} */}
          </div>

          <div className='m-[10px]'>
            <input
              type="text"
              placeholder='Enter your password...'
              className='px-[13px] py-[12px] bg-transparent text-white border-[2px] border-main rounded-[25px] outline-none'
            />
            {/* {passwordError ? <div className='text-red-600'>Неверный пароль.</div> : null} */}
          </div>

          <div className='m-[20px] border-[2px] border-main py-[8px] px-[18px] rounded-[20px] text-white'>
            <Link to={'/login'}>
              <button type="submit">Submit</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
