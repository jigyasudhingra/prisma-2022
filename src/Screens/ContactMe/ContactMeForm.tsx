import {
  alpha,
  Box,
  Button,
  createStyles,
  makeStyles,
  TextField,
  Theme,
} from '@material-ui/core';
import { useMediaQuery } from 'Hooks/useMediaQuery';
import React from 'react';
import { THEME_PALETTE } from 'Theme/themeConstants';
import '../../App.css';
import { userSchema } from './UserValidation';

const TextFieldInfo: {
  label: string;
  id: string;
  multiline?: boolean;
  maxRows?: number;
  rows?: number;
}[] = [
  {
    label: 'Full Name',
    id: 'first-name',
  },
  {
    label: 'Email Address',
    id: 'email-address',
  },
  {
    label: 'Phone Number',
    id: 'phone-number',
  },
  {
    label: 'Message',
    id: 'message',
    multiline: true,
    maxRows: 5,
    rows: 3,
  },
];
declare global {
  interface Window {
    Razorpay: Window | any;
  }
}
const handleClick = () => {
  const options = {
    key: 'rzp_test_6pc6uApcFYOURV',
    amount: 300 * 100,
    currency: 'INR',
    name: 'SRM University, Sonepat, Haryana',
    description: 'Test Transaction',
    image: 'https://example.com/your_logo',
    handler(response: any) {
      alert(response.razorpay_payment_id);
      alert(response.razorpay_order_id);
      alert(response.razorpay_signature);
    },
    prefill: {
      name: 'Jai Dhingra',
      email: 'jigyasudhingra@gmail.com',
      contact: '9873219946',
    },
    notes: {
      address: 'MusicBot',
    },
    theme: {
      color: '#3399cc',
    },
  };
  const rzp1 = new window.Razorpay(options);
  rzp1.open();
};

const ContactMeForm: React.FC = () => {
  const classes = useStyles();
  const { isDeviceSm } = useMediaQuery();

  const createUser = async (event: any) => {
    event.preventDefault();
    const formData = {
      name: event.target[0].value,
      email: event.target[1].value,
      phone: event.target[2].value,
    };
    const isValid = await userSchema.isValid(formData);
    console.log(isValid);
  };

  return (
    <Box
      pt={4}
      pl={isDeviceSm ? 4 : 15}
      pr={isDeviceSm ? 4 : 5}
      pb={4}
      className="subHeading"
    >
      <Box className={classes.background} width="90%">
        <Box pl={isDeviceSm ? 4 : 6} pr={isDeviceSm ? 4 : 6} pt={3} pb={4}>
          <form onSubmit={createUser}>
            {TextFieldInfo.map((t) => (
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
                  multiline={!!t.multiline}
                  maxRows={t.maxRows ?? 1}
                  minRows={t.rows ?? 1}
                />
              </Box>
            ))}
            <Box mt={3}>
              <Button
                fullWidth
                variant="outlined"
                color="primary"
                type="submit"
                onClick={() => handleClick()}
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
