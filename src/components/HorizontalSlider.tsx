import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { MoviePoster } from './MoviePoster';
import { Movie } from '../interfaces/movieInterfaces';

interface MoviePosterProps {
  title: string;
  movies: Movie[];
}

export const HorizontalSlider = ({ title, movies }: MoviePosterProps) => {
  return (
    <View
      style={{
        ...styles.section,
        height: title ? styles.section.height : styles.section.height - 40,
      }}>
      {!!title && <Text style={styles.sectionHeader}>{title}</Text>}
      <FlatList
        data={movies}
        renderItem={({ item }: any) => (
          <MoviePoster movie={item} width={140} height={200} />
        )}
        keyExtractor={(item: Movie) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    height: 260,
  },
  sectionHeader: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
