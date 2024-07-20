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
    addCards(state, action) {
      state.cards = action.payload;
    },
  },
});

export const { addCards } = cardsSlice.actions;
export default cardsSlice.reducer;
