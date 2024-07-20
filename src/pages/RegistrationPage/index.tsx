import { RegistrationForm } from 'widgets/RegistrationForm';

import { useLogout } from 'shared/hooks/useLogout';

import { TOKEN } from 'shared/lib/constans';

const RegistrationPage = () => {
  const logout = useLogout(TOKEN);

  if (localStorage.getItem(TOKEN)) {
    logout();
  }

  return <RegistrationForm />;
};

export default RegistrationPage;
