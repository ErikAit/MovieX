import React, { useEffect, useState } from 'react';
import Film from '../components/film-card/Film';
import Error from '../components/film-not-found/Error';
import Loading from '../components/loading/Loading';

export default function SearchPage() {
  const [searchFilms, setSearchFilms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [isLoading, setIsLoading] = useState(true);

  const searchValue = location.href.split('?')[1];

  useEffect(() => {
    setIsLoading(true);

    fetch(`https://api.themoviedb.org/3/search/movie?query=${searchValue != undefined ? searchValue : ''}&api_key=d91b4b2e8fb2707acd809975c49bcf87&page=${currentPage}`)
      .then((res) => res.json())
      .then((res) => {
        setSearchFilms(res.results);
        setTotalPages(res.total_pages);
      }).finally(() => {
        setIsLoading(false);
      })
  }, [searchValue, currentPage]);


  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      {isLoading && (
        <div className='fixed top-0 left-0 z-50 w-full'>
          <Loading />
        </div>)
      }
      {searchFilms.length === 0 && <Error />}
      {searchValue !== '' ? (
        <div className='search-films-container relative grid gap-[18px] cd2:grid-cols-2 cd:grid-cols-4 place-items-center mt-[30px] mb-[100px] px-[8rem]'>
          {searchFilms.map((film) => (
            <div key={film.id} className='mt-[40px]'>
              <Film
                film={film}
              />
            </div>
          ))}
          {totalPages > 1 && (
            <div className='absolute pg:top-[100.5%] cd:top-[101%]'>
              <div className='pagination flex items-center justify-center gap-1 mt-[10px]'>
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => handlePageChange(index + 1)}
                    className={currentPage === index + 1 ? 'bg-[#efefef] cd:text-[30px] pg:px-[6px] cd:px-[16px]' : 'bg-main text-white pg:px-[6px] cd:text-[30px] cd:px-[16px]'}
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
