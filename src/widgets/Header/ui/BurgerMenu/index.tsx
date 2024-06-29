import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/material';

import { CustomMenu } from '../CustomMenu';

import { TMenuNav } from '../../lib/types';
import { boxMenu, iconStyle } from './styles';

export const BurgerMenu = ({ menuNav }: TMenuNav) => {
  return (
    <Box sx={boxMenu}>
      <CustomMenu
        menuNav={menuNav}
        menuIcon={<MenuIcon sx={iconStyle} />}
      />
    </Box>
  );
};
