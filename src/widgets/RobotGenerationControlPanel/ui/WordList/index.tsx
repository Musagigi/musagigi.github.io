import { Box, Chip } from '@mui/material';

import {
  TWordList,
  TWordListBox,
} from 'widgets/RobotGenerationControlPanel/lib/types';
import { wordListBox } from './styles';

export const WordList = ({ wordList, setWordList }: TWordListBox) => {
  const handleDelete = (wordDelete: TWordList) => {
    setWordList(() => wordList.filter((word) => word.key !== wordDelete.key));
  };

  return (
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
              onDelete={() => handleDelete(word)}
            />
          </Box>
        );
      })}
    </Box>
  );
};
