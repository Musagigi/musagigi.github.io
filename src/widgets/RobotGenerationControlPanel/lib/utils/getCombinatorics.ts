type TWordList = {
  key: number | string;
  text: string;
};

export const getPermutation = (words: TWordList[]) => {
  const result: Array<string> = [];

  const recursive = (
    currentCombination: TWordList[] = [],
    remainingWords: TWordList[] = words,
  ) => {
    if (remainingWords.length === 0) {
      result.push(currentCombination.map((word) => word.text).join(''));
    } else {
      for (let i = 0; i < remainingWords.length; i++) {
        const word = remainingWords[i];
        const newRemainingWords = remainingWords.filter((w, j) => i !== j);
        recursive([...currentCombination, word], newRemainingWords);
      }
    }
  };

  recursive();
  return result;
};

export const getPlacement = (words: TWordList[], wordsCount: number) => {
  const result: string[] = [];

  const recursive = (
    currentCombination: string[] = [],
    index = 0,
    usedIndices: number[] = [],
  ) => {
    if (index === wordsCount) {
      result.push(currentCombination.join(''));
      return;
    }
    for (let i = 0; i < words.length; i++) {
      if (!usedIndices.includes(i)) {
        const word = words[i].text;
        recursive([...currentCombination, word], index + 1, [
          ...usedIndices,
          i,
        ]);
      }
    }
  };

  recursive();
  return result;
};

export const getCombination = (words: TWordList[], size: number) => {
  const result: Array<string> = [];

  const recursive = (
    currentCombination: TWordList[] = [],
    remainingWords: TWordList[] = words,
  ) => {
    if (currentCombination.length === size) {
      result.push(currentCombination.map((word) => word.text).join(''));
    } else {
      for (let i = 0; i < remainingWords.length; i++) {
        const word = remainingWords[i];
        const newRemainingWords = remainingWords.slice(i + 1);
        recursive([...currentCombination, word], newRemainingWords);
      }
    }
  };

  recursive();
  return result;
};
