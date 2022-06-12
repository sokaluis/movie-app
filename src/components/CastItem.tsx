import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Cast } from '../interfaces';

interface CastItemProps {
  actor: Cast;
}

export const CastItem = ({ actor }: CastItemProps) => {
  const uri = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`;
  return (
    <View style={styles.container}>
      {!!actor.profile_path && (
        <Image
          source={{
            uri,
          }}
          style={styles.image}
        />
      )}
      <View>
        <Text style={styles.name}>{actor.name}</Text>
        <Text style={styles.character}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 6,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  character: {
    fontSize: 16,
    color: '#000',
  },
});
