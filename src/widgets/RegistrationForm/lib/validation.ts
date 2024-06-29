import * as yup from 'yup';

export const registrationSchema = yup.object().shape({
  firstName: yup.string().required('Поле обязательно к заполнению'),
  lastName: yup.string().required('Поле обязательно к заполнению'),
  email: yup.string().email().required('Поле обязательно к заполнению'),
  login: yup.string().required('Поле обязательно к заполнению'),
  password: yup
    .string()
    .min(6, 'Пароль должен содержать минимум 6 символов')
    .required('Поле обязательно к заполнению'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Пароли должны совпадать')
    .required('Поле обязательно к заполнению'),
});