import React from 'react';
import { Box, Button, createStyles, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import '../../../App.css';
import Typo from 'Components/Typo';
import ABOUT_PRISMA_BACKGROUND from '../../../Assets/AboutPrismaBackground.png';
import PRISMA_ABOUT_LOGO from '../../../Assets/PrismaLogo-AboutSection.png';

const AboutSection: React.FC = () => {
  const classes = useStyles();
  return (
    <Box
      p={5}
      className={clsx(classes.background)}
      display="flex"
      flexDirection="row"
    >
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
          width={420}
          style={{ borderRadius: 10 }}
        />
      </Box>
      <Box width="100%" p={10} pt={13} alignSelf="center">
        <Box maxWidth={500}>
          <Typo
            style={{ fontSize: 37, letterSpacing: 1.1 }}
            weight="bold"
            color="secondary"
            gutterBottom
          >
            ABOUT PRISMA
          </Typo>
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
        <Box pt={2.5}>
          <Button variant="outlined" color="primary">
            REGISTER FOR EVENT
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
  })
);
