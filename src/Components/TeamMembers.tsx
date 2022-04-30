import { Box, Grid } from '@material-ui/core';
import { useMediaQuery } from 'Hooks/useMediaQuery';
import React from 'react';
import Typo from './Typo';

export interface TeamMembersProps {
  backgroundColor: string;
  cardColor: string;
  details: string[][];
  teamName: string;
}

const TeamMembers = (props: TeamMembersProps) => {
  const { details, backgroundColor, cardColor, teamName } = props;
  const { isDeviceSm } = useMediaQuery();
  return (
    <Box style={{ backgroundColor }} pt={9}>
      <Box style={{ textAlignLast: 'center' }} textAlign="center">
        <Typo
          variant={isDeviceSm ? 'h5' : 'h4'}
          color="secondary"
          weight="bold"
          style={{ letterSpacing: 1.2, textTransform: 'uppercase' }}
        >
          {teamName}
        </Typo>
      </Box>
      <Box
        pl={!isDeviceSm ? 40 : 9}
        pr={!isDeviceSm ? 40 : 9}
        pt={!isDeviceSm ? 8 : 5}
        pb={10}
        style={{ textAlignLast: 'center' }}
        textAlign="-webkit-center"
      >
        <Grid container lg={12} item spacing={5} justifyContent="center">
          {Array.from(details).map((i, idx) => (
            // eslint-disable-next-line react/no-array-index-key
            <Grid item lg={4} sm={6} xs={12} key={`i.teamName-${idx}`}>
              <Box
                p={2}
                style={{ backgroundColor: cardColor }}
                borderRadius={10}
              >
                {Array.from(i).map((j) => (
                  <Box py={1}>
                    <Typo variant="body2">{j}</Typo>
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default TeamMembers;
