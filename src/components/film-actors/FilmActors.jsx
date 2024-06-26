import React, { memo, useEffect, useState } from 'react';
import Loading from '../loading/Loading';

function FilmActors() {
  const [actors, setActors] = useState([]);
  const [visibleActors, setVisibleActors] = useState({ start: 0, end: 5 });
  const [isLoading, setIsLoading] = useState(true);

  const filmId = location.href.split('?')[1];

  useEffect(() => {
    setIsLoading(true)

    fetch(`https://api.themoviedb.org/3/movie/${filmId}/credits?api_key=d91b4b2e8fb2707acd809975c49bcf87`)
      .then((res) => res.json())
      .then((res) => {
        setActors(res.cast);
      })
      .finally(() => setIsLoading(false))
  }, [filmId]);

  const handleNext = () => {
    setVisibleActors((prev) => ({
      start: Math.min(prev.start + 4, actors.length - 5),
      end: Math.min(prev.end + 4, actors.length),
    }));
  };

  const handlePrev = () => {
    setVisibleActors((prev) => ({
      start: Math.max(prev.start - 4, 0),
      end: Math.max(prev.end - 4, 4),
    }));
  };

  return (
    <div className='flex overflow-hidden relative'>
      {isLoading && <Loading />}
      <button className="bx bx-left-arrow-circle text-main text-[50px]" onClick={handlePrev}></button>
      <div className='flex items-center fi:w-[800px] justify-center gap-[30px]'>
        {actors.slice(visibleActors.start, visibleActors.end).map((actor, index) => (
          <div key={index}>
            <img
              className='fi:w-[120px] fi:h-[120px] sr:w-[80px] sr:h-[80px] object-cover rounded-full'
              src={actor.profile_path !== null ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}` : 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'}
              alt="actor"
            />
          </div>
        ))}
      </div>
      <button className="bx bx-right-arrow-circle text-main text-[50px]" onClick={handleNext}></button>
    </div>
  );
}

export default memo(FilmActors)