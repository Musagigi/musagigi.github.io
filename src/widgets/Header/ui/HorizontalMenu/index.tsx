import { Box } from '@mui/material';

import { ButtonRouter } from '../../../../shared/ui/Buttons/ButtonRouter';

import { TPages } from 'widgets/Header/lib/types';
import { menuNav } from './styles';

export const HorizontalMenu = ({ menuPages }: TPages) => {
  return (
    <Box sx={menuNav}>
      {menuPages.map((page) => (
        <ButtonRouter
          key={page.name}
          path={page.path}
          textForBtn={page.name}
        />
      ))}
    </Box>
  );
};
