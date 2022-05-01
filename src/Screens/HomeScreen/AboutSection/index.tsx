import React from 'react';
import { Box, Button, createStyles, makeStyles } from '@material-ui/core';
import '../../../App.css';
import Typo from 'Components/Typo';
import { useMediaQuery } from 'Hooks/useMediaQuery';
import { THEME_PALETTE } from 'Theme/themeConstants';
import ABOUT_PRISMA_BACKGROUND from '../../../Assets/AboutPrismaBackground.png';
import PRISMA_ABOUT_LOGO from '../../../Assets/PrismaLogo-AboutSection.png';
import { NavHashLink as Link } from 'react-router-hash-link';


const AboutSection: React.FC = () => {
  const classes = useStyles();
  const { isDeviceSm } = useMediaQuery();
  return (
    <Box
      p={5}
      className={isDeviceSm ? classes.mobilebackground : classes.background}
      display={isDeviceSm ? '' : 'flex'}
      flexDirection="row"
    >
      {isDeviceSm && (
        <Typo
          style={{
            fontSize: isDeviceSm ? 28 : 37,
            letterSpacing: 1.1,
            textAlign: 'center',
            textAlignLast: 'center',
          }}
          weight="bold"
          color="secondary"
          gutterBottom
        >
          ABOUT PRISMA
        </Typo>
      )}
      <Box
        width="100%"
        pt={4}
        alignSelf="center"
        style={{ textAlignLast: 'right' }}
        textAlign="right"
      >
        <img
          src={PRISMA_ABOUT_LOGO}
          alt="prsima-logo-about-section"
          width={isDeviceSm ? '100%' : 420}
          height="auto"
          style={{ borderRadius: 10 }}
        />
      </Box>
      <Box
        width="100%"
        p={isDeviceSm ? 0 : 10}
        pt={isDeviceSm ? 5 : 13}
        alignSelf="center"
      >
        <Box maxWidth={500}>
          {!isDeviceSm && (
            <Typo
              style={{ fontSize: isDeviceSm ? 25 : 37, letterSpacing: 1.1 }}
              weight="bold"
              color="secondary"
              gutterBottom
            >
              ABOUT PRISMA
            </Typo>
          )}
          <Typo variant="body2" gutterBottom style={{ marginBottom: 15 }}>
            The cultural festival PRISMA witnesses the gathering of zealous
            students from various universities to display their talents,
            connect, mingle and celebrate their artistry together. At SRM we
            celebrate our exuberant Annual Cultural Festival PRISMA, The fest is
            organized by the students themselves, which gives them the
            opportunity to enhance their management and organizing skills.
          </Typo>
          <Typo variant="body2" gutterBottom style={{ marginBottom: 15 }}>
            At SRM we celebrate our exuberant Annual Cultural Festival PRISMA,
            The fest is organized by the students themselves, which gives them
            the opportunity to enhance their management and organizing skills.
          </Typo>
          <Typo variant="body2" gutterBottom style={{ marginBottom: 15 }}>
            Its a PRISMATIC event which enlightens the heart of every student.
            Students take part in various cultural events and expand the
            horizons of their talents whilst celebrating their artistic visions
            together.
          </Typo>
        </Box>
        <Box pt={2.5} pb={isDeviceSm ? 2 : 0}>
        <Button variant="outlined" color="primary">
            <Link to="/register"
            className={
              !isDeviceSm ? classes.navMenu : classes.mobileMenu
            }
            >
            
            Register For Fest
            </Link>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutSection;

const useStyles = makeStyles(() =>
  createStyles({
    nextArrow: {
      left: 500,
    },
    background: {
      backgroundImage: `url(${ABOUT_PRISMA_BACKGROUND})`,
      // height: '100%',
      backgroundSize: 'cover',
      // minHeight: 690,
      position: 'relative',
    },
    mobilebackground: {
      backgroundColor: THEME_PALETTE.others.main,
    },
    navMenu: {
      // marginLeft: 80,
      // paddingLeft: 130,
      textDecoration: 'none ! important ',
      color: THEME_PALETTE.text.primary,
      fontFamily: 'poppins',
      '&:hover': {
        color: THEME_PALETTE.primary.main,
      },
    },
    mobileMenu: {
      textDecoration: 'none ! important ',
      color: THEME_PALETTE.text.primary,
      fontFamily: 'poppins',
      fontSize: 14,
      '&:hover': {
        color: THEME_PALETTE.primary.main,
      },
    },
  })
);
