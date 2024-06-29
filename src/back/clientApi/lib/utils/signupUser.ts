import { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { TUserCredentials } from '../types/types';

export const signupUser = (
  config: InternalAxiosRequestConfig,
): Promise<AxiosResponse> => {
  return new Promise((resolve, reject) => {
    const { email } = JSON.parse(config.data);
    const data = localStorage.getItem('usersDataRegistr');

    if (data !== null) {
      const parseData: TUserCredentials = JSON.parse(data);
      const isEmailUser = parseData.find((user) => user.email === email);

      if (isEmailUser) {
        reject({
          status: 403,
          statusText: 'Forbidden',
          headers: {
            'Content-Type': 'application/json',
          },
          data: {
            email,
            errorField: 'email',
            errorText: 'Пользователь с такой почтой уже зарегистрирован',
          },
        });
      }
    }

    resolve({
      status: 200,
      statusText: 'OK',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {},
      config,
    });
  });
};
