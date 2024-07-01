export type TWordList = {
  key: number;
  text: string;
};

export type TCombinatoricsType = {
  wordList: TWordList[];
};

export type TWordListBox = Pick<TCombinatoricsType, 'wordList'> & {
  setWordList: React.Dispatch<React.SetStateAction<TWordList[]>>;
};
