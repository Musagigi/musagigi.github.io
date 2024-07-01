import { Box, Typography } from '@mui/material';

import { boxPage, pageTitle } from './styles';
import { RobotGenerationControlPanel } from 'widgets/RobotGenerationControlPanel';
import { RobotCardsList } from 'widgets/RobotCardsList';

const RobotGenerationPage = () => {
  return (
    <Box sx={boxPage}>
      <Typography
        component="h2"
        variant="h4"
        sx={pageTitle}
      >
        Генерация роботов
      </Typography>
      <RobotGenerationControlPanel />
      <RobotCardsList />
    </Box>
  );
};

export default RobotGenerationPage;
