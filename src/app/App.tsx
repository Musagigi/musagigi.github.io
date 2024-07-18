import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';

import { Header } from '../widgets/Header';
import { Footer } from '../widgets/Footer';

import mockApi from '../back/mock';
import { wrapperMainContainer, wrapperPage } from './styles';

mockApi();
export const App = () => {
  return (
    <Box sx={wrapperPage}>
      <Header />
      <Container
        component="main"
        maxWidth="desktop"
        sx={wrapperMainContainer}
      >
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
};
