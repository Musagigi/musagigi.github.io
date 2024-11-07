import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { getPaginatedItems } from '../utils/getPaginatedItems';
import { imagesApi } from 'features/CustomPagination/api/imagesApi';

import { TCustomPagination } from '../types';

export const usePictureCardsPagination = ({
  listItems,
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
        const paginatedItems = getPaginatedItems(page, 9, listItems);

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

  return { page, setPage, pageQuantity, isDataLoaded };
};
