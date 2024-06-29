import { useState } from 'react';
import { Avatar, Box } from '@mui/material';
import { CustomMenu } from '../CustomMenu';
import { logoutApi } from '../../api/logoutApi';
import { DownloadModal } from '../../../../shared/ui/DownloadModal';
import { TMenuNav } from '../../lib/types';
import { useLogout } from '../../../../shared/hooks/useLogout';
import { CommonButton } from '../../../../shared/ui/Buttons/CommonButton';
import { TOKEN } from '../../../../shared/lib/constans';
import { menuItem } from './styles';

export const UserMenu = ({ menuNav }: TMenuNav) => {
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
        menuNav={menuNav}
        menuIcon={<Avatar alt="Аватар пользователя" />}
        title="Меню пользователя"
      >
        <Box
          onClick={handleLogout}
          component="li"
          sx={menuItem}
        >
          <CommonButton
            textForBtn='Выйти'
            variant="text"
            fullWidth
          />
        </Box>
      </CustomMenu>
      <DownloadModal loading={loading} />
    </>
  );
};
