import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../interfaces';
// Screens
import { HomeScreen, DetailScreen } from '../screens';

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#fff' },
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
