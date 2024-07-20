import { InternalAxiosRequestConfig } from 'axios';
import { loginUser } from './lib/utils/loginUser';
import { signupUser } from './lib/utils/signupUser';
import { logoutUser } from './lib/utils/logoutUser';

export const clientApi = (config: InternalAxiosRequestConfig) => {
  const prepareAuthUrl = config.url!.replace('/api/auth', '');

  switch (prepareAuthUrl) {
    case '/authentication':
      config.adapter = () => loginUser(config);
      break;
    case '/registration':
      config.adapter = () => signupUser(config);
      break;
    case '/logout':
      config.adapter = () => logoutUser(config);
      break;
  }
};
