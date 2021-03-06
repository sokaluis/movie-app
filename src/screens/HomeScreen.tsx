import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
// Core
import { useMovies } from '../hooks/useMovies';
// Components
import { HorizontalSlider, MoviePoster } from '../components';

const { width: windowWith } = Dimensions.get('window');

const HomeScreen = () => {
  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
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
            data={nowPlaying}
            renderItem={({ item }: any) => <MoviePoster movie={item} />}
            sliderWidth={windowWith}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
          />
        </View>
        <HorizontalSlider title="Now Playing" movies={nowPlaying} />
        <HorizontalSlider title="Coming Soon" movies={upcoming} />
        <HorizontalSlider title="Popular" movies={popular} />
        <HorizontalSlider title="Top Rated" movies={topRated} />
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
