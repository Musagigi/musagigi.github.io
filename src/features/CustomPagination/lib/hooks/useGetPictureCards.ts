import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { isTokenLifetime } from 'shared/utils/isTokenLifetime';
import { useLogout } from 'shared/hooks/useLogout';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { addCard } from 'app/store/slices/сardsSlice';
import { comboListSelector } from 'app/store/selectors/comboListSelector';
import { imagesApi } from 'features/CustomPagination/api/imagesApi';
import { getPaginatedItems } from '../utils/getPaginatedItems';

const itemsPerPage = 9;

// TODO добавить bgset
export const useGetPictureCards = () => {
  const location = useLocation();
  const comboList = useAppSelector(comboListSelector);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [page, setPage] = useState(Number(location.search?.split('=')[1]) || 1);
  const [pageQuantity, setPageQuantity] = useState(0);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const logout = useLogout();

  if (isTokenLifetime()) {
    logout();
  }

  useEffect(() => {
    setPageQuantity(Math.ceil(comboList.length / itemsPerPage));
  }, [comboList]);

  useEffect(() => {
    const getImages = async () => {
      try {
        setIsDataLoaded(true);
        const paginatedItems = getPaginatedItems(page, itemsPerPage, comboList);

        if (!paginatedItems.length) {
          setPage(1);
          navigate(location.pathname, { replace: true });
        } else {
          const response = await imagesApi(paginatedItems);
          dispatch(addCard(response));
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsDataLoaded(false);
      }
    };
    getImages();
  }, [page, comboList]);

  return { page, setPage, pageQuantity, isDataLoaded };
};
