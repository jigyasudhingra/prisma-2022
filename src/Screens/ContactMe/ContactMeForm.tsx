import {
  alpha,
  Box,
  Button,
  createStyles,
  FormControlLabel,
  makeStyles,
  Radio,
  RadioGroup,
  TextField,
  Theme,
} from '@material-ui/core';
import { useMediaQuery } from 'Hooks/useMediaQuery';
import React, { useEffect, useState } from 'react';
import { THEME_PALETTE } from 'Theme/themeConstants';
import '../../App.css';
import { useSnackbar } from 'notistack';
import { storage } from 'firebase-config';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { userSchema } from './UserValidation';

const TextFieldInfo: {
  label: string;
  id: string;
}[] = [
  {
    label: 'Email Address',
    id: 'email-address',
  },
  {
    label: 'College Name',
    id: 'college-name',
  },
  {
    label: 'Phone Number',
    id: 'phone-number',
  },
];
declare global {
  interface Window {
    Razorpay: Window | any;
  }
}
export interface FormDetails {
  name: string;
  email: string;
  phone: number;
  collegeName: string;
  fromSRM: boolean;
}

const ContactMeForm: React.FC = () => {
  const classes = useStyles();
  const { isDeviceSm } = useMediaQuery();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [razorpayError, setRazorpayError] = useState<string>('');
  const [razorpaySuccess, setRazorpaySuccess] = useState<boolean>(false);
  const [formDetails, setFormDetails] = useState<FormDetails>();
  const [fromSRM, setFromSRM] = useState<boolean>(false);
  const [file, setFile] = useState<any>('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (razorpaySuccess !== false) {
      const action = (key: any) => (
        <Button
          onClick={() => {
            closeSnackbar(key);
          }}
        >
          Dismiss
        </Button>
      );
      enqueueSnackbar('Payment Successful', {
        variant: 'success',
        anchorOrigin: { horizontal: 'center', vertical: 'bottom' },
        autoHideDuration: null,
        action,
      });
    } else if (razorpayError !== '') {
      const action = (key: any) => (
        <Button
          onClick={() => {
            closeSnackbar(key);
          }}
        >
          Dismiss
        </Button>
      );
      enqueueSnackbar('Checkout failed', {
        variant: 'error',
        anchorOrigin: { horizontal: 'center', vertical: 'bottom' },
        autoHideDuration: null,
        action,
      });
    }
  }, [razorpayError, razorpaySuccess]);

  const handleClick = (formData: any) => {
    const options = {
      key: 'rzp_test_6pc6uApcFYOURV',
      amount: 300 * 100,
      currency: 'INR',
      name: 'SRM University, Sonepat, Haryana',
      description: 'Test Transaction',
      // image: PRISMA_LOGO,
      // eslint-disable-next-line camelcase
      handler(response: { razorpay_payment_id: string }) {
        if (response.razorpay_payment_id) {
          formData.paymentId = response.razorpay_payment_id;
          setRazorpaySuccess(true);
        }
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone,
      },
      notes: {
        address: 'SRM University, Sonepat, Haryana',
      },
      theme: {
        color: '#3399cc',
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.on('payment.failed', function (response: any) {
      setRazorpayError(
        `1. ${response.error.reason}2. ${response.error.source} 3. ${response.error.description} 4. ${response.error.step} 5. ${response.error.code} 6. ${response.error.metadata.order_id} 7. ${response.error.metadata.payment_id}`
      );
    });

    // document.getElementById('rzp-button')!.onclick = function (e) {
    //   rzp1.open();
    //   e.preventDefault();
    // };
    rzp1.open();
  };

  const createUser = async (event: any) => {
    event.preventDefault();
    const formData = {
      name: event.target[0].value,
      fromSRM,
      email: event.target[3].value,
      phone: event.target[5].value,
      paymentId: '',
    };
    const isValid = await userSchema.isValid(formData);
    // const res = await handleClick(formData);
    console.log(formData, isValid);
    return isValid;
  };

  const handleCheckBox = (e: any) => {
    if (e?.target.value === 'yes') setFromSRM(true);
  };
  const printChange = (e: any) => {
    console.log(e.target);
  };
  const handleIdChange = (e: any) => {
    e.preventDefault();
    if (e.target.files) setFile(e.target.files[0]);
  };
  const handleUploadId = () => {
    //
    if (!file) return;
    const sotrageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
        });
      }
    );
  };
  return (
    <Box
      pt={4}
      pl={isDeviceSm ? 4 : 5}
      pr={isDeviceSm ? 4 : 5}
      pb={4}
      className="subHeading"
    >
      <Box className={classes.background} width="90%">
        <Box pl={isDeviceSm ? 4 : 6} pr={isDeviceSm ? 4 : 6} pt={3} pb={4}>
          <form onSubmit={createUser} onChange={printChange}>
            <Box mt={2.5} key="name">
              <TextField
                fullWidth
                id="name"
                label="Full Name"
                variant="filled"
                className={classes.textField}
                InputProps={{
                  disableUnderline: true,
                }}
              />
            </Box>
            <Box mt={2.5} key="fromSRM">
              <RadioGroup row name="fromSRM" onChange={handleCheckBox}>
                <FormControlLabel
                  value="yes"
                  control={<Radio />}
                  label="Yes"
                  style={{ color: THEME_PALETTE.text.primary }}
                />
                <FormControlLabel
                  value="no"
                  control={<Radio />}
                  label="No"
                  style={{ color: THEME_PALETTE.text.primary }}
                />
              </RadioGroup>
            </Box>
            {TextFieldInfo.map((t, ind) => (
              <Box mt={2.5} key={t.id}>
                <TextField
                  fullWidth
                  id={t.id}
                  label={t.label}
                  variant="filled"
                  className={classes.textField}
                  InputProps={{
                    disableUnderline: true,
                  }}
                />
              </Box>
            ))}
            <Box mt={3} alignItems="center">
              <label htmlFor="upload-photo">
                <input
                  style={{ display: 'none' }}
                  id="upload-photo"
                  name="upload-photo"
                  type="file"
                  accept="image/*"
                  onChange={handleIdChange}
                />

                <Box>+</Box>
                {/* <Box>
              </Box> */}
                <Button onClick={handleUploadId}>Upload</Button>
                <Box>{progress}</Box>
              </label>
            </Box>
            <Box mt={3}>
              <Button
                fullWidth
                variant="outlined"
                color="primary"
                type="submit"
              >
                Pay Rs. 300
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactMeForm;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textField: {
      '& label': {
        color: '#3e3e3e',
        fontSize: 14,
      },
      '& label.Mui-focused': {
        color: THEME_PALETTE.text.primary,
      },
      '& .MuiInputBase-input': {
        // position: 'relative',
        backgroundColor: THEME_PALETTE.primary.main,
        '&:focus': {
          boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
          borderColor: theme.palette.primary.main,
        },
      },
      '& .MuiFilledInput-multiline': {
        padding: 0,
      },
      '& .MuiFilledInput-inputMultiline': {
        paddingTop: 27,
        paddingLeft: 13,
      },
    },
    background: {
      backgroundColor: THEME_PALETTE.others.main,
    },
    verticalLine: {
      borderLeft: `1px solid #F4A203`,
      height: 75,
    },
    verticalLineText: {
      color: '#F4A203',
      letterSpacing: 1.1,
    },
  })
);
