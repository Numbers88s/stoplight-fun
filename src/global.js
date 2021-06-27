import {createGlobalStyle} from 'styled-components';
import cartoonCrossroads from './assets/cartoon-crossroads.jpeg';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  #root {
    margin: 60px 0 0;
  }

  body {
    background: ${({theme}) => theme.body};
    color: ${({theme}) => theme.text};
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
    background: url(${cartoonCrossroads}) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
`;
