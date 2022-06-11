import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { MovieDBNowPlaying, Movie } from '../interfaces/movieInterfaces';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [movies, setMovies] = useState<Movie[]>([]);

  const getMovies = async () => {
    const response = await movieDB.get<MovieDBNowPlaying>('/now_playing');
    setMovies(response.data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return { movies, isLoading, getMovies };
};
