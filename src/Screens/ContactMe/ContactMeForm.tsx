import {
  alpha,
  Box,
  Button,
  createStyles,
  FormControlLabel,
  LinearProgress,
  makeStyles,
  Radio,
  RadioGroup,
  TextField,
  Theme,
} from '@material-ui/core';
import { useMediaQuery } from 'Hooks/useMediaQuery';
import React, { useContext, useEffect, useState } from 'react';
import { THEME_PALETTE } from 'Theme/themeConstants';
import '../../App.css';
import { useSnackbar } from 'notistack';
import { storage } from 'firebase-config';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import Typo from 'Components/Typo';
import { AppDialogContext } from 'Contexts/AppDialogContext';
import useAsyncTask from 'Hooks/useAsyncTask';
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
  name: string | undefined;
  email: string | undefined;
  phone: number | undefined;
  collegeName?: string;
  fromSRM: boolean | undefined;
  imageURL: string | undefined;
  paymentID?: string;
}

const ContactMeForm: React.FC = () => {
  const classes = useStyles();
  const { isDeviceSm } = useMediaQuery();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [razorpayError, setRazorpayError] = useState<string>('');
  const [razorpaySuccess, setRazorpaySuccess] = useState<boolean>(false);
  const [razorpayPaymentID, setRazorpayPaymentID] = useState('');
  const [formDetails, setFormDetails] = useState<FormDetails>();
  const [fromSRM, setFromSRM] = useState<boolean>(false);
  const [file, setFile] = useState<any>('');
  const [progress, setProgress] = useState(0);
  const [imageURL, setImageURL] = useState('');
  const { showDialog } = useContext(AppDialogContext);

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
          setRazorpayPaymentID(response.razorpay_payment_id);
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

  useEffect(() => {
    const tempForm = {
      name: formDetails?.name,
      email: formDetails?.email,
      fromSRM: formDetails?.fromSRM,
      phone: formDetails?.phone,
      imageURL: formDetails?.imageURL,
      paymentId: razorpayPaymentID,
    };
    setFormDetails(tempForm);
  }, [razorpaySuccess]);

  const createUser = async (event: any) => {
    event.preventDefault();
    const formData: FormDetails = {
      name: event.target[0].value,
      fromSRM,
      email: event.target[3].value,
      // collegName: 'SRM',
      phone: event.target[5].value,
      imageURL,
      // paymentId: '',
    };
    setFormDetails(formData);
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
  const handleUploadId = async () => {
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
          setImageURL(downloadURL);
        });
      }
    );
  };
  console.log('Hello');
  const handleUploadTask = useAsyncTask(handleUploadId);

  useEffect(() => {
    if (file !== '') {
      handleUploadTask.run({});
    }
  }, [file]);
  useEffect(() => {
    if (imageURL !== '') {
      setProgress(0);
    }
  }, [imageURL]);

  const handleIdChange = async (e: any) => {
    e.preventDefault();
    if (e.target.files) {
      await setFile(e.target.files[0]);
    }
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
            <Box
              mt={2.5}
              key="fromSRM"
              display="flex"
              flexDirection="row"
              alignItems="center"
            >
              <Box>
                <Typo>Are you from SRM: </Typo>
              </Box>
              <Box pl={3}>
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
            <Box
              display={!isDeviceSm && 'flex'}
              flexDirection={!isDeviceSm && 'row'}
              mt={3}
              alignItems="center"
              // style={{ backgroundColor: THEME_PALETTE.primary.main }}
            >
              <Box width="100%" pb={isDeviceSm ? 2 : 0}>
                <Typo style={{ textAlignLast: isDeviceSm ? 'center' : 'left' }}>
                  Upload your college ID:
                </Typo>
              </Box>
              {/* <Box
                display="flex"
                flexDirection="row"
                style={{ backgroundColor: THEME_PALETTE.primary.main }}
                alignItems="center"
                width="100%"
              > */}
              {imageURL !== '' ? (
                <Box width="100%">
                  <img
                    // src="https://firebasestorage.googleapis.com/v0/b/prisma-2k22.appspot.com/o/files%2FLinkedIn%20Banner%20-%20Jigyasu%20Dhingra.png?alt=media&token=0d951620-e0bf-4e67-81eb-476ef902b518"
                    src={imageURL}
                    width={50}
                    alt="uplaoded-college-id"
                  />
                </Box>
              ) : (
                <label htmlFor="upload-photo" style={{ width: '100%' }}>
                  <input
                    style={{ display: 'none' }}
                    id="upload-photo"
                    name="upload-photo"
                    type="file"
                    accept="image/*"
                    onChange={handleIdChange}
                  />
                  {/* <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    p={2}
                  >
                    <Box width="100%">
                      <Icon
                        icon="akar-icons:cloud-upload"
                        color="#a4a4a4"
                        width={20}
                      />
                    </Box>
                  </Box> */}

                  <Box
                    border={`1px dashed ${THEME_PALETTE.secondary.main} `}
                    width={50}
                    height={50}
                  >
                    {progress !== 0 ? (
                      <LinearProgress
                        color="secondary"
                        className={classes.loader}
                      />
                    ) : (
                      <Box
                        border={`1px dashed ${THEME_PALETTE.secondary.main}`}
                        borderRadius={50}
                        color={THEME_PALETTE.secondary.main}
                        width={18}
                        mt={14 / 8}
                      >
                        +
                      </Box>
                    )}
                  </Box>
                </label>
              )}
            </Box>
            <Box mt={3} pr={20 / 8}>
              <Button
                fullWidth
                variant="outlined"
                color="primary"
                type="submit"
              >
                {!fromSRM ? 'Pay Rs. 300' : 'Register'}
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
    loader: {
      transform: 'translateY(-50%)',
      marginTop: '50%',
      marginBottom: '50%',
    },
  })
);
