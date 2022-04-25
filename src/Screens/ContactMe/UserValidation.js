import * as yup from 'yup';

const FILE_SIZE = 1024 * 10 * 1024;
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png'];
const emails = [
  'jigyasudhingra@gmail.com',
  'jigyasu.dhingra19@stu.srmuniversity.ac.in',
];
// eslint-disable-next-line import/prefer-default-export
export const userSchema = yup.object().shape({
  name: yup.string().required('Name is required'),

  email: yup
    .string()
    .required('Email-id is required')
    .when('fromSRM', {
      is: 'yes',
      then: yup
        .string()
        .oneOf(emails, 'Enter valid college email-id')
        .matches(
          new RegExp(
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(stu.srmuniversity.ac.in|srmuniversity.ac.in)$/
          ),
          'Please enter college email-id'
        ),
    })
    .matches(new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}'), 'Enter valid email-id'),

  fromSRM: yup
    .string()
    .oneOf(['yes', 'no'])
    .required('Please choose one of them'),

  phone: yup
    .string()
    .length(10, 'Phone number must consist of 10 digits')
    .required('Phone number is required'),

  collegeName: yup.string().when('fromSRM', {
    is: 'no',
    then: yup.string().required('College name is required'),
  }),
});
