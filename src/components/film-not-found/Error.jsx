import React from 'react'

export default function Error() {
  return (
    <div className='error h-[420px] flex items-center justify-center'>
      <h2 className='font-[700] text-[30px] text-black flex items-center'>
        <div className='bx bx-error text-[37px] text-main'></div>
        The film does not found
      </h2>
    </div>
  )
}
