import { Box, Paper, Typography } from '@mui/material';

import { RegistrField } from './ui/RegistrField';
import { useRegister } from './lib/hooks/useRegister';
import { REGISTRATION, WARNING } from './lib/constants';
import { SubmitFormButton } from '../../shared/ui/Buttons/SubmitFormButton';
import {
  regForm,
  regFormTitle,
  regFormWarning,
  regFormWrapper,
} from './styles';

export const RegistrationForm = () => {
  const { control, isSubmitting, handleSubmit, onSubmit } = useRegister();

  return (
    <Paper
      variant="outlined"
      sx={regFormWrapper}
    >
      <Typography
        component="h2"
        variant="h5"
        sx={regFormTitle}
      >
        {REGISTRATION}
      </Typography>
      <Typography sx={regFormWarning}>{WARNING}</Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        sx={regForm}
      >
        <RegistrField
          control={control}
          name="firstName"
          label="Имя"
          autoFocus
          required
        />
        <RegistrField
          control={control}
          name="lastName"
          label="Фамилия"
          required
        />
        <RegistrField
          control={control}
          name="email"
          label="email"
          required
        />
        <RegistrField
          control={control}
          name="login"
          label="Логин"
          required
        />
        <RegistrField
          control={control}
          name="password"
          label="Пароль"
          type="password"
          required
        />
        <RegistrField
          control={control}
          name="confirmPassword"
          label="Повторите пароль"
          type="password"
          required
        />
        <SubmitFormButton isSubmitting={isSubmitting} />
      </Box>
    </Paper>
  );
};
