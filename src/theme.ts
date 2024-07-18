import { createGlobalStyle } from 'styled-components';

export interface ITheme {
  colors: {
    bg: string;
    bg2: string;
    font: string;
    main: string;
  };
}

const darkTheme: ITheme = {
  colors: {
    bg: '#2B344B',
    bg2: '#001529',
    font: '#E5E4E8',
    main: 'orange',
  },
};

const lightTheme: ITheme = {
  colors: {
    bg: 'white',
    bg2: 'white',
    font: 'black',
    main: 'blue',
  },
};

export const appTheme: { dark: ITheme; light: ITheme } = {
  dark: darkTheme,
  light: lightTheme,
};

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Sofia Sans Condensed", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
