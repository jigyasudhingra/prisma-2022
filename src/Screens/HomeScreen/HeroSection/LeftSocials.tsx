import {
  Box,
  createStyles,
  createTheme,
  makeStyles,
  MuiThemeProvider,
  Tooltip,
} from '@material-ui/core';
import React from 'react';
import { THEME_PALETTE } from 'Theme/themeConstants';
import { Icon } from '@iconify/react';

// leetcode, codechef, linkedin, github, instagram, twitter, medium, email

const SOCIAL_ICONS = [
  {
    icon: 'ri:instagram-fill',
    url: 'linkedin.com',
    color: THEME_PALETTE.secondary.main,
    tooltip: 'Github',
  },
  {
    icon: 'ci:facebook',
    url: 'linkedin.com',
    color: 'white',
    tooltip: 'Facebook',
  },
  {
    icon: 'dashicons:whatsapp',
    url: 'linkedin.com',
    color: 'white',
    tooltip: 'Whatsapp',
  },
  {
    icon: 'fluent:mail-20-filled',
    url: 'linkedin.com',
    color: 'white',
    tooltip: 'Mail',
  },
];

const LeftSocials: React.FC = () => {
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
        <Box display="flex" flexDirection="column" alignItems="center">
          {SOCIAL_ICONS.map((m) => (
            <Box key={m.tooltip}>
              <MuiThemeProvider theme={theme}>
                <Tooltip title={m.tooltip} placement="right" arrow>
                  <Icon icon={m.icon} color={m.color} width={20} />
                </Tooltip>
                <Box height={25} />
              </MuiThemeProvider>
            </Box>
          ))}
        </Box>
      </Box>
      <Box display="flex" width="100%">
        <Box width="100%" />
        <Box width="100%">
          <Box className={classes.verticalLine} />
        </Box>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles(() =>
  createStyles({
    verticalLine: {
      borderLeft: `1px solid ${THEME_PALETTE.secondary.main}`,
      height: 75,
    },
  })
);

const theme = createTheme({
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: 12,
        letterSpacing: 1.1,
        // color: THEME_PALETTE.secondary.main,
      },
    },
  },
});

export default LeftSocials;
