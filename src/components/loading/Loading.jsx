import React from 'react'
import loading from '/loading.gif'

export default function Loading() {

  return (
    <div className='flex justify-center items-center h-screen bg-[#efefef]'>
      <img className='w-[10rem]' src={loading} alt="loading" />
    </div>
  )
}