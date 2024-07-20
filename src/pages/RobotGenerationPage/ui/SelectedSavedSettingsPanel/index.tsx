import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Typography } from '@mui/material';

import { getSelectedSavedSetting } from 'pages/RobotGenerationPage/utils/getSelectedSavedSetting';
import { RobotGenerationControlPanel } from 'widgets/RobotGenerationControlPanel';
import { RobotCardsList } from 'widgets/RobotCardsList';
import { QueryParameterError } from 'shared/ui/ErrorsMessage/QueryParameterError';
import { TitleForPage } from 'shared/ui/Text/TitleForPage';

import { getListSavedSettings } from 'shared/api/listSavedGeneratedSettingsForPanel/getListSavedSettings';
import { useAppDispatch } from 'app/store/hooks';
import { replaceGeneratedSettings } from 'app/store/slices/generatedSettingsForPanel';
import { isNumberQueryParameter } from 'shared/lib/utils/isNumberQueryParameter';
import { PATH_SAVED_ROBOT_GENERATIONS } from 'app/router/constans';

export const SelectedSavedSettingsPanel = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { id } = params as Record<'id', string>;
  const listSaved = getListSavedSettings();

  useEffect(() => {
    if (isNumberQueryParameter(id)) return;

    if (Number(id) > listSaved.length) {
      navigate(`${PATH_SAVED_ROBOT_GENERATIONS}/0`, { replace: true });
    } else {
      const selectedSavedSettings = getSelectedSavedSetting(listSaved, +id);
      dispatch(replaceGeneratedSettings(selectedSavedSettings));
    }
  }, [params]);

  if (isNumberQueryParameter(id)) {
    return <QueryParameterError errorParam={id} />;
  }

  return (
    <>
      {listSaved.length > 0 ? (
        <>
          <TitleForPage text="Сгенерированные сохраненные настройки" />
          <RobotGenerationControlPanel keyForLocalStorage="selectedSavedGeneratedSettings" />
          <RobotCardsList />
        </>
      ) : (
        <Typography>Список сохраненных пуст</Typography>
      )}
    </>
  );
};
