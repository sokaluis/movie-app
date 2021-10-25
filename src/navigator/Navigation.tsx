import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import { Movie } from '../interfaces/movieDB';

export type RootStackParams = {
  Home: undefined;
  Details: Movie;
};

const Stack = createStackNavigator<RootStackParams>();

const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Details"
        options={{
          cardStyle: {
            backgroundColor: 'white',
          },
        }}
        component={DetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
