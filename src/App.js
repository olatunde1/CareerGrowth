import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import NavigationBar from './components/NavigationBar'
import LandJob from './components/LandJob'
import About from './components/About'
import JoinOurCommunity from './components/JoinOurCommunity';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" >
          {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
              <NavigationBar />
              <LandJob />
              <About />
              <JoinOurCommunity />
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
