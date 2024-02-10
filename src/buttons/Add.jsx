import React, { useState } from 'react'
import { useAddFilm } from '../store/store'

export default function Add({ film }) {
  const [isActive, setIsActive] = useState(false)

  const addFavotites = useAddFilm((state) => state.addFavotites);

  return (
    <i onClick={() => {
      setIsActive(!isActive)
      addFavotites(film)
    }} className={`${isActive ? 'bx bxs-heart scale-[1.5] duration-300' : 'bx bx-heart duration-300'} text-main text-[20px]`}></i>
  )
}
