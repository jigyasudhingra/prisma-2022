import {
  AppBar,
  Box,
  createStyles,
  makeStyles,
  Slide,
  useScrollTrigger,
} from '@material-ui/core';
import { useMediaQuery } from 'Hooks/useMediaQuery';
import React from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';
import { THEME_PALETTE } from 'Theme/themeConstants';
import LOGO from '../../Assets/PrismaLogo.png';

const NAVIGATION_LINKS: { id: string; url: string; label: string }[] = [
  {
    id: 'home',
    url: '#home',
    label: 'Home',
  },
  {
    id: 'events',
    url: '#events',
    label: 'Events',
  },
  {
    id: 'events-schedule',
    url: '#events-schedule',
    label: 'Events Schedule',
  },
  {
    id: 'teams',
    url: '#teams',
    label: 'Teams',
  },
  {
    id: 'register',
    url: '/register',
    label: 'Contact',
  },
];

interface Props {
  // eslint-disable-next-line react/require-default-props
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const NavigationMenu: React.FC = () => {
  const classes = useStyles();
  const { isDeviceSm } = useMediaQuery();
  return (
    <HideOnScroll>
      <AppBar color="transparent" className={classes.header} elevation={0}>
        <Box
          display="flex"
          flexDirection="row"
          height={60}
          width="auto"
          alignItems="center"
          pl={!isDeviceSm ? 9 : 3}
          pr={!isDeviceSm ? 9 : 3}
          justifyContent="center"
        >
          {!isDeviceSm && (
            <Box alignItems="left" width="100%">
              <Box>
                <img width={70} src={LOGO} alt="website-logo" />
              </Box>
            </Box>
          )}
          <Box
            alignItems={!isDeviceSm && 'center'}
            width="100%"
            // flexBasis={!isDeviceSm && 'content'}
          >
            <Box display="flex" flexDirection="row" width="100%">
              {NAVIGATION_LINKS.map((nl) => (
                <Box width="100%" textAlign="center" key={nl.id}>
                  <Link
                    smooth
                    to={nl.url}
                    className={
                      !isDeviceSm ? classes.navMenu : classes.mobileMenu
                    }
                    // activeClassName="selected"
                    // activeStyle={{ color: THEME_PALETTE.secondary.main }}
                  >
                    {nl.label}
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </AppBar>
    </HideOnScroll>
  );
};

export default NavigationMenu;

const useStyles = makeStyles(() =>
  createStyles({
    navMenu: {
      // marginLeft: 80,
      // paddingLeft: 130,
      textDecoration: 'none ! important ',
      color: THEME_PALETTE.text.primary,
      fontFamily: 'poppins',
      '&:hover': {
        color: THEME_PALETTE.secondary.main,
      },
    },
    mobileMenu: {
      textDecoration: 'none ! important ',
      color: THEME_PALETTE.text.primary,
      fontFamily: 'poppins',
      fontSize: 14,
      '&:hover': {
        color: THEME_PALETTE.secondary.main,
      },
    },
    activeMenu: {
      color: THEME_PALETTE.secondary.main,
    },
    header: {
      '-webkit-backdrop-filter': `blur(3px)`, // For Safari
      backdropFilter: `blur(3px)`,
    },
  })
);
