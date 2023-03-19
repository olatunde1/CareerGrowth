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
import Member from './components/Member'
import Testimonial from './components/Testimonial.jsx'
import JoinOurCommunity from './components/JoinOurCommunity'
import Faq from './components/Faq';
import './style.css'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Grid>
          {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
              <NavigationBar />
              <LandJob />
              <About />
              <Member />
              <Testimonial />
              <JoinOurCommunity />
              <Faq />
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
