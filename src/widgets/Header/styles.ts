export const headerMenu = {
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '14px 0',
};

export const headerMenuLogo = {
  display: { mobile: 'none', laptop: 'block' },
};

export const headerMenuUser = {
  display: 'flex',
  gap: '5px',
  'text-transform': 'uppercase',
  flexBasis: 'contetnt',
  '& .MuiTypography-root': {
    color: 'white',
  },
};
