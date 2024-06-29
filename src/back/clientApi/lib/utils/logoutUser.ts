import { AxiosResponse, InternalAxiosRequestConfig } from 'axios';

export const logoutUser = (
  config: InternalAxiosRequestConfig,
): Promise<AxiosResponse> => {
  return new Promise((resolve) => {
    resolve({
      status: 200,
      statusText: 'OK',
      headers: {},
      data: {},
      config,
    });
  });
};
