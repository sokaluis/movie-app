import React from 'react';
import { ActivityIndicator, Dimensions, StyleSheet, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useMovies } from '../hooks/useMovies';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import { Movie } from '../interfaces/movieDB';

const { width: windowWidth } = Dimensions.get('window');

const HomeScreen = () => {
  const { moviesNow, isLoading } = useMovies();
  const { top: marginTop } = useSafeAreaInsets();
  console.log(moviesNow[0]?.title);

  if (isLoading) {
    return (
      <View style={styles.activityIndicator}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }
  return (
    <View style={{ marginTop: marginTop + 20 }}>
      <View style={styles.carouselContainer}>
        <Carousel
          data={moviesNow}
          renderItem={({ item }: { item: Movie }) => (
            <MoviePoster movie={item} />
          )}
          sliderWidth={windowWidth}
          itemWidth={300}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselContainer: {
    height: 450,
  },
});

export default HomeScreen;
