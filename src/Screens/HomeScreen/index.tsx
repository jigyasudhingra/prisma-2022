import { Box } from '@material-ui/core';
import Loader from 'Components/Loader';
import useAppInit from 'Hooks/useAppInit';
import React from 'react';
import AboutSection from './AboutSection';
import ArtistSection from './ArtistSection';
import HeroContent from './HeroSection/HeroContent';
import NavigationMenu from './NavigationMenu';

const HomeScreen = () => {
  const { loading } = useAppInit();

  return loading ? (
    <Loader overlayed />
  ) : (
    <Box>
      <NavigationMenu />
      <HeroContent />
      <AboutSection />
      <ArtistSection />
      {/* <EventsSection /> */}
    </Box>
  );
};

export default HomeScreen;
