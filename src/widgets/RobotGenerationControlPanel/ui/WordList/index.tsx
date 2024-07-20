import { useEffect, useState } from 'react';
import { Box, Chip, TextField } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

import { CommonButton } from 'shared/ui/Buttons/CommonButton';
import {
  validateWord,
  validateWordList,
} from '../../lib/validate/validateWordList';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import {
  addWordInList,
  removeWordInList,
} from 'app/store/slices/generatedSettingsForPanel';
import { generatedSettingsForPanelSelector } from 'app/store/selectors/generatedSettingsForPanelSelector';

import { addwordBox, wordListBox } from './styles';

export const WordList = () => {
  const dispatch = useAppDispatch();
  const { wordList } = useAppSelector(generatedSettingsForPanelSelector);
  const [word, setWord] = useState('');
  const [errorText, setErrorText] = useState('');

  useEffect(() => {
    setErrorText('');
  }, [word, wordList]);

  const handleAddWord = () => {
    const isValidWord = validateWord(word);
    const isValidWordList = validateWordList(wordList);

    if (isValidWordList) {
      setErrorText(isValidWordList);
      return;
    }

    if (isValidWord) {
      setErrorText(isValidWord);
      return;
    }

    dispatch(addWordInList({ key: uuidv4(), text: word }));
    setWord('');
  };

  return (
    <>
      <Box sx={addwordBox}>
        <TextField
          value={word}
          onChange={(e) => setWord(e.target.value)}
          fullWidth
          label="Введите слово"
          inputProps={{
            maxLength: 15,
          }}
          error={!!errorText}
          helperText={errorText}
        />
        <CommonButton
          onClick={handleAddWord}
          textForBtn="добавить"
          disabled={!!errorText}
        />
      </Box>

      {wordList.length > 0 && (
        <Box
          component="ul"
          sx={wordListBox}
        >
          {wordList.map((word) => {
            return (
              <Box
                component="li"
                key={word.key}
              >
                <Chip
                  label={word.text}
                  onDelete={() => dispatch(removeWordInList(word.key))}
                />
              </Box>
            );
          })}
        </Box>
      )}
    </>
  );
};
