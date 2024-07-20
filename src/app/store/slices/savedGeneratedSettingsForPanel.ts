import { createSlice } from '@reduxjs/toolkit';

import { getAuthToken } from 'shared/lib/utils/getAuthToken';
import { TSavedGeneratedSettingsForPanel } from 'shared/lib/types/TGeneratedSettingsForPanel';

const initialState: TSavedGeneratedSettingsForPanel = {};

const savedGeneratedSettingsForPanel = createSlice({
  name: 'savedGeneratedSettingsForPanel',
  initialState,
  reducers: {
    addInSavedGeneratedSettingsPanel(state, action) {
      const { email } = getAuthToken();

      state[email] = [action.payload];

      const oldSavedSettings = localStorage.getItem(
        'savedGeneratedSettingsForPanel',
      );

      if (oldSavedSettings) {
        const parseOldSavedSettings: TSavedGeneratedSettingsForPanel =
          JSON.parse(oldSavedSettings);

        if (!parseOldSavedSettings[email]) {
          parseOldSavedSettings[email] = state[email];
        } else {
          parseOldSavedSettings[email].push(action.payload);
        }

        localStorage.setItem(
          'savedGeneratedSettingsForPanel',
          JSON.stringify(parseOldSavedSettings),
        );
      } else {
        localStorage.setItem(
          'savedGeneratedSettingsForPanel',
          JSON.stringify(state),
        );
      }
    },
  },
});

export const { addInSavedGeneratedSettingsPanel } =
  savedGeneratedSettingsForPanel.actions;
export default savedGeneratedSettingsForPanel.reducer;
