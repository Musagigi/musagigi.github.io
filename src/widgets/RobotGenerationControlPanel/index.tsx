import { useState } from 'react';
import { Paper, Typography } from '@mui/material';

import { AddWord } from './ui/AddWord';
import { WordList } from './ui/WordList';
import { CombinatoricsType } from './ui/CombinatoricsType';

import { TWordList } from './lib/types';
import { CONTROL_PANEl } from './lib/constans';
import { controlPanelBox } from './styles';

export const RobotGenerationControlPanel = () => {
  const [wordList, setWordList] = useState<TWordList[]>([]);

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
      <AddWord
        wordList={wordList}
        setWordList={setWordList}
      />
      {wordList.length > 0 && (
        <WordList
          wordList={wordList}
          setWordList={setWordList}
        />
      )}
      <CombinatoricsType wordList={wordList} />
    </Paper>
  );
};
