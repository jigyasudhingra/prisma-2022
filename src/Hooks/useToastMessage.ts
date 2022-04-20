import { SnackbarOrigin } from '@material-ui/core';
import { get } from 'lodash';
import { useSnackbar, VariantType } from 'notistack';

const SUCCESS_TOAST_MESSAGE = 'Success';
const ERROR_TOAST_MESSAGE = 'Something went wrong';

/**
 * A hook for toast handling
 * @returns a function
 * @example
 * const withToast = useToastMessage(); // import useToastMessage first
 * const submitForm = async (formData: any) =>  await withToast(async () => {
 *      // do your async function and throw the error
 *  },
 *  {
 *      showApiErrorMsg: false, // without this flag, error message from api is displayed in toast
 *      successToastMessage: 'Form submitted successfully',
 *      errorToastMessage: 'Error submitting form',
 *  });
 */
export default () => {
  const { enqueueSnackbar } = useSnackbar();

  const withToast = async <T = any>(
    action: () => any,
    toastConfig: WithToastConfig = {}
  ): Promise<T> => {
    const {
      errorToastMessage,
      anchorOrigin,
      variant = 'success',
    } = toastConfig;
    try {
      const res = await action();
      enqueueSnackbar(
        toastConfig.successToastMessage || SUCCESS_TOAST_MESSAGE,
        {
          variant,
          anchorOrigin,
        }
      );
      return res;
    } catch (error) {
      const errortext =
        typeof errorToastMessage === 'string'
          ? errorToastMessage
          : errorToastMessage?.(error);
      console.log('error', errortext, typeof errorToastMessage === 'string');
      const msg =
        toastConfig.showApiErrorMsg === false
          ? errortext || ERROR_TOAST_MESSAGE
          : get(error, 'response.data.error.message');
      enqueueSnackbar(msg, {
        variant: 'error',
        anchorOrigin: toastConfig.anchorOrigin,
      });
      throw error;
    }
  };

  return withToast;
};

export interface WithToastConfig {
  successToastMessage?: string;
  errorToastMessage?: string | ((error: any) => string);
  showApiErrorMsg?: boolean;
  variant?: VariantType;
  anchorOrigin?: SnackbarOrigin;
}
