import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/material';

import { CustomMenu } from '../CustomMenu';

import { boxMenu, iconStyle } from './styles';
import { TPages } from 'widgets/Header/lib/types';

export const BurgerMenu = ({ menuPages }: TPages) => {
  return (
    <Box sx={boxMenu}>
      <CustomMenu
        menuPages={menuPages}
        menuIcon={<MenuIcon sx={iconStyle} />}
      />
    </Box>
  );
};
