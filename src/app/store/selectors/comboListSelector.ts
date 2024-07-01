import { RootState } from '../store';

export const comboListSelector = (state: RootState) =>
  state.comboList.combinatoricList;
