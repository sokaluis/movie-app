import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/Navigation';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';
import Icon from 'react-native-vector-icons/Ionicons';

const screenHeight = Dimensions.get('screen').height;

interface DetailsScreenProps
  extends StackScreenProps<RootStackParams, 'Details'> {}

const DetailsScreen = ({ route, navigation }: DetailsScreenProps) => {
  const { title, poster_path, original_title, id } = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const { isLoading, cast, movieFull } = useMovieDetails(id);

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image source={{ uri }} style={styles.posterImage} />
        </View>
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.title}>{original_title}</Text>
        <Text style={styles.subtitle}>{title}</Text>
      </View>
      {isLoading ? (
        <ActivityIndicator size={30} color="grey" style={styles.inidicator} />
      ) : (
        <MovieDetails MovieFull={movieFull!} Cast={cast} />
      )}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Icon name="arrow-back-outline" size={50} color="white" />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  posterImage: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subtitle: {
    color: 'black',
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  inidicator: {
    color: 'black',
    marginTop: 20,
  },
  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 30,
    left: 5,
  },
});

export default DetailsScreen;
