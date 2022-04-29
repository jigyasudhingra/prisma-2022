import { Box } from '@material-ui/core';
import SocietyEvents from 'Components/SocietyEvents';
import React from 'react';
import NavigationMenu from 'Screens/HomeScreen/NavigationMenu';
import { THEME_PALETTE } from 'Theme/themeConstants';
import { musicEventDetails } from './EventDetails';

const EventsScreen = () => {
  return (
    <Box>
      <NavigationMenu />
      <SocietyEvents
        backgroundColor={THEME_PALETTE.primary.main}
        cardColor={THEME_PALETTE.others.main}
        societyName="Music"
        contactDetails={{ name: 'Rajeev Kumar', phone: 556998774 }}
        details={musicEventDetails}
      />
    </Box>
  );
};

export default EventsScreen;
