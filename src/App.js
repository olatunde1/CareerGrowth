import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
} from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import NavigationBar from './components/NavigationBar'
import LandJob from './components/LandJob'
import About from './components/About'
import Member from './components/Member'
import Testimonial from './components/Testimonial.jsx'
import JoinOurCommunity from './components/JoinOurCommunity'
import Faq from './components/Faq';
import theme from './components/theme'
import { motion, useScroll } from "framer-motion";

import './style.css'


function App() {
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
