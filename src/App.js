import React from 'react';
import {
  ChakraProvider,
  Box,
 
  Grid,
  theme,
} from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import NavigationBar from './components/NavigationBar'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" >
          {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
              <NavigationBar />
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
