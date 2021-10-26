import React, { createContext, useState } from 'react';
interface GradientProviderProps {
  children: JSX.Element | JSX.Element[];
}
interface GradientContextProps {
  mainColors: ImageColorsProps;
  prevColors: ImageColorsProps;
  handleMainColors: (colors: ImageColorsProps) => void;
  handlePrevColors: (colors: ImageColorsProps) => void;
}
interface ImageColorsProps {
  primary: string | undefined;
  secondary: string | undefined;
}

export const GradientContext = createContext({} as GradientContextProps);

export const GradientProvider = ({ children }: GradientProviderProps) => {
  // TODO: use useReducer instead useState to handle colors
  const [mainColors, setMainColors] = useState<ImageColorsProps>({
    primary: 'transparent',
    secondary: 'transparent',
  });
  const [prevColors, setPrevColors] = useState<ImageColorsProps>({
    primary: 'transparent',
    secondary: 'transparent',
  });
  const handleMainColors = (colors: ImageColorsProps) => {
    setMainColors(colors);
  };
  const handlePrevColors = (colors: ImageColorsProps) => {
    setPrevColors(colors);
  };
  return (
    <GradientContext.Provider
      value={{
        mainColors,
        prevColors,
        handleMainColors,
        handlePrevColors,
      }}>
      <>{children}</>
    </GradientContext.Provider>
  );
};
