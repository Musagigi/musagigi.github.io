import { Typography } from '@mui/material';
import { pageTitle } from './styles';

type TTitleForPage = {
  text: string;
  style?: object;
};

export const TitleForPage = ({ text, style }: TTitleForPage) => {
  return (
    <Typography
      component="h2"
      variant="h4"
      sx={{ ...pageTitle, ...style }}
    >
      {text}
    </Typography>
  );
};
