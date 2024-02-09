import React, { useEffect, useState } from 'react'
import Film from '../components/film-card/Film';

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

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d91b4b2e8fb2707acd809975c49bcf87&query=`)
      .then((res) => res.json())
      .then((res) => {
        setPopularMovies(shuffleArray(res.results));
      });
  }, []);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=d91b4b2e8fb2707acd809975c49bcf87&query=')
      .then((res) => res.json())
      .then((res) => setMostRatedMovies(shuffleArray(res.results)));
  }, []);

  return (
    <div className='Home my-[60px]'>
      <h2 className='font-[700] text-[40px] text-black text-center'>Most popular films</h2>
      <div className='film-card-contaier grid grid-cols-4 place-items-center mt-[30px] px-[8rem]'>
        {
          popularMovies.map((popular, index) => {
            if (index < 4) {
              return (
                <Film
                  key={popular.id}
                  image={popular.backdrop_path}
                  title={popular.original_title}
                  date={popular.release_date}
                  vote={popular.vote_average}
                />
              )
            }
          })
        }
      </div>
      <h2 className='font-[700] text-[40px] mt-[60px] text-black text-center'>Most rated films</h2>
      <div className='film-card-contaier grid grid-cols-4 place-items-center mt-[30px] px-[8rem]'>
        {
          mostRatedMovies.map((popular, index) => {
            if (index < 4) {
              return (
                <Film
                  key={popular.id}
                  image={popular.backdrop_path}
                  title={popular.original_title}
                  date={popular.release_date}
                  vote={popular.vote_average}
                />
              )
            }
          })
        }
      </div>
    </div>
  )
}
