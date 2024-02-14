import React, { useEffect, useState } from 'react';
import Film from '../components/film-card/Film';
import Loading from '../components/loading/Loading';
import Category from '../components/category/Category';

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

  return (
    <div className='Home my-[60px]'>
      {isLoading && (
        <Loading />
      )}

      <h2 className='font-[700] text-[40px] text-black text-center'>Most popular films</h2>
      <Category film={popularMovies} isSlider={true} />

      <h2 className='font-[700] text-[40px] mt-[60px] text-black text-center'>Most rated films</h2>
      <Category film={mostRatedMovies} isSlider={true} />
    </div>
  );
}
