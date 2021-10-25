import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Movie } from '../interfaces/movieDB';
import { useNavigation, CommonActions } from '@react-navigation/core';

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

  const { dispatch } = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => dispatch(CommonActions.navigate('Details', movie))}
      style={[styles.posterContainer, { width, height }]}>
      <View style={styles.posterPathContainer}>
        <Image
          source={{
            uri,
          }}
          style={styles.posterPath}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  posterContainer: {
    marginHorizontal: 2,
    paddingBottom: 20,
    paddingHorizontal: 7,
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
