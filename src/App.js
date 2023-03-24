import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  extendTheme
} from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import NavigationBar from './components/NavigationBar'
import LandJob from './components/LandJob'
import About from './components/About'
import Member from './components/Member'
import Testimonial from './components/Testimonial.jsx'
import JoinOurCommunity from './components/JoinOurCommunity'
import Faq from './components/Faq';
import { motion, useScroll } from "framer-motion";

import './style.css'



const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}



function App() {
  const theme = extendTheme({ breakpoints })
  const { scrollYProgress } = useScroll();
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Grid>
          {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
          <motion.div
            className="progress-bar"
            style={{ scaleX: scrollYProgress }}
          />
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
