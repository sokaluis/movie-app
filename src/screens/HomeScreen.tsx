import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useMovies } from '../hooks/useMovies';

const HomeScreen = () => {
  const { moviesNow, isLoading } = useMovies();
  console.log(moviesNow[0]?.title);

  if (isLoading) {
    return (
      <View style={styles.activityIndicator}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
