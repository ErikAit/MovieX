import React, { useEffect, useState } from 'react';

export default function Trailer() {
  const [trailer, setTrailer] = useState([]);
  const filmId = location.href.split('?')[1];
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${filmId}/videos?api_key=d91b4b2e8fb2707acd809975c49bcf87`)
      .then((res) => res.json())
      .then((res) => {
        setTrailer(res.results);
      });
  }, [filmId]);

  return (
    <div className='py-[30px]'>
      <h2 className='text-center text-white text-[40px] font-[700]'>Trailers</h2>
      <div className='flex justify-between pt-[40px]'>
        {trailer.map((video, index) => {
          if (index < 4) {
            return (
              <div key={index} onClick={() => setIsVideoVisible(!isVideoVisible)}>
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
                {
                  isVideoVisible && (
                    <div className="popup w-full h-screen fixed top-0 left-0 bg-header">
                      <i onClick={() => setIsVideoVisible(!isVideoVisible)} className='bx bx-x text-[40px] m-2 float-end text-white'></i>
                      <div className='flex h-full justify-center items-center'>
                        <iframe width="660" height="415" src={`https://www.youtube.com/embed/${video.key}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                      </div>
                    </div>
                  )
                }
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
