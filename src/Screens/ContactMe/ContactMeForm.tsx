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
import { useFormik } from 'formik';
import clsx from 'clsx';
import Loader from 'Components/Loader';
import EntriesDataService from '../../entries-service';
import { userSchema } from './UserValidation';
import emailjs from 'emailjs-com';
import QRCode from "qrcode.react";
import TICKET_BANNER from '../../Assets/TicketBanner.png';

declare global {
  interface Window {
    Razorpay: Window | any;
  }
}
export interface FormDetails {
  name: string | undefined;
  email: string | undefined;
  phone: number | undefined;
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
  const [fromSRM, setFromSRM] = useState<boolean>(true);
  const [file, setFile] = useState<any>('');
  const [progress, setProgress] = useState(0);
  const [imageURL, setImageURL] = useState('');
  const [submitText, setSubmitText] = useState('Register');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [paymentId, setPaymentId] = useState('');
  const { showDialog } = useContext(AppDialogContext);
  const [toSend, setToSend] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    idURL: '', 
  });
  
  useEffect(() => {
    emailjs.send(
      'service_mpfaiky',
      'template_p8f1t5h',
      toSend,
      'oKkYBnqrPpHZWXvyy'
    );

  }, [toSend]);

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

  const handleClick = async (formData: any) => {
    const options = {
      key: 'rzp_live_y7aE4rLT5WUDo0',
      amount: 450 * 100,
      currency: 'INR',
      name: 'SRM University, Sonepat, Haryana',
      description: 'University Fest',
      // image: PRISMA_LOGO,
      // eslint-disable-next-line camelcase
      handler(response: { razorpay_payment_id: string }) {
        if (response.razorpay_payment_id) {
          setRazorpaySuccess(true);
          setPaymentId(response.razorpay_payment_id);
          // setRazorpayPaymentID(response.razorpay_payment_id);
        }
      },
      prefill: {
        name: formData.values.name,
        email: formData.values.email,
        contact: formData.values.phone,
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
  const paymentHandler = useAsyncTask(handleClick);

  useEffect(() => {
    if (paymentId !== '') saveHandlerRun.run({});
    formik.setValues(formik.initialValues);
    setImageURL('');
  }, [paymentId]);

  const handleCheckBox = (e: any) => {
    formik.setFieldValue('fromSRM', e?.target.value);
    if (e?.target.value === 'yes') setFromSRM(true);
    if (e?.target.value === 'no') setFromSRM(false);
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

  const handleUploadTask = useAsyncTask(handleUploadId);

  useEffect(() => {
    if (file !== '') {
      console.log(file.size);
      handleUploadTask.run({});
    }
  }, [file]);

  useEffect(() => {
    if (imageURL !== '') {
      setProgress(0);
    }
  }, [imageURL]);

  useEffect(() => {
    if (fromSRM === true) setSubmitText('Register');
    if (fromSRM === false) setSubmitText('Pay Rs. 400');
  }, [fromSRM]);

  const handleIdChange = async (e: any) => {
    e.preventDefault();
    if (e.target.files) {
      // console.log(e.targetfiels[0]);
      // formik.values.uploadPhoto = e.target.files[0];
      await setFile(e.target.files[0]);
    }
  };

  useEffect(() => {
    if (imageURL !== '') formik.setFieldValue('imageURL', imageURL);
  }, [imageURL]);

  const saveToFirebase = async () => {
    const res = await EntriesDataService.addEntry({
      ...formik.values,
      paymentId,
    });
    showDialog(
      <Box>
        <Box>
          <Typo
            variant="h5"
            weight="bold"
            style={{ color: `${THEME_PALETTE.primary.main}` }}
          >
            Congratulations! Your Registration is Successful.
          </Typo>
        </Box>
        <Box pt={3}>
          <img src={TICKET_BANNER} alt="ticket-banner" style={{width: "100%", height: 'auto'}}/>
        </Box>
        {
          !fromSRM ? (<Box pt={3} style={{textAlignLast: 'center', textAlign: '-webkit-center' as any}}>
          <QRCode 
          value={paymentId}
          size={200}
          level={"H"}
          includeMargin
          />
        </Box>) : null
        }
        <Box mt={3}>
          <Typo variant="body2" gutterBottom>
            <b>
              YOUR PAYMENT DETAILS:-
            </b>
          </Typo>
          <Typo variant="body2" gutterBottom>
            {formik.values.name && `Name: ${formik.values.name}`}
          </Typo>
          <Typo variant="body2" gutterBottom>
            {formik.values.fromSRM &&
              `Are you from SRM University: ${formik.values.fromSRM}`}
          </Typo>
          <Typo variant="body2" gutterBottom>
            {formik.values.email && `Email-id: ${formik.values.email}`}
          </Typo>
          <Typo variant="body2" gutterBottom>
            {formik.values.phone && `Phone Number: ${formik.values.phone}`}
          </Typo>
          <Typo variant="body2" gutterBottom>
            {paymentId && `Payment Id: ${paymentId}`}
          </Typo>
        </Box>
        <Box mt={3}>
          <Typo variant='body2'>
          <b>
            
            TERMS & CONDITIONS:
            </b>
          <br></br>
          <br></br>
        1. ALL THE COVID GUIDELINES SHOULD BE STRICTLY FOLLOWED: <br></br>
•	MASK IS MANDATOR.Y<br></br>
•	THE TICKET BEARER SHOULD BE FULLY VACCINATED.<br></br>
•	SOCIAL DISTANCING SHOULD BE FOLLOWED.<br></br>

2.<b> THE GATES WILL CLOSED AT 6PM SHARP, NO ENTRY WILL BE GIVEN AFTER THAT.</b><br></br>
3.<b> THE DOWNLOADED PASS WILL BE CHECKED AT THE ENTRY GATE.</b><br></br>
4. ENTRY WILL NOT BE GIVEN IF THE TICKET BEARER COMES WITHOUT AN OFFICIAL ID AND THE PASS.<br></br>

5. IF A PERSON LEAVES THE COLLEGE PREMISES DURING THE EVENT, THEY WILL NOT BE ALLOWED TO ENTER THE PREMISES AGAIN.<br></br>

6. USE OR POSSESSION OF ALCOHOL AND ANY KIND OF DRUG IS STRICTLY PROHIBITED.<br></br>

7. POSESSION OF ANY HARMFUL OBJECT OR WEAPON IS STRICTLY PROHIBITED.<br></br>

8. THE UNIVERSITY HAS FULL AUTHORITY TO BANISH A PERSON FROM COLLEGE PREMISES IN CASE OF BAD BEHAVIOUR.<br></br>

9. THE PASS BEARER IS RESPONSIBLE FOR THEIR OWN BELONGINGS.<br></br>

10. PERSONAL FOOD ITEMS OR BEVERAGES ARE NOT ALLOWED.<br></br>

11. THE TICKET AMOUNT IS REFUNDABLE IN CASE OF THE EVENT CANCELLATION.<br></br>
          </Typo>
          
        </Box>
      </Box>, 
      {
        isActionCloseButton: false,
        actionsChildren: (
                            <Box
                            width="100%"
                            alignSelf="center"
                            style={{ textAlignLast: 'center' }}
                            >
                              <Button onClick={() => {window.print()}}>
                                Print
                              </Button>
                            </Box>
                          ),
      }
    );
  };

  const saveHandlerRun = useAsyncTask(saveToFirebase);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '' as any,
      fromSRM: false,
      imageURL: '',
    },
    onSubmit: (values) => {
      console.log(values);
      setIsLoading(true);
      setToSend({
        name: values.name,
        email: values.email,
        phoneNumber: values.phone,
        idURL: imageURL,
      })
      if (fromSRM) {
        saveHandlerRun.run({});
        formik.setValues(formik.initialValues);
        setImageURL('');
      }
      if (!fromSRM) paymentHandler.run({ values });
      setIsLoading(false);
    },
    validationSchema: userSchema,
  });
  const getAllFieldsHandler = async () => {
    const res = await EntriesDataService.getAllEntries();
    console.log(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  // getAllFieldsHandler();
  return (
    <Box
      pt={4}
      pl={isDeviceSm ? 4 : 5}
      pr={isDeviceSm ? 4 : 5}
      pb={4}
      className="subHeading"
    >
      {!isLoading ? (
        <Box className={classes.background} width="90%">
          <Box pl={isDeviceSm ? 4 : 6} pr={isDeviceSm ? 4 : 6} pt={3} pb={4}>
            <form onSubmit={formik.handleSubmit}>
              <Box mt={2.5} key="name">
                <TextField
                  fullWidth
                  id="name"
                  label="Full Name"
                  variant="filled"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  className={classes.textField}
                  InputProps={{
                    disableUnderline: true,
                  }}
                  autoComplete="off"
                  helperText={formik.errors.name ? formik.errors.name : ''}
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
                  <RadioGroup
                    row
                    name="fromSRM"
                    id="fromSRM"
                    value={formik.values.fromSRM}
                    onChange={handleCheckBox}
                    defaultChecked
                    defaultValue="no"
                  >
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
              <Box mt={2.5} key="email">
                <TextField
                  fullWidth
                  id="email"
                  label="Enter email address"
                  variant="filled"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  className={classes.textField}
                  InputProps={{
                    disableUnderline: true,
                  }}
                  helperText={formik.errors.email ? formik.errors.email : ''}
                  autoComplete="off"
                />
              </Box>
              <Box mt={2.5} key="phone">
                <TextField
                  fullWidth
                  type="number"
                  id="phone"
                  label="Enter phone number"
                  variant="filled"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                  className={clsx(classes.textField, classes.inputNumber)}
                  InputProps={{
                    disableUnderline: true,
                  }}
                  helperText={formik.errors.phone ? formik.errors.phone : ''}
                  autoComplete="off"
                />
              </Box>
              <Box
                display={!isDeviceSm && 'flex'}
                flexDirection={!isDeviceSm && 'row'}
                mt={3}
                alignItems="center"
              >
                <Box width="100%" pb={isDeviceSm ? 2 : 0}>
                  <Typo
                    style={{
                      textAlignLast: isDeviceSm ? 'center' : 'left',
                      textAlign: 'left'
                    }}
                  >
                    { fromSRM ? 'Upload Your Institution ID : ': 'Upload Your ID (Adhaar Card, PAN Card, or any other valid ID): '}
                  </Typo>
                  {!imageURL && (
                    <Typo
                      variant="caption"
                      color="secondary"
                      style={{ float: !isDeviceSm && ('left' as any) }}
                    >
                      Required
                    </Typo>
                  )}
                </Box>
                {imageURL !== '' ? (
                  <Box width="100%">
                    <img src={imageURL} height={70} alt="uplaoded-id" />
                  </Box>
                ) : (
                  <label
                    htmlFor="upload-photo"
                    style={{
                      width: '100%',
                      paddingLeft: !isDeviceSm ? 10 : 0,
                      textAlign: !isDeviceSm
                        ? ('-webkit-left' as any)
                        : '-webkit-center',
                    }}
                  >
                    <input
                      style={{ display: 'none',  }}
                      id="upload-photo"
                      name="upload-photo"
                      type="file"
                      accept="image/*"
                      value={formik.values.imageURL}
                      onChange={handleIdChange}
                    />
                    <Box
                      border={`1px dashed ${THEME_PALETTE.secondary.main} `}
                      width={50}
                      height={50}
                      style={{ textAlign: '-webkit-center' as any }}
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
              <Box mt={3.5}>
                <Button
                  fullWidth
                  variant="outlined"
                  color="primary"
                  type="submit"
                  disabled={!formik.dirty || !formik.isValid || !imageURL}
                >
                  {submitText}
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      ) : (
        <Loader overlayed />
      )}
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
      '& .MuiFormHelperText-contained': {
        marginLeft: 0,
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
    inputNumber: {
      '& input[type=number]': {
        '-moz-appearance': 'textfield',
      },
      '& input[type=number]::-webkit-outer-spin-button': {
        '-webkit-appearance': 'none',
        margin: 0,
      },
      '& input[type=number]::-webkit-inner-spin-button': {
        '-webkit-appearance': 'none',
        margin: 0,
      },
    },
  })
);
