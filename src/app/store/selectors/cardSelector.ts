import { RootState } from '../store';

export const cardSelector = (state: RootState) => state.cards.cards;
