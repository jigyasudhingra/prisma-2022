import { Box } from '@material-ui/core';
import Typo from 'Components/Typo';
import React from 'react';
// import LocationIcon from '../../../Assets/LocationIcon.png';
// import PhoneIcon from '../../../Assets/PhoneIcon.png';
// import MailIcon from '../../../Assets/EmailIcon.png';

// const contactDetailsInfo: {
//   label: string;
//   data: string;
//   icon: string;
//   id: string;
// }[] = [
//   {
//     label: 'Phone Number',
//     data: '+91 9873219946',
//     icon: PhoneIcon,
//     id: 'phone-number',
//   },
//   {
//     label: 'Email Address',
//     data: 'jigyausdhingra@gmail.com',
//     icon: MailIcon,
//     id: 'email-address',
//   },
//   {
//     label: 'Location',
//     data: 'New Delhi, India',
//     icon: LocationIcon,
//     id: 'location-icon',
//   },
// ];

const ContactDetails = () => {
  return (
    <Box pt={5} pl={5}>
      {/* {contactDetailsInfo.map((info) => (
        <Box display="flex" flexDirection="row" key={info.id} mb={4}>
          <Box alignSelf="center" mx={4}>
            <img src={info.icon} width={23} alt={info.id} />
          </Box>
          <Box>
            <Box>
              <Typo variant="body1" color="textSecondary">
                {info.label}
              </Typo>
              <Typo variant="body2">{info.data}</Typo>
            </Box>
          </Box>
        </Box>
      ))} */}
    </Box>
  );
};

export default ContactDetails;
