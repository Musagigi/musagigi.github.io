import { Pagination, PaginationItem } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { DownloadModal } from 'shared/ui/DownloadModal';
import { useGetPictureCards } from './lib/hooks/useGetPictureCards';
import { pagination } from './styles';

export const CustomPagination = () => {
  const location = useLocation();

  const { page, setPage, pageQuantity, isDataLoaded } = useGetPictureCards();

  return (
    <>
      {isDataLoaded && <DownloadModal loading={true} />}
      {!!pageQuantity && (
        <Pagination
          count={pageQuantity}
          page={page}
          onChange={(_, number) => setPage(number)}
          shape="rounded"
          variant="outlined"
          sx={pagination}
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`${location.pathname}?page=${item.page}`}
              {...item}
            />
          )}
        />
      )}
    </>
  );
};
