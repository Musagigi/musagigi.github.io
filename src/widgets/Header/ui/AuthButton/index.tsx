import { ButtonRouter } from 'shared/ui/Buttons/ButtonRouter';

type TPathInfo = {
  path: string;
  name: string;
};

type TAuthMenu = {
  pathToRegistr: TPathInfo;
  pathToLogin: TPathInfo;
};

export const AuthButton = ({ pathToRegistr, pathToLogin }: TAuthMenu) => {
  return (
    <>
      <ButtonRouter
        path={pathToRegistr.path}
        textForBtn={pathToRegistr.name.slice(0, 7)}
      />
      <ButtonRouter
        path={pathToLogin.path}
        textForBtn={pathToLogin.name}
      />
    </>
  );
};
