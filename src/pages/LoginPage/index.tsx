import { LoginForm } from 'widgets/LoginForm';

import { useLogout } from 'shared/hooks/useLogout';

import { TOKEN } from 'shared/lib/constans';

export const LoginPage = () => {
  const logout = useLogout(TOKEN);

  if (localStorage.getItem(TOKEN)) {
    logout();
  }

  return <LoginForm />;
};
