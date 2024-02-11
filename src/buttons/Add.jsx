import React, { useState, useEffect } from 'react';
import { useAddFilm } from '../store/store';

export default function Add({ film }) {
  const [isActive, setIsActive] = useState(false);

  const addFavorites = useAddFilm((state) => state.addFavorites);
  const favorites = useAddFilm((state) => state.films);

  const deleteFavorites = useAddFilm((state) => state.deleteFavorites);

  useEffect(() => {
    const isFilmInFavorites = favorites.some((f) => f.id === film.id);
    setIsActive(isFilmInFavorites);
  }, [favorites, film.id]);

  const handleToggleFavorites = () => {
    setIsActive(!isActive);

    if (!isActive) {
      addFavorites(film);
    } else {
      deleteFavorites(film);
    }
  };

  return (
    <i
      onClick={() => {
        handleToggleFavorites();
      }}
      className={`${isActive ? 'bx bxs-heart scale-[1.5] duration-300' : 'bx bx-heart duration-300'} text-main text-[20px]`}
    ></i>
  );
}
