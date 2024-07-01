export const PATH_NOT_AUTH_USER = '/';
export const PATH_MAIN_PAGE = '/main';

export const NAV_NOT_AUTH_USER = {
  login: {
    path: '/',
    name: 'войти',
  },
  registration: {
    path: '/registration',
    name: 'регистрация',
  },
};

export const HEADER_NAV_AUTH_USER = {
  main: {
    path: PATH_MAIN_PAGE,
    name: 'главная',
  },
  favorite: {
    path: '/favorite',
    name: 'избранное',
  },
  robotGeneration: {
    path: '/robot-generation',
    name: 'генерация роботов',
  },
};

export const USER_MEUN_NAV = {
  profile: {
    path: '/profile',
    name: 'профиль',
  },
  account: {
    path: '/account',
    name: 'аккаунт',
  },
};
