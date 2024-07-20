import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slider,
} from '@mui/material';

import { CommonButton } from 'shared/ui/Buttons/CommonButton';
import {
  getCombination,
  getPermutation,
  getPlacement,
} from '../../lib/utils/getCombinatorics';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import {
  setCombinatoricType,
  setCountWordByCombinatoric,
  setGeneratedList,
} from 'app/store/slices/generatedSettingsForPanel';
import { generatedSettingsForPanelSelector } from 'app/store/selectors/generatedSettingsForPanelSelector';
import { TwoSentences } from 'shared/ui/Text/TwoSentences';

import { MIN_QUANTITY_WORD } from '../../lib/constans';

const COMBINATORICS = ['Перестановка', 'Размещение', 'Сочетание'];

export const CombinatoricsType = () => {
  const dispatch = useAppDispatch();
  const generatedSettings = useAppSelector(generatedSettingsForPanelSelector);
  const { wordList, combinatoricType, countWordByCombinatoric } =
    generatedSettings;

  const handleComboList = () => {
    switch (combinatoricType) {
      case 'Перестановка':
        dispatch(setGeneratedList(getPermutation(wordList)));
        break;
      case 'Размещение':
        dispatch(
          setGeneratedList(
            getPlacement(wordList, Number(countWordByCombinatoric)),
          ),
        );
        break;
      case 'Сочетание':
        dispatch(
          setGeneratedList(
            getCombination(wordList, Number(countWordByCombinatoric)),
          ),
        );
        break;
    }
  };

  return (
    <>
      <FormControl
        fullWidth
        sx={{ gap: 1 }}
      >
        <InputLabel id="combinatoric-select-label">
          Тип комбинаторики
        </InputLabel>
        <Select
          labelId="combinatoric-select-label"
          label="Тип комбинаторики"
          value={combinatoricType}
          onChange={(e) => dispatch(setCombinatoricType(e.target.value))}
        >
          {wordList.length > MIN_QUANTITY_WORD ? (
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

        {wordList.length > MIN_QUANTITY_WORD &&
          combinatoricType !== 'Перестановка' && (
            <Slider
              valueLabelDisplay="auto"
              step={1}
              marks
              min={2}
              max={wordList.length}
              value={Number(countWordByCombinatoric)}
              onChange={(_, value) =>
                dispatch(setCountWordByCombinatoric(value as number))
              }
            />
          )}
        <CommonButton
          onClick={handleComboList}
          textForBtn="комбинировать"
          disabled={MIN_QUANTITY_WORD > wordList.length}
        />
      </FormControl>
      <TwoSentences
        textOne="количество скомбинированных слов:"
        textTwo={`${generatedSettings.generatedList.length}`}
      />
    </>
  );
};
