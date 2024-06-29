import { AxiosResponse, InternalAxiosRequestConfig } from 'axios';

type TGetAuth = Array<{
  email: string;
  firstName: string;
  lastName: string;
  login: string;
  password: string;
}>;

export const registrUser = (
  config: InternalAxiosRequestConfig,
): Promise<AxiosResponse> => {
  return new Promise((resolve, reject) => {
    const { email } = JSON.parse(config.data);
    const data = localStorage.getItem('usersDataRegistr');

    if (data !== null) {
      const parseData: TGetAuth = JSON.parse(data);
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
