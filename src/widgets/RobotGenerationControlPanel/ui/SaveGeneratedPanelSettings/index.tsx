import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { addInSavedGeneratedSettingsPanel } from 'app/store/slices/savedGeneratedSettingsForPanel';
import { CommonButton } from 'shared/ui/Buttons/CommonButton';
import { generatedSettingsForPanelSelector } from 'app/store/selectors/generatedSettingsForPanelSelector';

import { MIN_QUANTITY_WORD } from '../../lib/constans';

export const SaveGeneratedPanelSettings = () => {
  const dispatch = useAppDispatch();
  const generatedSettings = useAppSelector(generatedSettingsForPanelSelector);

  const handleSaveGeneratedPanelSettings = () => {
    dispatch(addInSavedGeneratedSettingsPanel(generatedSettings));
  };

  return (
    <CommonButton
      onClick={handleSaveGeneratedPanelSettings}
      textForBtn="сохранить настройки панели"
      disabled={MIN_QUANTITY_WORD > generatedSettings.wordList.length}
    />
  );
};
