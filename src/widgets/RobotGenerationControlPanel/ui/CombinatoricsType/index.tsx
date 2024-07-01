import { useState } from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slider,
} from '@mui/material';

import { TCombinatoricsType } from 'widgets/RobotGenerationControlPanel/lib/types';
import { useAppDispatch } from 'app/store/hooks';
import { setComboList } from 'app/store/slices/combinatoricListSlice';
import { CommonButton } from 'shared/ui/Buttons/CommonButton';
import { MIN_QUANTITY_WORD } from 'widgets/RobotGenerationControlPanel/lib/constans';

import {
  getCombination,
  getPermutation,
  getPlacement,
} from 'widgets/RobotGenerationControlPanel/lib/utils/getCombinatorics';

const COMBINATORICS = ['Перестановка', 'Размещение', 'Сочетание'];

export const CombinatoricsType = ({ wordList }: TCombinatoricsType) => {
  const [comboType, setComboType] = useState(COMBINATORICS[0]);
  const [comboCount, setComboCount] = useState(3);
  const dispatch = useAppDispatch();

  const handleComboList = () => {
    switch (comboType) {
      case 'Перестановка':
        dispatch(setComboList(getPermutation(wordList)));
        break;
      case 'Размещение':
        dispatch(setComboList(getPlacement(wordList, comboCount)));
        break;
      case 'Сочетание':
        dispatch(setComboList(getCombination(wordList, comboCount)));
        break;
    }
  };

  return (
    <FormControl
      fullWidth
      sx={{ gap: 1 }}
    >
      <InputLabel id="demo-simple-select-label">Тип комбинаторики</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        label="Тип комбинаторики"
        value={comboType}
        onChange={(e) => setComboType(e.target.value)}
      >
        {wordList.length > 2 ? (
          COMBINATORICS.map((item) => {
            return (
              <MenuItem
                key={item}
                value={item}
              >
                {item}
              </MenuItem>
            );
          })
        ) : (
          <MenuItem
            key={COMBINATORICS[0]}
            value={COMBINATORICS[0]}
          >
            {COMBINATORICS[0]}
          </MenuItem>
        )}
      </Select>
      {comboType !== 'Перестановка' && (
        <Slider
          valueLabelDisplay="auto"
          step={1}
          marks
          min={2}
          max={wordList.length}
          value={comboCount}
          onChange={(_, value) => setComboCount(value as number)}
        />
      )}
      <CommonButton
        onClick={handleComboList}
        textForBtn="комбинировать"
        disabled={MIN_QUANTITY_WORD > wordList.length}
      />
    </FormControl>
  );
};
