import { Box, createStyles, makeStyles, Theme } from '@material-ui/core';
import Typo from 'Components/Typo';
import React from 'react';
import { THEME_PALETTE } from 'Theme/themeConstants';

const Socials = () => {
  const classes = useStyles();
  return (
    <Box marginTop={5} className="subHeading" paddingTop={166 / 8}>
      <Box display="flex" width="100%">
        <Box width="100%" />
        <Box width="100%">
          <Box className={classes.verticalLine} />
        </Box>
      </Box>
      <Box marginTop={2}>
        <Typo variant="body2" className={classes.verticalText}>
          <a
            href="mailto:jigyasudhingra@gmail.com"
            style={{ textDecoration: 'none' }}
            className={classes.verticalText}
          >
            jigyasudhingra@gmail.com
          </a>
        </Typo>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    verticalLine: {
      borderLeft: '1px solid ' + `${THEME_PALETTE.secondary.main}`,
      height: 75,
    },
    verticalText: {
      letterSpacing: 2.6,
      writingMode: 'vertical-lr',
      color: THEME_PALETTE.text.primary,
    },
  })
);
export default Socials;
