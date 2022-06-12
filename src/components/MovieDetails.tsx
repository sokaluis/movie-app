import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
// Core
import { Cast, MovieFull } from '../interfaces';

interface MovieDetailsProps {
  isLoading: boolean;
  movie: MovieFull | undefined;
  cast: Cast[];
}

export const MovieDetails = ({ isLoading, movie, cast }: MovieDetailsProps) => {
  const budget = currencyFormatter.format(Number(movie?.budget), {
    code: 'USD',
  });

  return (
    <View>
      {isLoading && (
        <View style={styles.loading}>
          <ActivityIndicator color="gray" size={35} />
        </View>
      )}
      {!isLoading && (
        <View style={styles.infoContainer}>
          <View style={styles.rate}>
            <Icon name="star" size={16} color="#000" />
            <Text style={styles.subtitle}> {movie?.vote_average}</Text>
            <Text style={styles.genres}>
              - {movie?.genres.map(g => g.name).join(', ')}
            </Text>
          </View>
          <Text style={styles.title}>Historia</Text>
          <Text style={styles.description}>{movie?.overview}</Text>
          <Text style={styles.description}>{cast[0].original_name}</Text>
          <Text style={styles.title}>Presupuesto</Text>
          <Text style={styles.description}>{budget}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    marginTop: 20,
  },
  infoContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  rate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginTop: 10,
    fontSize: 23,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.8,
    color: '#000',
  },
  genres: {
    marginLeft: 5,
    color: '#000',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#000',
  },
});
