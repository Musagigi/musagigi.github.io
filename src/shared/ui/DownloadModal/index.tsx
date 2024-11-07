import { Backdrop, CircularProgress } from '@mui/material';

export const DownloadModal = ({ loading }: Record<'loading', boolean>) => {
  return (
    <Backdrop
      open={loading}
      sx={{ zIndex: 10 }}
    >
      <CircularProgress
        size={40}
        color="primary"
      />
    </Backdrop>
  );
};
