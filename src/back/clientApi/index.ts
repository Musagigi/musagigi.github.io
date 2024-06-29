import { InternalAxiosRequestConfig } from 'axios';
import { authUser } from './utils/authUser';
import { registrUser } from './utils/registrUser';
import { logoutUser } from './utils/logoutUser';

export const clientApi = (config: InternalAxiosRequestConfig) => {
  const prepareAuthUrl = config.url!.replace('/api/auth', '');

  switch (prepareAuthUrl) {
    case '/authentication':
      config.adapter = () => authUser(config);
      break;
    case '/registration':
      config.adapter = () => registrUser(config);
      break;
    case '/logout':
      config.adapter = () => logoutUser(config);
      break;
  }
};
