import React from 'react';
import { ChakraProvider, theme, Box, Container , Wrap, WrapItem } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Carousel from './components/Carousel';
import CounterUp from './components/CounterUp';
import Card from './components/Card';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Box padding="20px" margin="5px">
        <Hero />
        <Carousel />
        <Box display="flex" justifyContent="center">
      <Wrap spacing={4}>
        <WrapItem>
          <Card />
        </WrapItem>
        <WrapItem>
          <Card />
        </WrapItem>
        <WrapItem>
          <Card />
        </WrapItem>
      </Wrap>
    </Box>
        {/* <CounterUp end={1000} /> */}
      </Box>
    </ChakraProvider>
  );
}

export default App;
