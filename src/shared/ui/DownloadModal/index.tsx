import { Backdrop, CircularProgress } from '@mui/material';

type TDownloadModal = {
  loading: boolean;
};

export const DownloadModal = ({ loading }: TDownloadModal) => {
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
