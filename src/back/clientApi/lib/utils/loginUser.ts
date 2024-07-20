import { AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import { getCurrentDate } from 'shared/lib/utils/getCurrentDate';
import { TUserCredentials } from '../types/types';

export const loginUser = (
  config: InternalAxiosRequestConfig,
): Promise<AxiosResponse> => {
  return new Promise((resolve, reject) => {
    const { email, password } = JSON.parse(config.data);
    const data = localStorage.getItem('usersDataRegistr');

    if (data === null) {
      reject({
        status: 403,
        statusText: 'Forbidden',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          errorField: 'email',
          errorText: 'Пользователь с такой почтой не зарегистрирован',
        },
      });
    }

    if (data !== null) {
      const parseData: TUserCredentials = JSON.parse(data);
      const isUserData = parseData.find((user) => user.email === email);

      if (!isUserData?.email) {
        reject({
          status: 403,
          statusText: 'Forbidden',
          headers: {
            'Content-Type': 'application/json',
          },
          data: {
            errorField: 'email',
            errorText: 'Пользователь с такой почтой не зарегистрирован',
          },
        });
      }

      if (password !== isUserData?.password) {
        reject({
          status: 401,
          statusText: 'Unauthorized',
          headers: {
            'Content-Type': 'application/json',
          },
          data: {
            errorField: 'password',
            errorText: 'Неправильный пароль',
          },
        });
      }
    }

    const { date, time } = getCurrentDate();

    resolve({
      status: 200,
      statusText: 'OK',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        email,
        date,
        time,
      },
      config,
    });
  });
};
