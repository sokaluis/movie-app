import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigator/Navigation';
import { GradientProvider } from './src/context/GradientContext';
// import { FadeScreen } from './src/screens/FadeScreen';

interface AppStateProps {
  children: JSX.Element | JSX.Element[];
}

const AppState = ({ children }: AppStateProps) => {
  return <GradientProvider>{children}</GradientProvider>;
};

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigation />
        {/* <FadeScreen /> */}
      </AppState>
    </NavigationContainer>
  );
};

export default App;
