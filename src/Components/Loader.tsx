import React, { FC } from 'react';
import { alpha, Box, makeStyles, Theme } from '@material-ui/core';
import 'animate.css';
import '../App.css';
import LOGO from '../Assets/PrismaLogo.png';

export interface LoaderProps {
  overlayed?: boolean;
}

const Loader: FC<LoaderProps> = (props) => {
  const { overlayed } = props;
  const classes = useStyles({});

  return (
    <Box
      className={overlayed ? classes.overlayed : ''}
      display="flex"
      width="100%"
      justifyContent="center"
    >
      <Box className="blob" textAlign="center">
        <img src={LOGO} alt="logo" width="30%" />
      </Box>
    </Box>
  );
};

const useStyles = makeStyles<Theme, any>((theme) => ({
  overlayed: {
    position: 'fixed',
    top: 0,
    left: 0,
    justifyContent: 'center',
    backgroundColor: alpha('#0a192f', 1),
    // backdropFilter: 'blur(3px)',
    zIndex: theme.zIndex.appBar + 1000,
    height: '100vh',
    width: `100vw`,
    display: 'flex',
    alignItems: 'center',
  },
}));

export default Loader;
