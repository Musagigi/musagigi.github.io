import { Box, Typography } from '@mui/material';
import { boxPage, pageTitle } from './styles';

const FavoritePage = () => {
  return (
    <Box sx={boxPage}>
      <Typography
        component="h2"
        variant="h4"
        sx={pageTitle}
      >
        Избранное
      </Typography>
    </Box>
  );
};

export default FavoritePage;
