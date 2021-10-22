import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Movie } from '../interfaces/movieDB';

interface MoviePosterProps {
  movie: Movie;
  height?: number;
  width?: number;
}

export const MoviePoster = ({
  movie,
  height = 420,
  width = 300,
}: MoviePosterProps) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <View style={[styles.posterContainer, { width, height }]}>
      <View style={styles.posterPathContainer}>
        <Image
          source={{
            uri,
          }}
          style={styles.posterPath}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  posterContainer: {
    marginHorizontal: 8,
  },
  posterPathContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 10,
  },
  posterPath: {
    flex: 1,
    borderRadius: 18,
  },
});
