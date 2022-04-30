import {
  alpha,
  Box,
  Button,
  createStyles,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { THEME_PALETTE } from 'Theme/themeConstants';
import { useMediaQuery } from 'Hooks/useMediaQuery';
import Typo from 'Components/Typo';
import clsx from 'clsx';
import HERO_IMAGE from '../../../Assets/PrismaHome2.mp4';
import 'animate.css';
import LeftSocials from './LeftSocials';

const HeroContent: React.FC = () => {
  const classes = useStyles();
  const { isDeviceSm } = useMediaQuery();
  return (
    <Box
      className={clsx(classes.background, 'animate__animated animate__fadeIn')}
      id="home"
      overflow="hidden"
    >
      <Box className={classes.backgroundVideo}>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          loop
          autoPlay
          id="video-banner"
          src={HERO_IMAGE}
          preload="auto"
        />
      </Box>
      <Box className={classes.overlay} />
      {!isDeviceSm && (
        <Box
          // width="14%"
          left={120}
          position="absolute"
          className="animate__animated animate__fadeIn animate__delay-1s"
          bottom={80}
          // height="100vh"
        >
          <LeftSocials />
        </Box>
      )}

      <Box
        textAlign="center"
        justifyContent="center"
        alignSelf="center"
        position="relative"
        pt={20}
      >
        <Box bottom={5}>
          <Typo
            color="textSecondary"
            style={{ letterSpacing: 1.6 }}
            variant={!isDeviceSm ? 'body1' : 'body2'}
          >
            The Annual Techno Cultural Fest
          </Typo>
        </Box>
        {/* <Box height={2} /> */}
        <Box className={classes.heading} pt={2}>
          <Typography
            variant={!isDeviceSm ? 'h2' : 'h4'}
            className={
              !isDeviceSm ? classes.nameHeading : classes.mobileNameHeading
            }
          >
            PRISMA 2K22
          </Typography>
        </Box>
        <Box height={25} />
        <Box className="subHeading">
          <Box className={classes.subHeading} pl={6} pr={6}>
            <Typo variant="body2">
            The cultural festival PRISMA witnesses the gathering of zealous
            students from various universities to display their talents,
            connect, mingle and celebrate their artistry together. At SRM we
            celebrate our exuberant Annual Cultural Festival PRISMA, The fest is
            organized by the students themselves, which gives them the
            opportunity to enhance their management and organizing skills.
            </Typo>
          </Box>
        </Box>
        <Box height={37} />
        <Box display="flex" flexDirection="row" justifyContent="center">
          <Button variant="outlined" color="primary">
            Register For Fest
          </Button>
          {/* <Box width={10} />
          <Button variant="contained" color="secondary">
            Resume
          </Button> */}
        </Box>

        {/* Scroll With Vertical Line */}
        {!isDeviceSm && (
          <Box marginTop={85 / 8} className="subHeading">
            <Box
              display="flex"
              width="100%"
              marginTop={2}
              className="animate__animated animate__bounce animate__infinite animate__slower "
            >
              <Box width="100%" />
              <Box width="100%">
                <Box className={classes.verticalLine} />
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HeroContent;

const useStyles = makeStyles(() =>
  createStyles({
    nameHeading: {
      fontWeight: 600,
      letterSpacing: 5,
    },
    mobileNameHeading: {
      fontWeight: 600,
      letterSpacing: 2,
    },
    background: {
      // backgroundImage: `url(HERO_IMAGE)`,
      // background
      // height: '100vh',
      // backgroundSize: 'cover',
      minHeight: 690,
      position: 'relative',
    },
    overlay: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: alpha(THEME_PALETTE.others.main, 0.5),
      backdropFilter: 'blur(4px)',
    },
    heading: {
      color: `${THEME_PALETTE.primary.contrastText}! important`,
    },
    subHeading: {
      maxWidth: 700,
    },
    verticalLine: {
      borderLeft: '1px solid #ffffff47',
      height: 75,
    },
    verticalText: {
      writingMode: 'vertical-rl',
      letterSpacing: 1,
    },
    verticalRightLine: {
      borderRight: '1px solid #ffffff47',
      height: 75,
    },
    backgroundVideo: {
      // top: 0,
      // width: 00,
      height: '100vh',
      position: 'absolute',
    },
  })
);
