import { Box, Paper, Typography } from '@mui/material';

import { SubmitFormButton } from '../../shared/ui/Buttons/SubmitFormButton';
import { LoginField } from './ui/LoginField';
import { useLogin } from './lib/hooks/useLogin';

import { LOGIN } from './lib/constants';
import { regForm, regFormTitle, regFormWrapper } from './styles';

export const LoginForm = () => {
  const { control, isSubmitting, handleSubmit, onSubmit } = useLogin();

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
        {LOGIN}
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        sx={regForm}
      >
        <LoginField
          control={control}
          name="email"
          label="email"
          autoFocus
          required
        />
        <LoginField
          control={control}
          name="password"
          label="Пароль"
          type="password"
          required
        />
        <SubmitFormButton isSubmitting={isSubmitting} />
      </Box>
    </Paper>
  );
};
