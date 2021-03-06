import { Box, Grid } from '@material-ui/core';
import { useMediaQuery } from 'Hooks/useMediaQuery';
import React from 'react';
import Typo from './Typo';
import DIPANSHU_IMG from '../Assets/dipanshu.jpeg';

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
        <Grid
          item
          lg={4}
          sm={6}
          xs={12}
          key="dipanshu"
          style={{ paddingBottom: 48 }}
        >
          <Box
            maxWidth={170}
            p={2}
            style={{ backgroundColor: cardColor }}
            borderRadius={10}
          >
            <Box borderRadius={10} pt={0.5}>
              <img
                width={isDeviceSm ? '100%' : 160}
                height="auto"
                src={DIPANSHU_IMG}
                alt="profile-dipanshu"
                style={{ borderRadius: 6 }}
              />
            </Box>
            <Box pt={2}>
              <Typo
                variant="body2"
                style={{ textTransform: 'uppercase', letterSpacing: 1.1 }}
              >
                Dipanshu
              </Typo>
              <Typo
                variant="caption"
                style={{ textTransform: 'uppercase', letterSpacing: 1.1 }}
                color="secondary"
              >
                Convenor
              </Typo>
            </Box>
          </Box>
        </Grid>

        <Grid container lg={12} item spacing={5} justifyContent="center">
          {Array.from(details).map((i) => (
            <Grid item lg={4} sm={6} xs={12} key={i.name}>
              <Box
                maxWidth={170}
                p={2}
                style={{ backgroundColor: cardColor }}
                borderRadius={10}
              >
                <Box borderRadius={10} pt={0.5}>
                  <img
                    width={isDeviceSm ? '100%' : 160}
                    height="auto"
                    src={i.imageURL}
                    alt={`profile-${i.name}`}
                    style={{ borderRadius: 6 }}
                  />
                </Box>
                <Box pt={2}>
                  <Typo
                    variant="body2"
                    style={{ textTransform: 'uppercase', letterSpacing: 1.1 }}
                  >
                    {i.name}
                  </Typo>
                  <Typo
                    variant="caption"
                    style={{ textTransform: 'uppercase', letterSpacing: 1.1 }}
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
