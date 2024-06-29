import { TextField } from '@mui/material';
import { Control, useController } from 'react-hook-form';
import { TFormField } from '../../lib/types';
import { regFormField } from './styles';

type TRegistrField = {
  control: Control<TFormField>;
  name: keyof TFormField;
  label: string;
  type?: string;
  autoFocus?: boolean;
  required?: boolean;
};

export const RegistrField = ({
  control,
  name,
  label,
  type,
  autoFocus,
  required
}: TRegistrField) => {
  const {
    field,
    formState: { errors },
  } = useController({ name, control });

  return (
    <TextField
      {...field}
      label={label}
      type={type}
      fullWidth
      required={required}
      autoFocus={autoFocus}
      error={!!errors[name]}
      helperText={errors[name]?.message}
      sx={regFormField}
    />
  );
};
