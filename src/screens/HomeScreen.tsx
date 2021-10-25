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
  const { nowPlaying, popular, upcoming, topRated, isLoading } = useMovies();
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
            data={nowPlaying}
            renderItem={({ item }: { item: Movie }) => (
              <MoviePoster movie={item} />
            )}
            sliderWidth={windowWidth}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
          />
        </View>
        {/* Peliculas populares */}
        <HorizontalSlider title="Top Rated" movies={topRated} />
        <HorizontalSlider title="Popular Movies" movies={popular} />
        <HorizontalSlider title="Upcoming" movies={upcoming} />
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
