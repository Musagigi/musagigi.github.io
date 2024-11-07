import { useEffect, useState } from 'react';
import { Pagination, PaginationItem } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { DownloadModal } from 'shared/ui/DownloadModal';

import { getPaginatedItems } from './lib/utils/getPaginatedItems';
import { imagesApi } from './api/imagesApi';
import { pagination } from './styles';
import { TCustomPagination } from './lib/types';

export const CustomPagination = ({
  listItems = [],
  setItems,
  itemsPerPage = 9,
}: TCustomPagination) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [page, setPage] = useState(Number(location.search?.split('=')[1]) || 1);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const pageQuantity = Math.ceil(listItems?.length / itemsPerPage);

  useEffect(() => {
    const getImages = async () => {
      try {
        setIsDataLoaded(true);
        const paginatedItems = getPaginatedItems(page, itemsPerPage, listItems);

        if (!paginatedItems.length) {
          setPage(1);
          navigate(location.pathname, { replace: true });
        } else {
          const response = await imagesApi(paginatedItems);
          setItems(response);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsDataLoaded(false);
      }
    };
    getImages();
  }, [page, listItems]);

  return (
    <>
      <DownloadModal loading={isDataLoaded} />
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
