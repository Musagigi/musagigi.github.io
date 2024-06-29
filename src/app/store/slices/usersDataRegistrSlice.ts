import { createSlice } from '@reduxjs/toolkit';

type TUsersDataRegistr = {
  userData: Array<{
    firstName: string;
    lastName: string;
    email: string;
    login: string;
    password: string;
  }>;
};

const initialState: TUsersDataRegistr = {
  userData: [],
};
const usersDataRegistrSlice = createSlice({
  name: 'usersDataRegistr',
  initialState,
  reducers: {
    addUser(state, action) {
      state.userData.push(action.payload);

      localStorage.setItem('usersDataRegistr', JSON.stringify(state.userData));
    },
  },
});

export const { addUser } = usersDataRegistrSlice.actions;
export default usersDataRegistrSlice.reducer;
