import { Box } from '@material-ui/core';
import React from 'react';
import ContactMe from 'Screens/ContactMe';
import HeroContent from './HeroSection/HeroContent';
import NavigationMenu from './NavigationMenu';

const HomeScreen = () => {
  return (
    <Box>
      <NavigationMenu />
      <HeroContent />
      <ContactMe />
    </Box>
  );
};

export default HomeScreen;
