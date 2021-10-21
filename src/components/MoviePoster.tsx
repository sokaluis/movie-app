import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Movie } from '../interfaces/movieDB';

interface MoviePosterProps {
  movie: Movie;
}

export const MoviePoster = ({ movie }: MoviePosterProps) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <View style={styles.posterContainer}>
      <View style={styles.posterPathContainer}>
        <Image
          source={{
            uri,
          }}
          style={styles.posterPath}
        />
      </View>
      <Text>{movie.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  posterContainer: {
    width: 300,
    height: 420,
  },
  posterPathContainer: {
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
  },
  posterPath: {
    flex: 1,
    borderRadius: 20,
  },
});
