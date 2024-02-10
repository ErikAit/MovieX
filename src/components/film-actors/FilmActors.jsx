import React, { useEffect, useState } from 'react';

export default function FilmActors() {
  const [actors, setActors] = useState([]);
  const [visibleActors, setVisibleActors] = useState({ start: 0, end: 5 });
  const filmId = location.href.split('?')[1];

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${filmId}/credits?api_key=d91b4b2e8fb2707acd809975c49bcf87`)
      .then((res) => res.json())
      .then((res) => {
        setActors(res.cast);
      });
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
      <button className="bx bx-left-arrow-circle text-main text-[50px]" onClick={handlePrev}></button>
      <div className='flex items-center w-[800px] justify-center gap-[30px]'>
        {actors.slice(visibleActors.start, visibleActors.end).map((actor, index) => (
          <div key={index}>
            <img
              className='w-[120px] h-[120px] object-cover rounded-full'
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
