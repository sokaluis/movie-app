import React from 'react';
import { ActivityIndicator, Dimensions, StyleSheet, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useMovies } from '../hooks/useMovies';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import { Movie } from '../interfaces/movieDB';
import { ScrollView } from 'react-native-gesture-handler';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';
import { getImageColors } from '../helpers/getColors';

const { width: windowWidth } = Dimensions.get('window');

const HomeScreen = () => {
  const { nowPlaying, popular, upcoming, topRated, isLoading } = useMovies();
  const { top: marginTop } = useSafeAreaInsets();
  // const [bgcolor, setBgcolor] = useState({});

  const getPosterColor = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const { primary, secondary } = await getImageColors(uri);

    console.log('colors', primary);
    console.log('colors', secondary);
  };

  if (isLoading) {
    return (
      <View style={styles.activityIndicator}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }
  return (
    <GradientBackground>
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
              onSnapToItem={item => getPosterColor(item)}
            />
          </View>
          {/* Peliculas populares */}
          <HorizontalSlider title="Top Rated" movies={topRated} />
          <HorizontalSlider title="Popular Movies" movies={popular} />
          <HorizontalSlider title="Upcoming" movies={upcoming} />
        </View>
      </ScrollView>
    </GradientBackground>
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
