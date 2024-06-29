import axios, { InternalAxiosRequestConfig } from 'axios';
import { clientApi } from './clientApi';
import { robohashApi } from './robohashApi';

const mockApi = () => {
  axios.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
    if (config.url) {
      if (config.url.includes('/api/auth')) {
        clientApi(config);
      }

      if (config.url.includes('/api/robot/')) {
        robohashApi(config);
      }
    }
    return config;
  });
};

export default mockApi;
