import { Box } from '@material-ui/core';
import SocietyEvents from 'Components/SocietyEvents';
import React from 'react';
import NavigationMenu from 'Screens/HomeScreen/NavigationMenu';
import { THEME_PALETTE } from 'Theme/themeConstants';

const EventsScreen = () => {
  const musicEventDetails = [
    {
      eventName: 'Solo Singing',
      eventDetail:
        'Lorem ipsum t consectetur, adipisicing elit. Illum ab, debitis blanditiis similique id deleniti atque aut impedit nihil. Officiis ipsam minus laboriosam sint! Optio, quis, animi odit quo quibusdam fugiat tempore quia ipsum, deleniti expedita itaque. Ea animi debitis voluptatibus quod repellendus repudiandae neque! At animi dolores ipsa consequatur.',
    },
    {
      eventName: 'Duet Singing',
      eventDetail:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum ab, debitis blanditiis similique id deleniti atque aut impedit nihil. Officiis ipsam minus laboriosam sint! Optio, quis, animi odit quo quibusdam fugiat tempore quia ipsum, deleniti expedita itaque. Ea animi debitis voluptatibus quod repellendus repudiandae neque! At animi dolores ipsa consequatur.',
    },
    {
      eventName: 'Battle Of Bands',
      eventDetail:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum ab, debitis blanditiis similique id deleniti atque aut impedit nihil. Officiis ipsam minus laboriosam sint! Optio, quis, animi odit quo quibusdam fugiat tempore quia ipsum, deleniti expedita itaque. Ea animi debitis voluptatibus quod repellendus repudiandae neque! At animi dolores ipsa consequatur.',
    },
  ];

  return (
    <Box>
      <NavigationMenu />
      <SocietyEvents
        backgroundColor={THEME_PALETTE.primary.main}
        cardColor={THEME_PALETTE.others.main}
        societyName="Music"
        contactDetails={{ name: 'Rajeev Kumar', phone: 556998774 }}
        details={musicEventDetails as any}
      />
    </Box>
  );
};

export default EventsScreen;
