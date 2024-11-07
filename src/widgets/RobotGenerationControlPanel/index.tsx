import { Paper, Typography } from '@mui/material';

import { WordList } from './ui/WordList';
import { CombinatoricsType } from './ui/CombinatoricsType';
import { SwitchBackground } from './ui/SwitchBackground';
import { ButtonRouter } from 'shared/ui/Buttons/ButtonRouter';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { SaveGeneratedPanelSettings } from './ui/SaveGeneratedPanelSettings';

import { generatedSettingsForPanelSelector } from 'app/store/selectors/generatedSettingsForPanelSelector';
import { PATH_SAVED_ROBOT_GENERATIONS } from 'app/router/constans';
import { CONTROL_PANEl } from './lib/constans';
import { controlPanelBox } from './styles';
import { replaceGeneratedSettings } from 'app/store/slices/generatedSettingsForPanel';

export const RobotGenerationControlPanel = ({
  settingsPanel,
}: Record<'settingsPanel', any>) => {
  // const generatedSettings = useAppSelector(generatedSettingsForPanelSelector);

  // localStorage.setItem(
  //   'selectedSavedGeneratedSettings',
  //   JSON.stringify(settingsPanel),
  // );
  console.log('render');

  return (
    <Paper
      variant="outlined"
      sx={controlPanelBox}
    >
      <Typography
        component="h3"
        variant="h6"
      >
        {CONTROL_PANEl}
      </Typography>

      <WordList />
      <SwitchBackground />
      <CombinatoricsType />
      <SaveGeneratedPanelSettings />
      <ButtonRouter
        path={PATH_SAVED_ROBOT_GENERATIONS}
        textForBtn="перейти в сохраненные"
      />
    </Paper>
  );
};
