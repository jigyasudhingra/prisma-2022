import { Box } from '@material-ui/core';
import React from 'react';
import ContactMe from 'Screens/ContactMe';
import HeroContent from './HeroSection/HeroContent';

const HomeScreen = () => {
  return (
    <Box>
      <HeroContent />
      <ContactMe />
    </Box>
  );
};

export default HomeScreen;
