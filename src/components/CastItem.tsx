import React from 'react';
import { Cast } from '../interfaces/movieDB';
import { Image, StyleSheet, Text, View } from 'react-native';

interface Props {
  actor: Cast;
}

export const CastItem = ({ actor }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
  return (
    <View style={styles.actorContainer}>
      {actor.profile_path && (
        <Image source={{ uri }} style={styles.actorPhoto} />
      )}
      <View style={styles.actorInfo}>
        <Text style={styles.actorName}>{actor.name}</Text>
        <Text style={styles.actorDescription}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  actorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 3,
    marginRight: 30,
    paddingRight: 15,
    height: 50,
  },
  actorInfo: {
    marginLeft: 10,
    marginTop: 4,
  },
  actorPhoto: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  actorName: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  actorDescription: {
    color: 'black',
    fontSize: 16,
    opacity: 0.7,
  },
});
