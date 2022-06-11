import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
// Core
import { Movie, RootStackParamList } from '../interfaces';

interface MoviePosterProps {
  movie: Movie;
  height?: number;
  width?: number;
}
type screenProps = StackNavigationProp<RootStackParamList>;

export const MoviePoster = React.memo(
  ({ movie, height = 420, width = 300 }: MoviePosterProps) => {
    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    const navigation = useNavigation<screenProps>();

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          ...styles.container,
          height,
          width,
        }}
        onPress={() => navigation.navigate('DetailScreen', movie)}>
        <View style={styles.imageContainer}>
          <Image source={{ uri }} style={styles.image} />
        </View>
      </TouchableOpacity>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 2,
    paddingBottom: 20,
    paddingHorizontal: 7,
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
