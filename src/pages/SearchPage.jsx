import React, { useEffect, useState } from 'react';
import Film from '../components/film-card/Film';
import Error from '../components/film-not-found/Error';

export default function SearchPage() {
  const [searchFilms, setSearchFilms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const searchValue = location.href.split('?')[1];

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${searchValue}&api_key=d91b4b2e8fb2707acd809975c49bcf87&page=${currentPage}`)
      .then((res) => res.json())
      .then((res) => {
        setSearchFilms(res.results);
        setTotalPages(res.total_pages);
      });
  }, [searchValue, currentPage, searchFilms]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      {searchFilms.length === 0 && <Error />}
      {searchValue !== '' ? (
        <div className='search-films-container relative grid grid-cols-4 place-items-center mt-[30px] mb-[100px] px-[8rem]'>
          {searchFilms.map((film) => (
            <div key={film.id} className='mt-[40px]'>
              <Film
                image={film.backdrop_path}
                title={film.original_title}
                date={film.release_date}
                vote={film.vote_average}
              />
            </div>
          ))}
          {totalPages > 1 && (
            <div className='absolute top-[101%]'>
              <div className='pagination flex items-center justify-center gap-1 mt-[10px]'>
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => handlePageChange(index + 1)}
                    className={currentPage === index + 1 ? 'bg-[#efefef] text-[30px] px-[16px]' : 'bg-main text-white text-[30px] px-[16px]'}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <Error />
      )}
    </div>
  );
}
