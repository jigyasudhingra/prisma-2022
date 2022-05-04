import { Box } from '@material-ui/core';
import React from 'react';
import { THEME_PALETTE } from 'Theme/themeConstants';
import EventsSection from './EventsSection';

const SponsorsSection: React.FC = () => {
  return (
    <Box
      style={{
        textAlignLast: 'center',
        backgroundColor: THEME_PALETTE.primary.main,
        color: 'white',
      }}
      textAlign="-webkit-center"
    >
      <EventsSection />
    </Box>
  );
};

export default SponsorsSection;
