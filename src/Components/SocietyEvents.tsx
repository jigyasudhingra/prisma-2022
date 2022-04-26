import {
  Box,
  Button,
  createStyles,
  Grid,
  makeStyles,
  Theme,
} from '@material-ui/core';
import { AppDialogContext } from 'Contexts/AppDialogContext';

import { useMediaQuery } from 'Hooks/useMediaQuery';
import React, { useContext } from 'react';
import { THEME_PALETTE } from 'Theme/themeConstants';
import Typo from './Typo';

export interface CardDetailsProps {
  eventName: string;
  eventDetail: string;
}
// Summary only of 130 characters only
export interface SocietyEventsProps {
  societyName: string;
  details: CardDetailsProps[];
  backgroundColor: string;
  cardColor: string;
  contactDetails: { name: string; phone: number };
}
const SocietyEvents = (props: SocietyEventsProps) => {
  const { societyName, details, backgroundColor, cardColor, contactDetails } =
    props;
  const classes = useStyles(props);
  const { isDeviceSm } = useMediaQuery();
  const { showDialog } = useContext(AppDialogContext);

  return (
    <Box style={{ backgroundColor }} pt={16}>
      <Box style={{ textAlignLast: 'center' }} textAlign="center">
        <Typo
          variant={isDeviceSm ? 'h5' : 'h4'}
          color="secondary"
          weight="bold"
          style={{ letterSpacing: 1.2, textTransform: 'uppercase' }}
        >
          {societyName}
        </Typo>
      </Box>
      <Box
        pl={!isDeviceSm ? 40 : 9}
        pr={!isDeviceSm ? 40 : 9}
        pt={!isDeviceSm ? 8 : 5}
        pb={10}
        style={{ textAlignLast: 'center' }}
        textAlign="center"
      >
        <Grid container lg={12} item spacing={5} justifyContent="center">
          {Array.from(details).map((i) => (
            <Grid item lg={4} sm={6} xs={12} key={i.eventName ?? 'fcr'}>
              <Box
                p={2}
                style={{ backgroundColor: cardColor }}
                borderRadius={10}
              >
                <Box pb={1}>
                  <Typo
                    variant="body1"
                    color="secondary"
                    style={{ letterSpacing: 0.8, textTransform: 'uppercase' }}
                  >
                    {i.eventName.slice(0, 18)}
                  </Typo>
                </Box>
                <Box>
                  <Typo variant="caption">
                    {i.eventDetail.slice(0, 130)} ...
                  </Typo>
                </Box>
                <Box pt={2} textAlign="-webkit-center">
                  <Button
                    style={{ fontSize: 12 }}
                    onClick={() =>
                      showDialog(
                        <Box pl={5} pr={5}>
                          <Typo variant="body2">{i.eventDetail}</Typo>
                          <Typo variant="body2">{i.eventDetail}</Typo>
                          <Typo variant="body2">{i.eventDetail}</Typo>
                        </Box>
                      )
                    }
                  >
                    See More
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box textAlign="center" pb={8}>
        <Typo variant="h6">Contact Details</Typo>
        <hr className={classes.underline} />
        <Box>
          <Typo variant="body2" gutterBottom>
            <b>Name: </b> {contactDetails.name}
          </Typo>
        </Box>
        <Typo variant="body2">
          <b>Phone: </b>
          {contactDetails.phone}
        </Typo>
      </Box>
    </Box>
  );
};

export default SocietyEvents;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    underline: {
      width: 85,
      border: `1px solid ${THEME_PALETTE.secondary.main}`,
    },
  })
);
