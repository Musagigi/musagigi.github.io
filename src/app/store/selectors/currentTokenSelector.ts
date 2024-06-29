import { RootState } from '../store';

export const currentTokenSelector = (state: RootState) =>
  state.userToken.currentToken;
