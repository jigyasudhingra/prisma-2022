import { useMediaQuery as muiUseMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { get } from 'lodash';

// eslint-disable-next-line import/prefer-default-export
export const useMediaQuery = () => {
  const theme = useTheme();
  const isDeviceSm = muiUseMediaQuery(theme.breakpoints.down('sm'));
  const isDeviceLg = muiUseMediaQuery(theme.breakpoints.up('md'));
  const isDeviceMd = !isDeviceLg;
  const isIE = !!get(document, 'documentMode');
  return { isDeviceSm, isIE, isDeviceLg, isDeviceMd };
};
