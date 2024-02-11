import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAddFilm = create(
  persist(
    (set) => ({
      films: [],
      addFavorites: (newFilm) =>
        set((state) => ({
          films: [...state.films, newFilm],
        })),
      deleteFavorites: (filmToDelete) =>
        set((state) => ({
          films: state.films.filter((film) => film !== filmToDelete),
        })),
    }),
    {
      name: "Films",
    }
  )
);
