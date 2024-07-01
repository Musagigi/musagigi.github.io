import { createSlice } from '@reduxjs/toolkit';

type TCards = {
  cards: Array<string>;
};

const initialState: TCards = {
  cards: [],
};
const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard(state, action) {
      state.cards = [];
      state.cards = [...action.payload];
    },
  },
});

export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;
