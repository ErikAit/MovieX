import { useEffect, useState } from "react"

export default function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [value, setValue] = useState([])

  const handleChangeUrl = (e) => {
    if (e.code === 'Enter') {
      location.href = `/search/?${searchValue}`
    }
  }

  return (
    <div className='search-box relative flex items-center'>
      <input
        type="text"
        name='search'
        id='search'
        onKeyDown={handleChangeUrl}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className='border-main border-[2px] bg-transparent w-[400px] h-[80px] rounded-[50px] outline-none pl-2 text-white'
      />
      <div className='bx bx-search absolute right-8 text-[2rem] text-white'></div>
    </div>
  )
}
