import * as yup from 'yup';

// eslint-disable-next-line import/prefer-default-export
export const userSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup
    .string()
    .required()
    .matches(
      new RegExp(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(stu.srmuniversity.ac.in|domainname.com)$/
      )
    ),
  phone: yup.number().required(),
});
