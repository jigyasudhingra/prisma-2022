import { Box } from '@material-ui/core';
import React from 'react';
import ContactMe from 'Screens/ContactMe';
import AboutSection from './AboutSection';
import HeroContent from './HeroSection/HeroContent';
import NavigationMenu from './NavigationMenu';

const HomeScreen = () => {
  return (
    <Box>
      <NavigationMenu />
      <HeroContent />
      <AboutSection />
      <ContactMe />
    </Box>
  );
};

export default HomeScreen;
