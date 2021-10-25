import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Movie } from '../interfaces/movieDB';
import { MoviePoster } from './MoviePoster';

interface HorizontalSliderProps {
  title?: string;
  movies: Movie[];
}

export const HorizontalSlider = ({ title, movies }: HorizontalSliderProps) => {
  return (
    <View
      style={[styles.sliderContainer, title ? styles.wTitle : styles.woTitle]}>
      {!!title && <Text style={styles.sliderTitle}>{title}</Text>}
      <FlatList
        data={movies}
        renderItem={({ item }: { item: Movie }) => (
          <MoviePoster movie={item} width={140} height={200} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {},
  wTitle: {
    height: 260,
  },
  woTitle: {
    height: 210,
  },
  sliderTitle: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
