import { createSlice } from '@reduxjs/toolkit';

type TAuth = {
  currentToken: string | null;
  tokens: { [email: string]: { date: string; time: string } };
};

const initialState: TAuth = {
  currentToken: null,
  tokens: {},
};
const authTokenSlice = createSlice({
  name: 'authToken',
  initialState,
  reducers: {
    addToken(state, action) {
      const { email, date, time } = action.payload;

      state.currentToken = action.payload;
      state.tokens[email] = { date, time };

      localStorage.setItem('authToken', JSON.stringify(action.payload));
      localStorage.setItem('tokens', JSON.stringify(state.tokens));
    },
    removeToken(state, action) {
      localStorage.removeItem(action.payload);
      state.currentToken = null;
    },
  },
});

export const { addToken, removeToken } = authTokenSlice.actions;
export default authTokenSlice.reducer;
