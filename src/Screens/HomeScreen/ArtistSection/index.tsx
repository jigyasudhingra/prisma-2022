import { createStyles, makeStyles } from '@material-ui/core';
import { Box } from '@mui/material';
import clsx from 'clsx';
import Typo from 'Components/Typo';
import React from 'react';
import { THEME_PALETTE } from 'Theme/themeConstants';
import ARTIST_SECTION_BACKGROUND from '../../../Assets/ArtistSectionBackground.png';
import PARMISH_VERMA from '../../../Assets/ParmishVerma.png';

const ArtistSection = () => {
  const classes = useStyles();
  return (
    <Box p={10} className={clsx(classes.background)}>
      <Box
        className={classes.innerBackground}
        p={5}
        display="flex"
        flexDirection="row"
      >
        <Box
          width="100%"
          style={{ textAlignLast: 'center' }}
          alignSelf="center"
          textAlign="center" // For Safari (textAlignLast is not working in safari)
        >
          <img
            src={PARMISH_VERMA}
            alt="parmish-verma"
            width={380}
            style={{ borderRadius: 15 }}
          />
        </Box>
        <Box width="100%" p={5} alignSelf="center">
          <Box maxWidth={500}>
            <Typo
              style={{ fontSize: 37, letterSpacing: 1.1 }}
              weight="bold"
              color="secondary"
              gutterBottom
            >
              PARMISH VERMA
            </Typo>
            <Typo variant="body2" gutterBottom style={{ marginBottom: 15 }}>
              PARMISH VERMA a young DIRECTOR, MODEL, SINGER & ACTOR, holds a
              leading position in the PUNJABI MUSIC industry. Although PARMISH
              has done sad and love songs, he is known more for his upbeat
              tracks. He started his career as a video director then singer, and
              later debuted as an actor with the film Rocky Mental.
            </Typo>
            <Typo variant="body2" gutterBottom style={{ marginBottom: 15 }}>
              Some of his popular songs that define his style include Gal Ni
              Kadni (2017), Shada (2018) and Chal Oye (2019). He is also known
              for Dil Diya Gallan (2019), Jinde Meriye (2020) and Rocky Mental
              (2017). As PARMISH is very active on social media, his millions of
              fans are like part of the family
            </Typo>
          </Box>
          {/* <Box pt={2.5}>
            <Button variant="outlined" color="primary">
              REGISTER FOR EVENT
            </Button>
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
};

export default ArtistSection;

const useStyles = makeStyles(() =>
  createStyles({
    nextArrow: {
      left: 500,
    },
    innerBackground: {
      borderRadius: 10,
      backgroundColor: THEME_PALETTE.others.main,
      height: `70vh`,
      // minHeight: 500,
    },
    background: {
      backgroundImage: `url(${ARTIST_SECTION_BACKGROUND})`,
      maxHeight: '100vh',
      backgroundSize: 'cover',
    },
  })
);
