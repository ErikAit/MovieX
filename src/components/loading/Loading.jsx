import React from 'react'
import loading from '/loading.gif'

export default function Loading() {

  return (
    <div className='fixed top-0 left-0 z-50 w-full'>
      <div className='flex justify-center items-center h-screen bg-[#efefef]'>
        <img className='w-[10rem]' src={loading} alt="loading" />
      </div>
    </div>
  )
}