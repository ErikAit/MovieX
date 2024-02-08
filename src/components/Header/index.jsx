import Search from './search/Search'
import FilmImage from './static-films/FilmImage'

export default function Header() {
  return (
    <header className='header w-[1920px] h-[1080px] bg-header px-[130px]'>
      <div className='header-top flex items-center justify-between py-[100px]'>
        <div>
          <h2 className='text-white text-[32px] font-[600]'>
            Movie
            <span className='text-main text-[35px]'>X</span>
          </h2>
        </div>

        <div>
          <Search />
        </div>
      </div>

      <div className='static-films-container flex justify-center gap-[20px]'>
        <FilmImage />
      </div>

      {/* <div className='static-films-container flex justify-center gap-[20px]'>
        <div className='relative'>
          <div className='w-[820px] h-[500px] rounded-[30px] border-main border-[2px]'></div>
          <button className='text-black bg-main font-[600] w-[160px] h-[60px] rounded-[50px] absolute left-[620px] top-[400px]'>Watch now</button>
        </div>

        <div>
          <div className='w-[400px] h-[500px] rounded-[30px] border-main border-[2px]'></div>
        </div>

        <div>
          <div className='w-[400px] h-[500px] rounded-[30px] border-main border-[2px]'></div>
        </div>
      </div> */}

      <div className="content mt-[45px]">
        <h2 className='text-main text-[30px] font-[600] mb-[45px]'>Watch everywhere.</h2>
        <span className='text-[24px] text-white font-[500]'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</span>
      </div>
    </header >
  )
}
