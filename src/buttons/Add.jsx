import React, { useState } from 'react'

export default function Add() {
  const [isActive, setIsActive] = useState(false)

  return (
    <i onClick={() => setIsActive(!isActive)} className={`${isActive ? 'bx bxs-heart scale-[1.5] duration-300' : 'bx bx-heart duration-300'} text-main text-[20px]`}></i>
  )
}
