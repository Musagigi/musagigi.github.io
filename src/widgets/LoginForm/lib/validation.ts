import * as yup from 'yup';

export const registrationSchema = yup.object().shape({
  email: yup.string().email().required('Поле обязательно к заполнению'),
  password: yup
    .string()
    .min(6, 'Пароль должен содержать минимум 6 символов')
    .required('Поле обязательно к заполнению'),
});
