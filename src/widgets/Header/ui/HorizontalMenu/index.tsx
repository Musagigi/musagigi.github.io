import { Box } from '@mui/material';
import { ButtonRouter } from '../../../../shared/ui/Buttons/ButtonRouter';

import { TMenuNav } from '../../lib/types';
import { menuNavStyles } from './styles';

export const HorizontalMenu = ({ menuNav }: TMenuNav) => {
  return (
    <Box sx={menuNavStyles}>
      {menuNav.map((page) => (
        <ButtonRouter
          key={page.name}
          path={page.path}
          textForBtn={page.name}
        />
      ))}
    </Box>
  );
};
