import React from 'react';
import { ActivityIndicator, Dimensions, StyleSheet, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useMovies } from '../hooks/useMovies';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import { Movie } from '../interfaces/movieDB';
import { ScrollView } from 'react-native-gesture-handler';
import { HorizontalSlider } from '../components/HorizontalSlider';

const { width: windowWidth } = Dimensions.get('window');

const HomeScreen = () => {
  const { moviesNow, isLoading } = useMovies();
  const { top: marginTop } = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={styles.activityIndicator}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }
  return (
    <ScrollView>
      <View style={{ marginTop: marginTop + 20 }}>
        {/* Carousel Principal */}
        <View style={styles.carouselContainer}>
          <Carousel
            data={moviesNow}
            renderItem={({ item }: { item: Movie }) => (
              <MoviePoster movie={item} />
            )}
            sliderWidth={windowWidth}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
          />
        </View>
        {/* Peliculas populares */}
        <HorizontalSlider title="En Cine" movies={moviesNow} />
        <HorizontalSlider movies={moviesNow} />
        <HorizontalSlider title="Premier" movies={moviesNow} />
      </View>
    </ScrollView>
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
