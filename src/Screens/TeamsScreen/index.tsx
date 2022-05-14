import { Box } from '@material-ui/core';
import CoreTeamMembers, {
  CoreTeamMemberCardProps,
} from 'Components/CoreTeamMembers';
import TeamMembers from 'Components/TeamMembers';
import React from 'react';
import NavigationMenu from 'Screens/HomeScreen/NavigationMenu';
import { THEME_PALETTE } from 'Theme/themeConstants';
import RAGHAV_IMG from '../../Assets/raghav.jpeg';
import ARYAN_IMG from '../../Assets/Aryan.jpg';
import DEVANSH_IMG from '../../Assets/devansh.jpeg';
import SAKAAR_IMG from '../../Assets/sakaar.jpeg';
import JIGYASU_IMG from '../../Assets/jigyasu.jpeg';
import BHAVJOT_IMG from '../../Assets/bhavjot.jpeg';
import MANYA_IMG from '../../Assets/manya.jpeg';
import SHAGUN_IMG from '../../Assets/shagun.png';
import ESHA_IMG from '../../Assets/esha.jpeg';

const coreMemberDetail: CoreTeamMemberCardProps[] = [
  // {
  //   name: 'Dipanshu',
  //   imageURL: DIPANSHU_IMG,
  //   position: 'Convener',
  // },
  {
    name: 'Raghav Kalra',
    imageURL: RAGHAV_IMG,
    position: 'Registrations & Security',
  },
  {
    name: 'Aryan Bhongale',
    imageURL: ARYAN_IMG,
    position: 'Graphics',
  },
  {
    name: 'Devansh Verma',
    imageURL: DEVANSH_IMG,
    position: 'Sponsorship',
  },
  {
    name: 'Sakaar Mittal',
    imageURL: SAKAAR_IMG,
    position: 'Logistics',
  },
  {
    name: 'Jigyasu Dhingra',
    imageURL: JIGYASU_IMG,
    position: 'Tech',
  },
  {
    name: 'Bhavjot Singh',
    imageURL: BHAVJOT_IMG,
    position: 'Crowd Management',
  },
  {
    name: 'Manya Gupta',
    imageURL: MANYA_IMG,
    position: 'PR & Marketing',
  },
  {
    name: 'Shagun Vashisht',
    imageURL: SHAGUN_IMG,
    position: 'Decor',
  },
  {
    name: 'Esha Gupta',
    imageURL: ESHA_IMG,
    position: 'Decor',
  },
];

const organizerTeamDetails = [
  [
    'Bharat Gupta',
    'Vipra',
    // 'Udit Vats',
    'Abhishek Sharma',
    'Chirag Jain',
  ],
  ['Shahrukh Sheikh', 'Siddhant Kasliwal', 'Srishti'],
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
        teamName="Organizer Team"
        details={organizerTeamDetails}
        backgroundColor={THEME_PALETTE.primary.main}
        cardColor={THEME_PALETTE.others.main}
      />
    </Box>
  );
};

export default TeamsScreen;
