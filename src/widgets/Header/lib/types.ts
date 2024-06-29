type TPage = {
  name: string;
  path: string;
};

export type TMenuNav = {
  menuNav: TPage[];
};

export type TUserMenu = {
  menuNav: TPage[];
  children?: React.ReactNode;
  menuIcon?: React.ReactNode;
  title?: string;
};
