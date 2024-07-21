import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { isTokenLifetime } from 'shared/lib/utils/isTokenLifetime';
import { useLogout } from 'shared/hooks/useLogout';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { addCards } from 'app/store/slices/сardsSlice';
import { getPaginatedItems } from '../utils/getPaginatedItems';
import { generatedSettingsForPanelSelector } from 'app/store/selectors/generatedSettingsForPanelSelector';
import { imagesApi } from 'features/CustomPagination/api/imagesApi';

const itemsPerPage = 9;

export const usePictureCardsPagination = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [page, setPage] = useState(Number(location.search?.split('=')[1]) || 1);
  const [pageQuantity, setPageQuantity] = useState(0);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const dispatch = useAppDispatch();
  const generatedSettings = useAppSelector(generatedSettingsForPanelSelector);
  const { generatedList } = generatedSettings;

  const logout = useLogout();

  if (isTokenLifetime()) {
    logout();
  }

  useEffect(() => {
    setPageQuantity(Math.ceil(generatedList?.length / itemsPerPage));

    const getImages = async () => {
      try {
        setIsDataLoaded(true);
        const paginatedItems = getPaginatedItems(
          page,
          itemsPerPage,
          generatedList,
        );

        if (!paginatedItems.length) {
          setPage(1);
          navigate(location.pathname, { replace: true });
        } else {
          const response = await imagesApi(paginatedItems);
          dispatch(addCards(response));
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsDataLoaded(false);
      }
    };
    getImages();
  }, [page, generatedSettings]);

  return { page, setPage, pageQuantity, isDataLoaded };
};
