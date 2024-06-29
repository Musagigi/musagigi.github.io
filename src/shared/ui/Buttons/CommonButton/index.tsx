import { Button, ButtonProps } from '@mui/material';

type TCommonButton = ButtonProps & {
  textForBtn: string;
  onClick?: () => void;
};

export const CommonButton = ({
  textForBtn,
  variant = 'contained',
  size = 'medium',
  fullWidth,
  disabled,
  onClick,
}: TCommonButton) => {
  return (
    <Button
      size={size}
      variant={variant}
      fullWidth={fullWidth}
      disabled={disabled}
      onClick={onClick}
    >
      {textForBtn}
    </Button>
  );
};
