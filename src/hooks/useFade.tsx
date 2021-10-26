import { useRef } from 'react';
import { Animated } from 'react-native';

export const useFade = () => {
  const opacity = useRef(new Animated.Value(0)).current;

  const fadeIn = (callbak?: Function) => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(() => (callbak ? callbak() : null));
  };
  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return {
    opacity,
    fadeIn,
    fadeOut,
  };
};
