import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
// Core
import { Movie } from '../interfaces/movieInterfaces';

interface MoviePosterProps {
  movie: Movie;
  height?: number;
  width?: number;
}

export const MoviePoster = React.memo(
  ({ movie, height = 420, width = 300 }: MoviePosterProps) => {
    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

    return (
      <View
        style={{
          ...styles.container,
          height,
          width,
        }}>
        <View style={styles.imageContainer}>
          <Image source={{ uri }} style={styles.image} />
        </View>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 6,
  },
  image: {
    flex: 1,
    borderRadius: 18,
  },
});
