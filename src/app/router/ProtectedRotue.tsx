import React, { Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { useAppSelector } from '../store/hooks';
import { currentTokenSelector } from 'app/store/selectors/currentTokenSelector';

import { PATH_NOT_AUTH_USER } from './constans';

type TProtectedRotue = {
  children: React.ReactNode;
  redirectPath?: string;
};

export const ProtectedRotue = ({
  children,
  redirectPath = PATH_NOT_AUTH_USER,
}: TProtectedRotue) => {
  const token = useAppSelector(currentTokenSelector);

  return token ? (
    <Suspense fallback={<CircularProgress />}>{children}</Suspense>
  ) : (
    <Navigate
      to={redirectPath}
      replace
    />
  );
};
