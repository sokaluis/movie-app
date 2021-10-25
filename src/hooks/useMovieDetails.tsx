import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { Cast, MovieCredits, MovieFull } from '../interfaces/movieDB';

interface MovieDetails {
  isLoading: boolean;
  cast: Cast[];
  movieFull?: MovieFull;
}

export const useMovieDetails = (movieID: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    cast: [],
    movieFull: undefined,
  });

  const getDetails = async () => {
    const movieDetailsPromise = movieDB.get<MovieFull>(`/${movieID}`);

    const movieCreditsPromise = movieDB.get<MovieCredits>(
      `/${movieID}/credits`,
    );

    const [movieDetailsRes, movieCreditsRes] = await Promise.all([
      movieDetailsPromise,
      movieCreditsPromise,
    ]);

    setState({
      ...state,
      isLoading: false,
      cast: movieCreditsRes.data.cast,
      movieFull: movieDetailsRes.data,
    });
  };

  useEffect(() => {
    getDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    ...state,
  };
};
