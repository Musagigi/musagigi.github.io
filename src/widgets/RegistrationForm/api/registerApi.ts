import axios, { AxiosPromise } from 'axios';
import { TFormField } from '../lib/types';

type TRegisterResponse = {
  status: number;
  statusText: string;
  headers: {};
  data: {};
  config?: TRegisterResponse;
};

export const registerApi = (
  data: TFormField,
): AxiosPromise<TRegisterResponse> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      axios
        .post('/api/auth/registration', data)
        .then((response) => resolve(response))
        .catch((error) => reject(error));
    }, 1000);
  });
};
