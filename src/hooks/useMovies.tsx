import { useEffect, useState } from 'react';
import movieDV from '../api/movieDB';
import { Movie, MovieDBResults } from '../interfaces/movieDB';

interface MovieState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movieState, setMovieState] = useState<MovieState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });

  const getMovies = async () => {
    const nowPlayingPromise = movieDV.get<MovieDBResults>('/now_playing');
    const popularPromise = movieDV.get<MovieDBResults>('/popular');
    const topRatedPromise = movieDV.get<MovieDBResults>('/top_rated');
    const upcomingPromise = movieDV.get<MovieDBResults>('/upcoming');

    const response = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upcomingPromise,
    ]);

    setMovieState({
      nowPlaying: response[0].data.results,
      popular: response[1].data.results,
      topRated: response[2].data.results,
      upcoming: response[3].data.results,
    });

    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    ...movieState,
    isLoading,
  };
};
