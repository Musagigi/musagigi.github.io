import { Link } from 'react-router-dom';
import { AppBar, Box, Toolbar, Container } from '@mui/material';

import { BurgerMenu } from './ui/BurgerMenu';
import { HorizontalMenu } from './ui/HorizontalMenu';
import { AuthButton } from './ui/AuthButton';
import { UserMenu } from './ui/UserMenu';
import { AdeptusMechanicusLogo } from 'shared/icons/AdeptusMechanicusIcon';

import { useAppSelector } from 'app/store/hooks';
import { currentTokenSelector } from 'app/store/selectors/currentTokenSelector';
import {
  NAV_NOT_AUTH_USER,
  PATH_MAIN_PAGE,
  PATH_NOT_AUTH_USER,
} from 'app/router/constans';
import { HEADER_NAV, USER_MENU_NAVIGATION } from './lib/constans';
import { headerMenu, headerMenuLogo, headerMenuUser } from './styles';

export const Header = () => {
  const token = useAppSelector(currentTokenSelector);

  return (
    <AppBar position="static">
      <Container maxWidth="desktop">
        <Toolbar
          disableGutters
          sx={headerMenu}
        >
          <Box sx={headerMenuLogo}>
            <Link to={token ? PATH_MAIN_PAGE : PATH_NOT_AUTH_USER}>
              <AdeptusMechanicusLogo />
            </Link>
          </Box>

          {token && (
            <Box>
              <HorizontalMenu menuPages={HEADER_NAV} />
              <BurgerMenu menuPages={HEADER_NAV} />
            </Box>
          )}

          <Box sx={headerMenuUser}>
            {token ? (
              <UserMenu menuPages={USER_MENU_NAVIGATION} />
            ) : (
              <AuthButton
                pathToRegistr={NAV_NOT_AUTH_USER.registration}
                pathToLogin={NAV_NOT_AUTH_USER.login}
              />
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
