import React, { memo, useEffect, useState } from 'react';

function Trailer() {
  const [trailers, setTrailers] = useState([]);
  const filmId = location.href.split('?')[1];
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${filmId}/videos?api_key=d91b4b2e8fb2707acd809975c49bcf87`)
      .then((res) => res.json())
      .then((res) => {
        setTrailers(res.results);
      });
  }, [filmId]);

  const openVideoPopup = (videoKey) => {
    setSelectedVideo(videoKey);
  };

  const closeVideoPopup = () => {
    setSelectedVideo(null);
  };

  return (
    <div className='py-[30px]'>
      <h2 className='text-center text-white text-[40px] font-[700]'>Trailers</h2>
      <div className='flex mn:justify-center mn:gap-[18px] fi:gap-0 fi:justify-between flex-wrap pt-[40px]'>
        {trailers.map((video, index) => {
          if (index < 4) {
            return (
              <div key={video.key} onClick={() => openVideoPopup(video.key)}>
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
          }
        })}
      </div>

      {selectedVideo && (
        <div className="popup z-[100] w-full h-screen fixed top-0 left-0 bg-header">
          <i onClick={closeVideoPopup} className='bx bx-x text-[40px] m-2 float-end text-white'></i>
          <div className='flex h-full justify-center items-center'>
            <iframe width="860" height="515" src={`https://www.youtube.com/embed/${selectedVideo}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default memo(Trailer);
