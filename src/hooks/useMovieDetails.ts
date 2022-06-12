import { useCallback, useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { Cast, MovieFull } from '../interfaces';

interface MovieDetails {
  isLoading: boolean;
  movieFull?: MovieFull | undefined;
  cast: Cast[];
}

export const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  const getMovieDetails = useCallback(async () => {
    const movieDetailsPromise = movieDB.get<MovieFull>(`/${movieId}`);
    const castDetailsPromise = movieDB.get<{ cast: Cast[] }>(
      `/${movieId}/credits`,
    );

    const [movieDetails, castDetails] = await Promise.all([
      movieDetailsPromise,
      castDetailsPromise,
    ]);

    setState({
      isLoading: false,
      movieFull: movieDetails.data,
      cast: castDetails.data.cast,
    });
  }, [movieId]);

  useEffect(() => {
    getMovieDetails();
  }, [getMovieDetails]);

  return state;
};
