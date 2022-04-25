import { createStyles, makeStyles } from '@material-ui/core';
import { Box } from '@mui/material';
import clsx from 'clsx';
import React from 'react';
import ARTIST_SECTION_BACKGROUND from '../../../Assets/ArtistSectionBackground.png';

const ArtistSection = () => {
  const classes = useStyles();

  return <Box p={5} className={clsx(classes.background, 'subHeading')} />;
};

export default ArtistSection;

const useStyles = makeStyles(() =>
  createStyles({
    nextArrow: {
      left: 500,
    },
    background: {
      backgroundImage: `url(${ARTIST_SECTION_BACKGROUND})`,
      height: '100%',
      backgroundSize: 'cover',
      minHeight: 690,
      position: 'relative',
    },
  })
);
