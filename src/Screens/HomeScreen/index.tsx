import { Box } from '@material-ui/core';
import React from 'react';
import AboutSection from './AboutSection';
import ArtistSection from './ArtistSection';
import EventsSection from './EventsSection';
import HeroContent from './HeroSection/HeroContent';
import NavigationMenu from './NavigationMenu';

const HomeScreen = () => {
  return (
    <Box>
      <NavigationMenu />
      <HeroContent />
      <AboutSection />
      <ArtistSection />
      <EventsSection />
    </Box>
  );
};

export default HomeScreen;
