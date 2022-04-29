import { Box, Grid } from '@material-ui/core';
import { useMediaQuery } from 'Hooks/useMediaQuery';
import React from 'react';
import Typo from './Typo';

export interface CoreTeamMemberCardProps {
  imageURL: string;
  name: string;
  position: string;
}

interface CoreTeamMembersProps {
  details: CoreTeamMemberCardProps[];
  backgroundColor: string;
  cardColor: string;
}

const CoreTeamMembers = (props: CoreTeamMembersProps) => {
  const { details, backgroundColor, cardColor } = props;
  const { isDeviceSm } = useMediaQuery();
  return (
    <Box style={{ backgroundColor }} pt={16}>
      <Box style={{ textAlignLast: 'center' }} textAlign="center">
        <Typo
          variant={isDeviceSm ? 'h5' : 'h4'}
          color="secondary"
          weight="bold"
          style={{ letterSpacing: 1.2, textTransform: 'uppercase' }}
        >
          Core Team
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
          {Array.from(details).map((i) => (
            <Grid item lg={4} sm={6} xs={12} key={i.name}>
              <Box
                p={2}
                style={{ backgroundColor: cardColor }}
                borderRadius={10}
              >
                <Box>
                  <img width={300} src={i.imageURL} alt={`profile-${i.name}`} />
                </Box>
                <Box>
                  <Typo
                    variant="body1"
                    style={{ textTransform: 'uppercase', letterSpacing: 1.1 }}
                  >
                    {i.name}
                  </Typo>
                  <Typo
                    variant="body2"
                    style={{ textTransform: 'capitalize' }}
                    color="secondary"
                  >
                    {i.position}
                  </Typo>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default CoreTeamMembers;
