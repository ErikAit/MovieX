import React, { useEffect, useState } from 'react';
import Film from '../components/film-card/Film';
import Loading from '../components/loading/Loading';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function HomePage() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [mostRatedMovies, setMostRatedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPopularIndex, setCurrentPopularIndex] = useState(0);
  const [currentRatedIndex, setCurrentRatedIndex] = useState(0);

  useEffect(() => {
    setIsLoading(true)

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d91b4b2e8fb2707acd809975c49bcf87&query=`)
      .then((res) => res.json())
      .then((res) => {
        setPopularMovies(shuffleArray(res.results));
      }).finally(() => setIsLoading(false))
  }, []);

  useEffect(() => {
    setIsLoading(true)

    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=d91b4b2e8fb2707acd809975c49bcf87&query=')
      .then((res) => res.json())
      .then((res) => setMostRatedMovies(shuffleArray(res.results)))
      .finally(() => setIsLoading(false))
  }, []);

  const handlePopularSlide = (direction) => {
    if (direction === 'prev') {
      setCurrentPopularIndex((prevIndex) => (prevIndex === 0 ? popularMovies.length - 1 : prevIndex - 1));
    } else {
      setCurrentPopularIndex((prevIndex) => (prevIndex === popularMovies.length - 1 ? 0 : prevIndex + 1));
    }
  };

  const handleRatedSlide = (direction) => {
    if (direction === 'prev') {
      setCurrentRatedIndex((prevIndex) => (prevIndex === 0 ? mostRatedMovies.length - 1 : prevIndex - 1));
    } else {
      setCurrentRatedIndex((prevIndex) => (prevIndex === mostRatedMovies.length - 1 ? 0 : prevIndex + 1));
    }
  };

  return (
    <div className='Home my-[60px]'>
      {isLoading && (
        <Loading />
      )}

      <h2 className='font-[700] text-[40px] text-black text-center'>Most popular films</h2>
      <div className='film-card-contaier grid gap-[18px] cd2:grid-cols-2 cd:grid-cols-4 place-items-center mt-[30px] px-[8rem]'>
        <i
          className='bx bxs-left-arrow text-[40px] text-main absolute left-[10px]'
          onClick={() => handlePopularSlide('prev')}
        ></i>
        {popularMovies.slice(currentPopularIndex, currentPopularIndex + 4).map((popular) => (
          <Film key={popular.id} film={popular} />
        ))}
        <i
          className='bx bxs-right-arrow text-[40px] text-main absolute right-[10px]'
          onClick={() => handlePopularSlide('next')}
        ></i>
      </div>

      <h2 className='font-[700] text-[40px] mt-[60px] text-black text-center'>Most rated films</h2>
      <div className='film-card-contaier grid gap-[18px] cd2:grid-cols-2 cd:grid-cols-4 place-items-center mt-[30px] px-[8rem]'>
        <i
          className='bx bxs-left-arrow text-[40px] text-main absolute left-[10px]'
          onClick={() => handleRatedSlide('prev')}
        ></i>
        {mostRatedMovies.slice(currentRatedIndex, currentRatedIndex + 4).map((rated) => (
          <Film key={rated.id} film={rated} />
        ))}
        <i
          className='bx bxs-right-arrow text-[40px] text-main absolute right-[10px]'
          onClick={() => handleRatedSlide('next')}
        ></i>
      </div>
    </div>
  );
}
