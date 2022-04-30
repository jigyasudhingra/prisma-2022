import { Box } from '@material-ui/core';
import CoreTeamMembers, {
  CoreTeamMemberCardProps,
} from 'Components/CoreTeamMembers';
import TeamMembers from 'Components/TeamMembers';
import React from 'react';
import NavigationMenu from 'Screens/HomeScreen/NavigationMenu';
import { THEME_PALETTE } from 'Theme/themeConstants';

const coreMemberDetail: CoreTeamMemberCardProps[] = [
  {
    name: 'Raghav Kalra',
    imageURL:
      'https://www.mantruckandbus.com/fileadmin/_processed_/7/1/csm_Richard_von_Braunschweig_4e4e3bd591.jpeg',
    position: 'Security Head',
  },
  {
    name: 'Raghav Kalra',
    imageURL:
      'https://www.mantruckandbus.com/fileadmin/_processed_/7/1/csm_Richard_von_Braunschweig_4e4e3bd591.jpeg',
    position: 'Security Head',
  },
  {
    name: 'Raghav Kalra',
    imageURL:
      'https://www.mantruckandbus.com/fileadmin/_processed_/7/1/csm_Richard_von_Braunschweig_4e4e3bd591.jpeg',
    position: 'Security Head',
  },
];

const managementTeamDetails = [
  [
    'Agerf Gersh',
    'Agerf Gersh',
    'Agerf Gersh',
    'Agerf Gersh',
    'Agerf Gersh',
    'Agerf Gersh',
  ],
  [
    'Agerf Gersh',
    'Agerf Gersh',
    'Agerf Gersh',
    'Agerf Gersh',
    'Agerf Gersh',
    'Agerf Gersh',
  ],
];
const TeamsScreen = () => {
  return (
    <Box>
      <NavigationMenu />
      <CoreTeamMembers
        details={coreMemberDetail}
        backgroundColor={THEME_PALETTE.others.main}
        cardColor={THEME_PALETTE.primary.main}
      />
      <TeamMembers
        teamName="Management Team"
        details={managementTeamDetails}
        backgroundColor={THEME_PALETTE.primary.main}
        cardColor={THEME_PALETTE.others.main}
      />
    </Box>
  );
};

export default TeamsScreen;
