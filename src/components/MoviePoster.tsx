import React from 'react';
import { Text, View } from 'react-native';
import { Movie } from '../interfaces/movieInterfaces';

interface MoviePosterProps {
  movie: Movie;
}

export const MoviePoster = ({}: MoviePosterProps) => {
  return (
    <View>
      <Text>MoviePoster</Text>
    </View>
  );
};
