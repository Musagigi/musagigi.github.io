import axios, { AxiosPromise } from 'axios';
import { TFormField } from '../lib/types';

type TLoginResponse = {
  status: number;
  statusText: string;
  headers: object;
  data: {
    email: string;
    date: string;
    time: string;
  };
  config?: TLoginResponse;
};

export const loginApi = (data: TFormField): AxiosPromise<TLoginResponse> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      axios
        .post('/api/auth/authentication', data)
        .then((response) => resolve(response))
        .catch((error) => reject(error));
    }, 1000);
  });
};
