import { TGeneratedSettingsForPanel } from 'shared/lib/types/TGeneratedSettingsForPanel';

export const getSelectedSavedSetting = (
  list: Array<TGeneratedSettingsForPanel>,
  id: number,
) => {
  return list.find((_, index: number) => index === id);
};
