import { Suspense, lazy } from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

import { App } from '../App';
import { LoginPage } from 'pages/LoginPage';
import { ProtectedRoute } from './ProtectedRoute';
import {
  NAV_NOT_AUTH_USER,
  HEADER_NAV_AUTH_USER,
  PATH_NOT_AUTH_USER,
} from './constans';
import { SelectedSavedSettingsPanel } from 'pages/RobotGenerationPage/ui/SelectedSavedSettingsPanel';
import { ListSavedSettingsPanel } from 'widgets/ListSavedSettingsPanel';
import { SettingPanelWithCards } from 'pages/RobotGenerationPage/ui/SettingPanelWithCards';

const RegistrationPage = lazy(() => import('pages/RegistrationPage'));
const FavoritePage = lazy(() => import('pages/FavoritePage'));
const RobotGenerationPage = lazy(() => import('pages/RobotGenerationPage'));

const suspense = (page: React.ReactNode, fallback = <CircularProgress />) => (
  <Suspense fallback={fallback}>{page}</Suspense>
);

export const routes = createBrowserRouter([
  {
    path: PATH_NOT_AUTH_USER,
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
        path: HEADER_NAV_AUTH_USER.favorite.path,
        element: (
          <ProtectedRoute>
            <FavoritePage />
          </ProtectedRoute>
        ),
      },
      {
        path: HEADER_NAV_AUTH_USER.robotGeneration.path,
        element: (
          <ProtectedRoute>
            <RobotGenerationPage />
          </ProtectedRoute>
        ),
        children: [
          {
            index: true,
            element: <SettingPanelWithCards />,
          },
          {
            path: 'saved',
            element: <Outlet />,
            children: [
              {
                index: true,
                element: <ListSavedSettingsPanel />,
              },
              {
                path: ':id',
                element: <SelectedSavedSettingsPanel />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
