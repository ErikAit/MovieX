import { useAddFilm } from '../../store/store';
import FilmInfo from '../film-info/FilmInfo';
import Search from './search/Search'
import FilmImage from './static-films/FilmImage'
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const films = useAddFilm((state) => state.films);

  const navigate = useNavigate()

  const reload = () => {
    navigate(`/`);
  }

  return (
    <header className={`header w-full h-[${location.href.split('/')[3] != 'search' ? 1080 : 0}px] bg-header xl:px-[80px] df:px-[130px]`}>
      <div className='header-top flex items-center justify-between py-[100px]'>
        <div>
          <h2 onClick={reload} className='text-white text-[32px] font-[600] cursor-pointer'>
            Movie
            <span className='text-main text-[35px]'>X</span>
          </h2>
        </div>

        <div className='flex items-center'>
          <Link to='/fav' className='mr-[30px] relative text-main text-[30px]'>
            {
              films.length !== 0 &&
              <span className='text-[18px] top-[-15px] left-[-10px] rounded-full flex justify-center w-[25px] bg-red-600 text-white absolute'>
                {films.length}
              </span>
            }
            <i className='bx bxs-heart'></i>
          </Link>

          <Search />
        </div>
      </div>

      {
        location.href.split('/')[3] != 'search'
          && location.href.split('/')[3] != 'film'
          && location.href.split('/')[3] != 'fav'
          ? (
            <div>
              <div className='static-films-container'>
                <FilmImage />
              </div>

              <div className="content mt-[45px] pb-[230px]">
                <h2 className='text-main text-[30px] font-[600] mb-[45px]'>Watch everywhere.</h2>
                <span className='text-[24px] text-white font-[500]'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</span>
              </div>
            </div>
          ) : null
      }

      {
        location.href.split('/')[3] == 'film'
          ? (
            <div>
              <FilmInfo />
            </div>
          ) : null
      }
    </header >
  )
}
