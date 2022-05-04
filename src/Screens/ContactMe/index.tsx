import { Box, createStyles, makeStyles, Theme } from '@material-ui/core';
import Typo from 'Components/Typo';
import { useMediaQuery } from 'Hooks/useMediaQuery';
import React from 'react';
import NavigationMenu from 'Screens/HomeScreen/NavigationMenu';
import { THEME_PALETTE } from 'Theme/themeConstants';
import ContactDetails from './ContactDetails';
import ContactMeForm from './ContactMeForm';

const ContactMe: React.FC = () => {
  const classes = useStyles();
  const { isDeviceSm } = useMediaQuery();
  return (
    <Box className={classes.background} id="contact">
      <NavigationMenu />
      {!isDeviceSm ? (
        <>
          <Box className="subHeading" pt={11}>
            <Typo variant="caption" className={classes.verticalLineText}>
              Get yourself registered
            </Typo>
          </Box>

          <Box width="100%" textAlign="center" pt={1}>
            <Typo
              style={{ fontSize: 35, color: '#ffff' }}
              color="textPrimary"
              weight="bold"
              gutterBottom
            >
              REGISTER FOR THE EVENT
            </Typo>
          </Box>
        </>
      ) : (
        <Box>
          <Box width="100%" textAlign="center" pt={2.5}>
            <Box className="subHeading" pt={11}>
              <Typo variant="caption" className={classes.verticalLineText}>
                Get yourself registered
              </Typo>
            </Box>
            <Typo variant="h5" color="textPrimary" gutterBottom weight="bold">
              REGISTER FOR THE EVENT
            </Typo>
          </Box>
        </Box>
      )}
      {isDeviceSm ? (
        <>
          <ContactDetails />
          <ContactMeForm />
        </>
      ) : (
        <Box display="flex" flexDirection="row">
          <Box width="50%">
            <ContactDetails />
          </Box>
          <Box width="50%" alignSelf="center">
            <ContactMeForm />
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
      // height: '100vh',
      backgroundSize: 'cover',
      // minHeight: 689,
      position: 'relative',
      backgroundColor: THEME_PALETTE.primary.main,
    },
    verticalLine: {
      borderLeft: `1px solid ${THEME_PALETTE.secondary.main}`,
      height: 75,
    },
    verticalLineText: {
      color: THEME_PALETTE.secondary.main,
      letterSpacing: 1.1,
    },
  })
);
