import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { boxPage } from './styles';

const RobotGenerationPage = () => {
  return (
    <Box sx={boxPage}>
      <Outlet />
    </Box>
  );
};

export default RobotGenerationPage;
