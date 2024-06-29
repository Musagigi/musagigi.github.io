import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import SHA256 from 'crypto-js/sha256';

import { registerApi } from '../../api/registerApi';
import { TFormField } from '../types';
import { registrationSchema } from '../validation';
import { useAppDispatch } from '../../../../app/store/hooks';
import { addUser } from '../../../../app/store/slices/usersDataRegistrSlice';
import { PATH_NOT_AUTH_USER } from '../../../../app/router/constans';
import axios from 'axios';

type TErrorResponse = {
  status: number;
  statusText: string;
  headers: {};
  data: {
    errorField: 'email';
    errorText: string;
  };
};

export const useRegister = () => {
  const {
    control,
    handleSubmit,
    setError,
    formState: { isSubmitting },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(registrationSchema),
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data: TFormField) => {
    const hashPassword = SHA256(data.password).toString();
    const formData = {
      ...data,
      password: hashPassword,
      confirmPassword: hashPassword,
    };

    try {
      const response = await registerApi(formData);
      const { status } = response;

      if (status === 200) {
        const { password, firstName, lastName, email, login } = formData;
        dispatch(addUser({ password, firstName, lastName, email, login }));

        navigate(PATH_NOT_AUTH_USER, {
          state: email,
          replace: true,
        });
      }
    } catch (error: unknown) {
      const responseError = error as TErrorResponse;

      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
        console.log(error);
      } else if (error instanceof Error) {
        console.log(error);
      } else {
        setError(responseError.data.errorField, {
          type: String(responseError.status),
          message: responseError.data.errorText,
        });
      }
    }
  };

  return {
    control,
    isSubmitting,
    handleSubmit,
    onSubmit,
  };
};
