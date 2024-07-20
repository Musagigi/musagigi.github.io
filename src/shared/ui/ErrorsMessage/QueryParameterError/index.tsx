import { Box, Typography } from '@mui/material';

export const QueryParameterError = ({ errorParam }: { errorParam: string }) => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography>
        Ошибка: проверьте "{errorParam}" указанный в запросе
      </Typography>
      <Typography>разрешены только числа</Typography>
    </Box>
  );
};
