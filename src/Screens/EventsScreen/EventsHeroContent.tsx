import {
  Box,
  Button,
  createStyles,
  Grid,
  makeStyles,
  Theme,
} from '@material-ui/core';
import Typo from 'Components/Typo';
import { useMediaQuery } from 'Hooks/useMediaQuery';
import React from 'react';
import { THEME_PALETTE } from 'Theme/themeConstants';
import { Link } from 'react-scroll';

const REGISTER_DOCS_LINK =
  'https://docs.google.com/forms/d/e/1FAIpQLSckO1HrYoCpGbA8GFhly2Ixqz5FqVKQqZjKFjc3wKzVIi4oGA/viewform?usp=sf_link';
const details = [
  'Music',
  'Drama',
  'Art & Craft',
  'Dance',
  'Fashion',
  'Literary',
  'Photography',
  'Gaming',
  'Quiz'
];

const EventsHeroContent = () => {
  const classes = useStyles();
  const { isDeviceSm } = useMediaQuery();
  return (
    <Box
      p={10}
      pt={isDeviceSm ? 11 : 15}
      pl={isDeviceSm ? 5 : 30}
      pr={isDeviceSm ? 5 : 30}
      className={classes.background}
      textAlign="center"
      style={{ textAlignLast: '-webkit-center' as any }}
    >
      <Box>
        <Typo
          variant={isDeviceSm ? 'h6' : 'h4'}
          gutterBottom
          color="secondary"
          weight="bold"
          style={{ textTransform: 'uppercase' }}
        >
          Cultural Socities
        </Typo>
        <Typo variant="body2">Click on the society to see their events.</Typo>
      </Box>
      <Box pt={6}>
        <Grid
          container
          lg={12}
          item
          spacing={isDeviceSm ? 2 : 3}
          justifyContent="center"
        >
          {Array.from(details).map((i) => (
            <Grid item lg={4} sm={6} xs={6} key={`${i}`}>
              <Link to={i} smooth spy duration={1000}>
                <Box className={classes.card}>
                  <Typo variant="body2">{i}</Typo>
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>

        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          pt={5}
          style={{ textAlign: '-webkit-center' as any }}
        >
          {/* <Box width="100%">
                    <Button variant='outlined' color='primary'>See Event Schedule</Button>
                </Box> */}
          <a
            href={REGISTER_DOCS_LINK}
            rel="noopener noreferrer"
            target="_blank"
            style={{ textDecoration: 'none' }}
          >
            <Box width="100%">
              <Button variant="outlined" color="primary">
                Register For Cultural Events
              </Button>
            </Box>
          </a>
        </Box>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    background: {
      backgroundColor: THEME_PALETTE.others.main,
    },
    card: {
      borderRadius: 10,
      padding: 11,
      backgroundColor: THEME_PALETTE.primary.main,
      cursor: 'pointer',
    },
  })
);

export default EventsHeroContent;
