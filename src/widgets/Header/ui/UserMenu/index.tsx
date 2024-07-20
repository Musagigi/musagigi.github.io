import { useState } from 'react';
import { Avatar, Box } from '@mui/material';

import { DownloadModal } from 'shared/ui/DownloadModal';
import { CommonButton } from 'shared/ui/Buttons/CommonButton';
import { CustomMenu } from '../CustomMenu';

import { useLogout } from 'shared/hooks/useLogout';
import { logoutApi } from 'widgets/Header/api/logoutApi';
import { TPages } from 'widgets/Header/lib/types';
import { TOKEN } from 'shared/lib/constans';
import { menuItem } from './styles';

export const UserMenu = ({ menuPages }: TPages) => {
  const [loading, setLoading] = useState(false);
  const logout = useLogout(TOKEN);

  const handleLogout = async () => {
    try {
      setLoading(() => !loading);
      const response = await logoutApi();
      if (response.status === 200) {
        logout();
        setLoading(() => !loading);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <CustomMenu
        menuPages={menuPages}
        menuIcon={<Avatar alt="Аватар пользователя" />}
        title="Меню пользователя"
      >
        <Box
          onClick={handleLogout}
          component="li"
          sx={menuItem}
        >
          <CommonButton
            textForBtn="Выйти"
            variant="text"
            fullWidth
          />
        </Box>
      </CustomMenu>
      <DownloadModal loading={loading} />
    </>
  );
};
