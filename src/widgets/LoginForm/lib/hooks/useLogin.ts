import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import SHA256 from 'crypto-js/sha256';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { addToken } from 'app/store/slices/authTokenSlice';
import { loginApi } from 'widgets/LoginForm/api/loginApi';
import { AppDispatch } from 'app/store/store';
import { useAppDispatch } from 'app/store/hooks';
import { HEADER_NAV_AUTH_USER } from 'app/router/constans';
import { TFormField } from '../types';
import { registrationSchema } from '../validation';

type TErrorResponse = {
  status: number;
  statusText: string;
  headers: object;
  data: {
    errorField: 'email' | 'password';
    errorText: string;
  };
};

export const useLogin = () => {
  const location = useLocation();
  const {
    control,
    handleSubmit,
    setError,
    formState: { isSubmitting },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(registrationSchema),
    defaultValues: { email: location.state || '' },
  });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = async (data: TFormField, dispatch: AppDispatch) => {
    const hashPassword = SHA256(data.password).toString();
    const formData = {
      ...data,
      password: hashPassword,
    };

    try {
      const response = await loginApi(formData);

      const { status, data: responseData } = response;

      if (status === 200) {
        dispatch(addToken(responseData));
        navigate(HEADER_NAV_AUTH_USER.robotGeneration.path, { replace: true });
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
    onSubmit: (data: TFormField) => onSubmit(data, dispatch),
  };
};
