import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/Navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const screenHeight = Dimensions.get('screen').height;

interface DetailsScreenProps
  extends StackScreenProps<RootStackParams, 'Details'> {}

const DetailsScreen = ({ route }: DetailsScreenProps) => {
  const { title, poster_path, original_title } = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${poster_path}`;
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
      <View style={styles.marginContainer}>
        <Icon name="star" size={30} color="grey" />
      </View>
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
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default DetailsScreen;
