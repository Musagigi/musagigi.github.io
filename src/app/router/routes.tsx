import React from 'react';
import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

import { App } from 'app/App';
import { LoginPage } from 'pages/LoginPage';
import { ProtectedRotue } from './ProtectedRotue';

import { NAV_NOT_AUTH_USER, HEADER_NAV_AUTH_USER } from './constans';

const RegistrationPage = lazy(() => import('pages/RegistrationPage'));
const MainPage = lazy(() => import('../../pages/MainPage'));
const FavoritePage = lazy(() => import('../../pages/FavoritePage'));
const RobotGenerationPage = lazy(
  () => import('../../pages/RobotGenerationPage'),
);

const suspense = (page: React.ReactNode, fallback = <CircularProgress />) => (
  <Suspense fallback={fallback}>{page}</Suspense>
);

export const routes = createBrowserRouter([
  {
    path: NAV_NOT_AUTH_USER.login.path,
    element: <App />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: NAV_NOT_AUTH_USER.registration.path,
        element: suspense(<RegistrationPage />),
      },
      {
        path: HEADER_NAV_AUTH_USER.main.path,
        element: (
          <ProtectedRotue>
            <MainPage />
          </ProtectedRotue>
        ),
      },
      {
        path: HEADER_NAV_AUTH_USER.favorite.path,
        element: (
          <ProtectedRotue>
            <FavoritePage />
          </ProtectedRotue>
        ),
      },
      {
        path: HEADER_NAV_AUTH_USER.robotGeneration.path,
        element: (
          <ProtectedRotue>
            <RobotGenerationPage />
          </ProtectedRotue>
        ),
      },
    ],
  },
]);
