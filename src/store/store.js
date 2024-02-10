import { create } from "zustand";
import { persist } from "zustand/middleware";


export const useAddFilm = create(persist(
  (set) => ({
    films: [],
    addFavotites: (newFilm) => set((state) => ({
      films: [...state.films, newFilm]
    }))
  }),
  {
    name: 'Films',
  }
))