import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
// Core
import { RootStackParamList } from '../interfaces/navigationInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';

type DetailScreenProps = StackScreenProps<RootStackParamList>;

const { height: windowHeight } = Dimensions.get('screen');

const DetailScreen = ({ route }: DetailScreenProps) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`;

  return (
    <ScrollView>
      <View style={styles.posterImage}>
        <View style={styles.posterImageContainer}>
          <Image source={{ uri }} style={styles.image} />
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.subtitle}>{movie?.original_title}</Text>
        <Text style={styles.title}>{movie?.title}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Icon name="star" size={20} color="#000" />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.description}>{movie?.overview}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  posterImage: {
    width: '100%',
    height: windowHeight * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 10,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  posterImageContainer: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  image: {
    flex: 1,
  },
  infoContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    lineHeight: 24,
  },
});

export default DetailScreen;
