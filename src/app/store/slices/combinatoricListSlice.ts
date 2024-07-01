import { createSlice } from '@reduxjs/toolkit';

type TCards = {
  combinatoricList: Array<string>;
};

const initialState: TCards = {
  combinatoricList: [],
};
const combinatoricListSlice = createSlice({
  name: 'combinatoricList',
  initialState,
  reducers: {
    setComboList(state, action) {
      state.combinatoricList = [];
      state.combinatoricList = [...action.payload];
    },
  },
});

export const { setComboList } = combinatoricListSlice.actions;
export default combinatoricListSlice.reducer;
