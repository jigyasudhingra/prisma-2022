import { Box, createStyles, makeStyles } from '@material-ui/core';
import React, { FC } from 'react';
import NavigationMenu from 'Screens/HomeScreen/NavigationMenu';
import { THEME_PALETTE } from 'Theme/themeConstants';

const SponsorsPage: React.FC = () => {
    const classes = useStyles();
    return (
        <Box>
        <NavigationMenu />
        <Box className={classes.background} p={10}>
            Hello
        </Box>
        </Box>
    );
}

export default SponsorsPage;

const useStyles = makeStyles(() =>
  createStyles({
    background: {
        backgroundColor: THEME_PALETTE.others.main,
        color: 'white',
    }
  })
);
