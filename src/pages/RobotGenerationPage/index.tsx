import { Box, Typography } from '@mui/material';

import { boxPage, pageTitle } from './styles';

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
    </Box>
  );
};

export default RobotGenerationPage;
