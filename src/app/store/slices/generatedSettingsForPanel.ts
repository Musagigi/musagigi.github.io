import { createSlice } from '@reduxjs/toolkit';
import { TGeneratedSettingsForPanel } from 'shared/lib/types/TGeneratedSettingsForPanel';

const initialState: TGeneratedSettingsForPanel = {
  wordList: [],
  combinatoricType: 'Перестановка',
  countWordByCombinatoric: '3',
  backgroundImage: '',
  generatedList: [],
};

const generatedSettingsForPanel = createSlice({
  name: 'generatedSettingsForPanel',
  initialState,
  reducers: {
    addWordInList(state, action) {
      state.generatedList = [];
      state.wordList.push(action.payload);
    },

    removeWordInList(state, action) {
      state.generatedList = [];
      state.wordList = state.wordList.filter(
        (word) => word.key !== action.payload,
      );
    },

    setCombinatoricType(state, action) {
      state.generatedList = [];
      state.countWordByCombinatoric = '3';
      state.combinatoricType = action.payload;
    },

    setCountWordByCombinatoric(state, action) {
      state.generatedList = [];
      state.countWordByCombinatoric = action.payload;
    },

    setBackgroundImage(state, action) {
      state.backgroundImage = action.payload;
    },

    setGeneratedList(state, action) {
      state.generatedList = [];
      state.generatedList = action.payload;
    },

    replaceGeneratedSettings(state, action) {
      const {
        wordList,
        combinatoricType,
        countWordByCombinatoric,
        backgroundImage,
        generatedList,
      } = action.payload;

      state.wordList = wordList;
      state.combinatoricType = combinatoricType;
      state.countWordByCombinatoric = countWordByCombinatoric;
      state.backgroundImage = backgroundImage;
      state.generatedList = generatedList;
    },
  },
});

export const {
  addWordInList,
  removeWordInList,
  setCombinatoricType,
  setCountWordByCombinatoric,
  setBackgroundImage,
  setGeneratedList,
  replaceGeneratedSettings,
} = generatedSettingsForPanel.actions;

export default generatedSettingsForPanel.reducer;
