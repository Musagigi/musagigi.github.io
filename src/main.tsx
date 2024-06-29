import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import store, { persistor } from './app/store/store';
import { routes } from './app/router/routes';
import { theme } from './app/theme/styles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={routes} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
