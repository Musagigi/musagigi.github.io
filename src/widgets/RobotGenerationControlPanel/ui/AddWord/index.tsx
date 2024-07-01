import { useEffect, useState } from 'react';
import { Box, TextField } from '@mui/material';

import { TWordListBox } from 'widgets/RobotGenerationControlPanel/lib/types';
import { CommonButton } from 'shared/ui/Buttons/CommonButton';
import { validateWord, validateWordList } from './validate';

import { addwordBox } from './styles';

export const AddWord = ({ wordList, setWordList }: TWordListBox) => {
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState('');

  const [word, setWord] = useState('');
  const [wordId, setWordId] = useState(0);

  const isValidWord = validateWord(word);
  const isValidWordList = validateWordList(wordList);

  useEffect(() => {
    setError(false);
  }, [word, wordList]);

  const handleAddWord = () => {
    if (isValidWordList) {
      setErrorText(isValidWordList);
      setError(true);
      return;
    }

    if (isValidWord) {
      setErrorText(isValidWord);
      setError(true);
      return;
    }

    setWordId((prev) => prev + 1);
    setWordList((prev) => {
      return [
        ...prev,
        {
          key: wordId,
          text: word,
        },
      ];
    });
    setWord('');
  };

  return (
    <Box sx={addwordBox}>
      <TextField
        value={word}
        onChange={(e) => setWord(e.target.value)}
        fullWidth
        label="Введите слово"
        inputProps={{
          maxLength: 15,
        }}
        error={error}
        helperText={error && errorText}
      />
      <CommonButton
        onClick={handleAddWord}
        textForBtn="добавить"
        disabled={error}
      />
    </Box>
  );
};
