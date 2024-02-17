import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Search() {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const handleChangeUrl = (e) => {
    if (e.code === 'Enter') {
      navigate(`/search/?${searchValue}`);
      setSearchValue('');
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
        className='border-main border-[2px] bg-transparent w-[200px] sr:w-[400px] h-[80px] rounded-[50px] outline-none pl-2 text-white'
      />
      <Link to={`/search/?${searchValue}`} className='bx bx-search absolute right-8 text-[2rem] text-white'></Link>
    </div>
  );
}
