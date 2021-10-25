import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { MovieFull, Cast } from '../interfaces/movieDB';
import currencyFormatter from 'currency-formatter';
import { CastItem } from './CastItem';

interface Props {
  MovieFull: MovieFull;
  Cast: Cast[];
}

export const MovieDetails = ({ MovieFull, Cast }: Props) => {
  return (
    <ScrollView>
      <View style={styles.detailsContainer}>
        <View style={styles.rateContainer}>
          <Icon name="star" color="grey" size={16} />
          <Text style={styles.rateText}>{MovieFull.vote_average} / 10</Text>
          <Text style={styles.genres}>
            {MovieFull.genres.map(g => g.name).join(', ')}
          </Text>
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionTitle}>Historia</Text>
        <Text style={styles.descriptionText}>{MovieFull.overview}</Text>
        <Text style={styles.descriptionTitle}>Presupuesto</Text>
        <Text style={styles.budgetText}>
          {currencyFormatter.format(MovieFull.budget, { code: 'USD' })}
        </Text>
      </View>
      <View style={styles.castContainer}>
        <Text style={styles.descriptionTitle}>Actores</Text>
        <FlatList
          data={Cast}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <CastItem actor={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.castSlider}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    marginHorizontal: 20,
  },
  rateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  rateText: {
    color: 'black',
    marginLeft: 5,
  },
  genres: {
    color: 'black',
    marginLeft: 10,
  },
  descriptionContainer: {
    marginHorizontal: 20,
  },
  descriptionTitle: {
    color: 'black',
    fontSize: 20,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  descriptionText: {
    color: 'black',
    fontSize: 16,
  },
  budgetText: {
    color: 'black',
    fontSize: 16,
  },
  castContainer: {
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 100,
  },
  castSlider: {
    marginTop: 20,
    height: 70,
  },
});
