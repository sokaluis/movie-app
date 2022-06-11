import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// Core
import { useMovies } from '../hooks/useMovies';
// Components
import { MoviePoster } from '../components/MoviePoster';

const HomeScreen = () => {
  const { movies, isLoading } = useMovies();
  const { top: safeAreaTop } = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <View style={{ marginTop: safeAreaTop + 20 }}>
      <MoviePoster movie={movies[0]} />
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
