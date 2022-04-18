import { Box, createStyles, makeStyles, Theme } from '@material-ui/core';
import Typo from 'Components/Typo';
import { useMediaQuery } from 'Hooks/useMediaQuery';
import React from 'react';
import { THEME_PALETTE } from 'Theme/themeConstants';
import ContactDetails from './ContactDetails';
import ContactMeForm from './ContactMeForm';

const ContactMe: React.FC = () => {
  const classes = useStyles();
  const { isDeviceSm } = useMediaQuery();
  return (
    <Box className={classes.background} id="contact">
      {!isDeviceSm ? (
        <>
          <Box className="subHeading">
            <Box display="flex" width="100%">
              <Box width="100%" />
              <Box width="100%">
                <Box className={classes.verticalLine} />
              </Box>
            </Box>
            <Box marginTop={1} />
            <Typo variant="caption" className={classes.verticalLineText}>
              Get In Touch
            </Typo>
          </Box>

          <Box width="100%" textAlign="center" pt={1}>
            <Typo style={{ fontSize: 38, color: '#ffff' }} color="textPrimary">
              Contact Me
            </Typo>
          </Box>
        </>
      ) : (
        <Box width="100%" textAlign="center" pt={2.5}>
          <Typo variant="h5" color="textPrimary" gutterBottom>
            Contact Me
          </Typo>
          <Typo variant="caption" className={classes.verticalLineText}>
            Get In Touch
          </Typo>
        </Box>
      )}
      {isDeviceSm ? (
        <ContactMeForm />
      ) : (
        <Box display="flex" flexDirection="row">
          <Box width="50%">
            <ContactMeForm />
          </Box>
          <Box width="50%">
            <ContactDetails />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ContactMe;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    background: {
      height: '100%',
      backgroundSize: 'cover',
      // minHeight: 689,
      position: 'relative',
      backgroundColor: THEME_PALETTE.primary.main,
    },
    verticalLine: {
      borderLeft: `1px solid #F4A203`,
      height: 75,
    },
    verticalLineText: {
      color: '#F4A203',
      letterSpacing: 1.1,
    },
  })
);
