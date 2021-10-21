import { useEffect, useState } from 'react';
import movieDV from '../api/movieDB';
import { Movie, MovieDBNowPlaying } from '../interfaces/movieDB';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesNow, setMoviesNow] = useState<Movie[]>([]);
  const getMovies = async () => {
    const resp = await movieDV.get<MovieDBNowPlaying>('/now_playing');
    setMoviesNow(resp.data.results);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    moviesNow,
    isLoading,
  };
};
