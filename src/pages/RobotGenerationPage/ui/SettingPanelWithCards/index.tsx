import { useEffect } from 'react';

import { TitleForPage } from 'shared/ui/Text/TitleForPage';
import { RobotCardsList } from 'widgets/RobotCardsList';
import { RobotGenerationControlPanel } from 'widgets/RobotGenerationControlPanel';

import { useAppDispatch } from 'app/store/hooks';
import { replaceGeneratedSettings } from 'app/store/slices/generatedSettingsForPanel';

export const SettingPanelWithCards = () => {
  const dispatch = useAppDispatch();

  const currentGeneratedSettings = localStorage.getItem(
    'currentGeneratedSettings',
  );

  useEffect(() => {
    if (currentGeneratedSettings) {
      const parseCurrentGeneratedSettings = JSON.parse(
        currentGeneratedSettings,
      );
      dispatch(replaceGeneratedSettings(parseCurrentGeneratedSettings));
    }
  }, [currentGeneratedSettings]);

  return (
    <>
      <TitleForPage text="Генерация роботов" />
      <RobotGenerationControlPanel keyForLocalStorage="currentGeneratedSettings" />
      <RobotCardsList keyForLocalStorage="currentGeneratedSettings" />
    </>
  );
};
