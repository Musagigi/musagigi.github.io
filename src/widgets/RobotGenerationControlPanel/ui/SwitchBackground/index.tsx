import { useState } from 'react';
import {
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Switch,
} from '@mui/material';

import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { setBackgroundImage } from 'app/store/slices/generatedSettingsForPanel';
import { generatedSettingsForPanelSelector } from 'app/store/selectors/generatedSettingsForPanelSelector';

export const SwitchBackground = () => {
  const dispatch = useAppDispatch();
  const { backgroundImage } = useAppSelector(generatedSettingsForPanelSelector);
  const [enableBackground, setEnableBackground] = useState(false);

  const handleSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnableBackground(e.target.checked);
    dispatch(setBackgroundImage(''));
  };

  return (
    <>
      <FormControlLabel
        control={
          <Switch
            checked={enableBackground}
            onChange={handleSwitch}
          />
        }
        label="Включить фон"
      />

      {enableBackground && (
        <FormControl fullWidth>
          <InputLabel>Выберите фон</InputLabel>
          <Select
            value={backgroundImage}
            onChange={(e) => dispatch(setBackgroundImage(e.target.value))}
            label="Выберите фон"
          >
            <MenuItem value="bg1">Фон 1</MenuItem>
            <MenuItem value="bg2">Фон 2</MenuItem>
          </Select>
        </FormControl>
      )}
    </>
  );
};
