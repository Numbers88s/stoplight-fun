// modules
import React from 'react';
import {ThemeProvider} from 'styled-components';

// local
import Stoplight from 'components/Stoplight';
import Grid from 'components/Grid';
import {theme} from './theme';
import {GlobalStyles} from './global';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Grid>
        <Stoplight />
      </Grid>
    </ThemeProvider>
  );
}
