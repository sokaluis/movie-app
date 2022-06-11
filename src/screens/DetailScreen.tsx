import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import { RootStackParamList } from '../interfaces/navigationInterfaces';

type DetailScreenProps = StackScreenProps<RootStackParamList>;

const DetailScreen = ({ route }: DetailScreenProps) => {
  const movie = route.params;
  return (
    <View>
      <Text>{movie?.title}</Text>
    </View>
  );
};

export default DetailScreen;
