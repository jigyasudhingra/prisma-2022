import React, { FC } from 'react';
import { SnackbarProvider } from 'notistack';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { THEME_PALETTE } from 'Theme/themeConstants';

const AppToastProvider: FC = (props) => {
  const { children } = props;
  const classes = useStyles();
  return (
    <SnackbarProvider
      maxSnack={3}
      classes={{ variantSuccess: classes.success, variantInfo: classes.info }}
    >
      {children}
    </SnackbarProvider>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    success: {
      background: `${THEME_PALETTE.primary.main} !important`,
      border: '1px solid white',
    },
    info: {
      background: `${THEME_PALETTE.others.main} !important`,
    },
  })
);

export default AppToastProvider;
