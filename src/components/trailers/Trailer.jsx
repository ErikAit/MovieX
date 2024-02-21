import React, { useEffect, useState } from 'react';
import Loading from '../loading/Loading';

function Trailer() {
  const [trailers, setTrailers] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const filmId = location.href.split('?')[1].replace('/', '');

  useEffect(() => {
    setIsLoading(true)
    fetch(`https://api.themoviedb.org/3/movie/${filmId}/videos?api_key=d91b4b2e8fb2707acd809975c49bcf87`)
      .then((res) => res.json())
      .then((res) => {
        setTrailers(res.results.slice(0, 4));
      })
      .finally(() => setIsLoading(false))
  }, [filmId]);

  const openVideoPopup = (videoKey) => {
    setSelectedVideo(videoKey);
  };

  const closeVideoPopup = () => {
    setSelectedVideo(null);
  };

  return (
    <div className='py-[30px]'>
      {isLoading && <Loading />}
      <h2 className='text-center text-white text-[40px] font-[700]'>Trailers</h2>
      <div className='flex mn:justify-center mn:gap-[18px] fi:gap-0 fi:justify-between flex-wrap pt-[40px]'>
        {trailers.map((video, index) => {
          return (
            <div key={video.id} onClick={() => openVideoPopup(video.key)}>
              <div className='relative'>
                <img
                  src={`https://img.youtube.com/vi/${video.key}/0.jpg`}
                  alt="trailer"
                  className='cursor-pointer w-[400px] h-[280px] rounded-[30px] border-[3px] border-main'
                />
                <div className='overlay w-[397px] h-[277px] rounded-[30px] absolute top-0 bg-[#000] opacity-[0.6] flex justify-center items-center text-[80px]'>
                  <i className='bx bx-play-circle text-white'></i>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {selectedVideo && (
        <div className="popup z-[100] w-full h-screen fixed top-0 left-0 bg-header">
          <i onClick={closeVideoPopup} className='bx bx-x text-[40px] m-2 float-end text-white'></i>
          <div className='flex w-full h-full justify-center items-center'>
            <iframe className='im:w-[860px] im:h-[515px] mn:w-[500px] mn:h-[400px]' src={`https://www.youtube.com/embed/${selectedVideo}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default Trailer;
