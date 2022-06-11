import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { MoviesResponse, Movie } from '../interfaces/movieInterfaces';
import { TypeOfMovies } from '../constants/apiConstants';

interface UseMoviesReturn {
  nowPlaying: Movie[];
  upcoming: Movie[];
  topRated: Movie[];
  popular: Movie[];
}

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [moviesState, setMoviesState] = useState<UseMoviesReturn>({
    nowPlaying: [],
    upcoming: [],
    topRated: [],
    popular: [],
  });

  const getMovies = async () => {
    const responseNowPlaying = movieDB.get<MoviesResponse>(
      TypeOfMovies.NowPlaying,
    );
    const responseUpcoming = movieDB.get<MoviesResponse>(TypeOfMovies.Upcoming);
    const responsePopular = movieDB.get<MoviesResponse>(TypeOfMovies.Popular);
    const responseTopRated = movieDB.get<MoviesResponse>(TypeOfMovies.TopRated);

    const response = await Promise.all([
      responseNowPlaying,
      responseUpcoming,
      responsePopular,
      responseTopRated,
    ]);

    setMoviesState({
      nowPlaying: response[0].data.results,
      upcoming: response[1].data.results,
      popular: response[2].data.results,
      topRated: response[3].data.results,
    });
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return { ...moviesState, isLoading, getMovies };
};
