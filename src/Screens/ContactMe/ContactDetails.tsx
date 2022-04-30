import { Box, createStyles, makeStyles, Theme } from '@material-ui/core';
import Typo from 'Components/Typo';
import { useMediaQuery } from 'Hooks/useMediaQuery';
import React from 'react';
import { THEME_PALETTE } from 'Theme/themeConstants';
import ENQUIRY_QR from '../../Assets/RegistrationEnquiryQR.png';

const ContactDetails = () => {
  const classes = useStyles();
  const { isDeviceSm } = useMediaQuery();
  return (
    <Box pt={4} pl={isDeviceSm ? 6 : 9} pr={isDeviceSm ? 6 : 5} pb={4}>
      <Box className={classes.background} px={4} pt={4} pb={4}>
        <Box className={classes.innerBackground} py={2.5} px={5}>
          <Typo gutterBottom weight="bold" variant="h6">
            NOTE:-
          </Typo>
          <Typo className={classes.note} gutterBottom>
            1. Identity Card is mandatory for the registration process.
          </Typo>
          <Typo className={classes.note} gutterBottom>
            2. The ID Card is required to be uploaded on the website portal.
          </Typo>
          <Typo className={classes.note} gutterBottom>
            3. The Original ID Card will also be checked at the entry gate on
            the day of the fest.
          </Typo>
          <Typo className={classes.note} gutterBottom weight="bold">
            *Early Bird Tickets are on Sale, Limited Time Offer!*
          </Typo>
          <Typo className={classes.note}>
            For any Questions and Queries, Scan the QR Code:-
          </Typo>

          <Box pt={3} alignItems="center">
            <img
              src={ENQUIRY_QR}
              width={isDeviceSm ? 70 : 150}
              alt="enquiry-qr"
            />
          </Box>
          {/* </Typo> */}
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
      borderRadius: 10,
    },
    note: {
      fontSize: 16,
      paddingTop: 12,
    },
  })
);
