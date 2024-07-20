import { Pagination, PaginationItem } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

import { DownloadModal } from 'shared/ui/DownloadModal';

import { usePictureCardsPagination } from './lib/hooks/usePictureCardsPagination';

import { pagination } from './styles';

export const CustomPagination = () => {
  const location = useLocation();

  const { page, setPage, pageQuantity, isDataLoaded } =
    usePictureCardsPagination();

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
