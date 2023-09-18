import * as yup from 'yup'

const emailValidator = () => {
  return yup.object().shape({
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),
    name: yup
      .string()
      .required('The name is required')
      .min(5, 'Minimum 5 characters'),
    lastName: yup.string(),
    message: yup.string().required('A message is required'),
  })
}
export default emailValidator
