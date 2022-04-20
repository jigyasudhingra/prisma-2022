import { Box, createStyles, makeStyles, Theme } from '@material-ui/core';
import Typo from 'Components/Typo';
import { useMediaQuery } from 'Hooks/useMediaQuery';
import React from 'react';
import { THEME_PALETTE } from 'Theme/themeConstants';

const ContactDetails = () => {
  const classes = useStyles();
  const { isDeviceSm } = useMediaQuery();
  return (
    <Box pt={4} pl={isDeviceSm ? 4 : 9} pr={isDeviceSm ? 4 : 5} pb={4}>
      <Box className={classes.background} px={4} pt={4} pb={4}>
        <Box className={classes.innerBackground} py={20}>
          <Typo>hello</Typo>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactDetails;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    background: {
      backgroundColor: THEME_PALETTE.others.main,
    },
    innerBackground: {
      backgroundColor: THEME_PALETTE.primary.main,
    },
  })
);
