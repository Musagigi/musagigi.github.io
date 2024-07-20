import { TPage } from 'widgets/Header/lib/types';

export type TUserMenu = {
  menuPages: TPage[];
  children?: React.ReactNode;
  menuIcon?: React.ReactNode;
  title?: string;
};
