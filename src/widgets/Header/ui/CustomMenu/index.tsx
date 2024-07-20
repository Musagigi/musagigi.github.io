import { useState } from 'react';
import { Box, IconButton, Menu } from '@mui/material';

import { ButtonRouter } from '../../../../shared/ui/Buttons/ButtonRouter';

import { TUserMenu } from './types';
import { boxMenu } from './styles';

export const CustomMenu = ({
  menuPages,
  children,
  menuIcon,
  title = 'Меню',
}: TUserMenu) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <IconButton
        title={title}
        onClick={handleOpenNavMenu}
      >
        {menuIcon}
      </IconButton>
      <Menu
        sx={boxMenu}
        keepMounted
        anchorEl={anchorElNav}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
      >
        {menuPages?.map((page) => (
          <Box
            component="li"
            key={page.name}
            onClick={handleCloseNavMenu}
          >
            <ButtonRouter
              path={page.path}
              textForBtn={page.name}
            />
          </Box>
        ))}
        {children}
      </Menu>
    </>
  );
};
