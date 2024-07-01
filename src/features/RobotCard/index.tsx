import { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

import { ButtonFavorite } from 'shared/ui/Buttons/ButtonFavorite';

import { box } from './styles';

type TRobotCard = {
  image: string;
};

export const RobotCard = ({ image }: TRobotCard) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Card sx={box}>
      <ButtonFavorite
        addToFavorite={() => setIsFavorite(!isFavorite)}
        isFavorite={isFavorite}
      />
      <CardMedia
        component="img"
        alt="робот"
        image={image}
      />
    </Card>
  );
};
