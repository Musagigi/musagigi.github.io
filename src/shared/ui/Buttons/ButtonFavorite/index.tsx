import { ButtonProps, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { btnFavorite, btnFavoriteIcon } from './styles';

type TCommonButton = ButtonProps & {
  addToFavorite?: () => void;
  isFavorite: boolean;
};

export const ButtonFavorite = ({
  addToFavorite,
  isFavorite,
}: TCommonButton) => {
  return (
    <IconButton
      title={isFavorite ? 'удалить из избранного' : 'добавить в избранное'}
      onClick={addToFavorite}
      sx={btnFavorite}
    >
      <FavoriteIcon sx={isFavorite ? btnFavoriteIcon : {}} />
    </IconButton>
  );
};
