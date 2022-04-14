import { createTheme } from '@material-ui/core/styles';
import { THEME_PALETTE } from './themeConstants';

const { others: otherColors, ...palette } = THEME_PALETTE;

export default createTheme({
  palette,
  typography: {
    fontFamily: 'Poppins',
    fontWeightRegular: 400,
    fontWeightBold: 600,
    h1: {
      fontSize: 75,
    },
    h2: {
      fontSize: 60,
    },
    h3: {
      fontSize: 48,
    },
    h4: {
      fontSize: 34,
    },
    h5: {
      fontSize: 24,
    },
    h6: {
      fontSize: 20,
    },
    subtitle1: {
      fontSize: 16,
    },
    subtitle2: {
      fontSize: 14,
    },
    body1: {
      fontSize: 16,
    },
    body2: {
      fontSize: 14,
    },
    caption: {
      fontSize: 12,
    },
    overline: {
      fontSize: 10,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        fontWeight: 400,
        borderRadius: 3,
      },
      outlinedPrimary: {
        fontWeight: 400,
        borderRadius: 4,
        borderColor: THEME_PALETTE.secondary.main,
        color: '#ffff',
        textTransform: 'capitalize',
        fontSize: 14,
        minWidth: 170,
        height: 45,
        // letterSpacing: 1.1,
        '&:hover': {
          backgroundColor: THEME_PALETTE.secondary.main,
          color: THEME_PALETTE.primary.main,
          // letterSpacing: 1.1,
          borderColor: THEME_PALETTE.secondary.main,
        },
      },
      outlinedSizeLarge: {
        fontSize: 14,
        padding: '4px 42px 4px 42px',
      },
      outlinedSecondary: {},
      containedPrimary: {},
      containedSecondary: {
        backgroundColor: THEME_PALETTE.secondary.main,
        color: THEME_PALETTE.primary.main,
        letterSpacing: 1.1,
        borderColor: THEME_PALETTE.secondary.main,
        borderRadius: 4,
        textTransform: 'capitalize',
        fontSize: 14,
        minWidth: 200,
        '&:hover': {
          letterSpacing: 1.1,
          border: '1px solid',
          borderColor: `${THEME_PALETTE.secondary.main}! important`,
          color: '#ffff',
          backgroundColor: '#050c16b3',
        },
      },
    },
  },
});
