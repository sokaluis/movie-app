import React from 'react';
import { ActivityIndicator, Dimensions, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
// Core
import { useMovies } from '../hooks/useMovies';
// Components
import { MoviePoster } from '../components/MoviePoster';
import { ScrollView } from 'react-native-gesture-handler';
import { HorizontalSlider } from '../components/HorizontalSlider';

const { width: windowWith } = Dimensions.get('window');

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
    <ScrollView>
      <View style={{ marginTop: safeAreaTop + 20 }}>
        <View style={styles.carouselContainer}>
          <Carousel
            data={movies}
            renderItem={({ item }: any) => <MoviePoster movie={item} />}
            sliderWidth={windowWith}
            itemWidth={300}
          />
        </View>
        <HorizontalSlider title="En Cine" movies={movies} />
        <HorizontalSlider title="Coming Soon" movies={movies} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselContainer: {
    height: 440,
  },
});

export default HomeScreen;
