import { Box, Typography } from '@mui/material';

import { textOneStyles, textTwoStyles } from './styles';

type TTwoSentences = {
  textOne: string;
  textTwo: string;
};

export const TwoSentences = ({ textOne, textTwo }: TTwoSentences) => {
  return (
    <Box>
      <Typography sx={textOneStyles}>{textOne} </Typography>
      <Typography sx={textTwoStyles}>{textTwo}</Typography>
    </Box>
  );
};
