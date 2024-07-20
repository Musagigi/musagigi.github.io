export type TGeneratedSettingsForPanel = {
  wordList: Array<{
    key: string;
    text: string;
  }>;
  combinatoricType: 'Перестановка' | 'Размещение' | 'Сочетание';
  countWordByCombinatoric: string;
  backgroundImage: 'bg1' | 'bg2' | '';
  generatedList: Array<string>;
};

export type TSavedGeneratedSettingsForPanel = {
  [email: string]: Array<TGeneratedSettingsForPanel>;
};
