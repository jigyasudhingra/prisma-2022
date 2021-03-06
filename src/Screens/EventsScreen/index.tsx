import { Box } from '@material-ui/core';
import SocietyEvents from 'Components/SocietyEvents';
import React from 'react';
import NavigationMenu from 'Screens/HomeScreen/NavigationMenu';
import { THEME_PALETTE } from 'Theme/themeConstants';
import { AnimeQuizDetails, HarryPotterQuizDetails, musicEventDetails } from './EventDetails';
import { dramaEventDetails } from './EventDetails';
import { ArtsoloEventDetails } from './EventDetails';
import { ArtgroupEventDetails } from './EventDetails';
import { danceEventDetails } from './EventDetails';
import { FashionEventDetails } from './EventDetails';
import { LiteraryEventDetails } from './EventDetails';
import { gamingcontrollerEventDetails } from './EventDetails';
import { gamingretroEventDetails } from './EventDetails';
import { gamingpcEventDetails } from './EventDetails';
import { gamingmobileEventDetails } from './EventDetails';
import { PhotoEventDetails } from './EventDetails';
import EventsHeroContent from './EventsHeroContent';

const EventsScreen = () => {
  return (
    <Box>
      <NavigationMenu />
      <EventsHeroContent />
      <SocietyEvents
        backgroundColor={THEME_PALETTE.primary.main}
        cardColor={THEME_PALETTE.others.main}
        societyName="Music"
        contactDetails={{ name: 'Aaryan', phone: 7015224175 }}
        details={musicEventDetails}
        id="Music"
      />
      <SocietyEvents
        backgroundColor={THEME_PALETTE.primary.main}
        cardColor={THEME_PALETTE.others.main}
        societyName="Drama"
        contactDetails={{ name: 'Sakshi Jha', phone: 7428865587 }}
        details={dramaEventDetails}
        id="Drama"
      />
      <SocietyEvents
        backgroundColor={THEME_PALETTE.primary.main}
        cardColor={THEME_PALETTE.others.main}
        societyName="Art & Craft(Solo)"
        contactDetails={{ name: 'Esha Gupta', phone: 8777272637 }}
        details={ArtsoloEventDetails}
        id="Art & Craft"
      />
      <SocietyEvents
        backgroundColor={THEME_PALETTE.primary.main}
        cardColor={THEME_PALETTE.others.main}
        societyName="Art & Craft(Group)"
        contactDetails={{ name: 'Esha Gupta', phone: 8777272637 }}
        details={ArtgroupEventDetails}
      />
      <SocietyEvents
        backgroundColor={THEME_PALETTE.primary.main}
        cardColor={THEME_PALETTE.others.main}
        societyName="Dance"
        contactDetails={{ name: 'Ipsita Dalai', phone: 8249508480 }}
        details={danceEventDetails}
        id="Dance"
      />
      <SocietyEvents
        backgroundColor={THEME_PALETTE.primary.main}
        cardColor={THEME_PALETTE.others.main}
        societyName="Fashion"
        contactDetails={{ name: 'Varsha', phone: 9674924258 }}
        details={FashionEventDetails}
        id="Fashion"
      />
      <SocietyEvents
        backgroundColor={THEME_PALETTE.primary.main}
        cardColor={THEME_PALETTE.others.main}
        societyName="Literary"
        contactDetails={{ name: 'Sakshi Singh', phone: 7988842098 }}
        details={LiteraryEventDetails}
        id="Literary"
      />
      <SocietyEvents
        backgroundColor={THEME_PALETTE.primary.main}
        cardColor={THEME_PALETTE.others.main}
        societyName="Photography"
        contactDetails={{ name: 'Soubhik Chakraborty', phone: 8420741342 }}
        details={PhotoEventDetails}
        id="Photography"
      />
      <SocietyEvents
        backgroundColor={THEME_PALETTE.primary.main}
        cardColor={THEME_PALETTE.others.main}
        societyName="Gaming- Controller Games"
        contactDetails={{ name: 'Ruben', phone: 7905650174 }}
        details={gamingcontrollerEventDetails}
        id="Gaming"
      />
      <SocietyEvents
        backgroundColor={THEME_PALETTE.primary.main}
        cardColor={THEME_PALETTE.others.main}
        societyName="Gaming- Retro Games"
        contactDetails={{ name: 'Ruben', phone: 7905650174 }}
        details={gamingretroEventDetails}
      />
      <SocietyEvents
        backgroundColor={THEME_PALETTE.primary.main}
        cardColor={THEME_PALETTE.others.main}
        societyName="Gaming- PC Games"
        contactDetails={{ name: 'Ruben', phone: 7905650174 }}
        details={gamingpcEventDetails}
      />
      <SocietyEvents
        backgroundColor={THEME_PALETTE.primary.main}
        cardColor={THEME_PALETTE.others.main}
        societyName="Gaming- Mobile Games"
        contactDetails={{ name: 'Ruben', phone: 7905650174 }}
        details={gamingmobileEventDetails}
      />
      <SocietyEvents
        backgroundColor={THEME_PALETTE.primary.main}
        cardColor={THEME_PALETTE.others.main}
        societyName="Harry Potter Quiz"
        contactDetails={{ name: 'Riya Dahiya', phone: 9488728622 }}
        details={HarryPotterQuizDetails}
        id="Quiz"
      />
      <SocietyEvents
        backgroundColor={THEME_PALETTE.primary.main}
        cardColor={THEME_PALETTE.others.main}
        societyName="Anime Quiz"
        contactDetails={{ name: 'Abhishek Sharma', phone: 9667502650 }}
        details={AnimeQuizDetails}
      />
    </Box>
  );
};

export default EventsScreen;
