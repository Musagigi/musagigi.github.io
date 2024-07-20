export const validateWord = (word: string) => {
  if (word.split(' ').length > 1) {
    return 'Можно ввести только одно слово';
  }
  if (word.length === 0) {
    return 'Длина слова должна составлять от 1 до 15 символов';
  }
  return null;
};

export const validateWordList = (wordList: object[]) => {
  if (wordList.length >= 5) {
    return 'Достигнут лимит слов';
  }
  return null;
};
