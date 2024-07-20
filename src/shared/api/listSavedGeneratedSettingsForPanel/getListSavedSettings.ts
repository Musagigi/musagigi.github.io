import { getAuthToken } from 'shared/lib/utils/getAuthToken';
import { TGeneratedSettingsForPanel } from 'shared/lib/types/TGeneratedSettingsForPanel';

export const getListSavedSettings = ():
  | Array<TGeneratedSettingsForPanel>
  | [] => {
  const savedGeneratedSettingsPanel = localStorage.getItem(
    'savedGeneratedSettingsForPanel',
  );

  if (savedGeneratedSettingsPanel) {
    const { email } = getAuthToken();

    const parseSavedGeneratedSettingsPanel: Record<
      typeof email,
      Array<TGeneratedSettingsForPanel>
    > = JSON.parse(savedGeneratedSettingsPanel);

    return [...parseSavedGeneratedSettingsPanel[email]];
  }

  return [];
};
