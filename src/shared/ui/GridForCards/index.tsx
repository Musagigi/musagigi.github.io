import { Paper } from '@mui/material';
import { listCards } from './styles';

type TGridForCards = {
  children: React.ReactNode;
  style?: object;
};

export const GridForCards = ({ children, style }: TGridForCards) => {
  return (
    <Paper
      variant="outlined"
      sx={{ ...listCards, ...style }}
    >
      {children}
    </Paper>
  );
};
