import { Link } from '@mui/material';
import { NavLink } from 'react-router-dom';

import { routerBtn } from './styles';

type TRouterButton = {
  path: string;
  textForBtn: string;
};

export const ButtonRouter = ({ path, textForBtn }: TRouterButton) => {
  return (
    <Link
      to={path}
      component={NavLink}
      sx={routerBtn}
    >
      {textForBtn}
    </Link>
  );
};
