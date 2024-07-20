import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authTokenReducer from './slices/authTokenSlice';
import cardsSliceReducer from './slices/сardsSlice';
import usersDataRegistrReducer from './slices/usersDataRegistrSlice';
import generatedSettingsForPanelReducer from './slices/generatedSettingsForPanel';
import savedGeneratedSettingsForPanelReducer from './slices/savedGeneratedSettingsForPanel';

const rootReducer = combineReducers({
  userToken: authTokenReducer,
  usersDataRegistr: usersDataRegistrReducer,
  cards: cardsSliceReducer,
  generatedSettingsForPanel: generatedSettingsForPanelReducer,
  savedGeneratedSettingsForPanel: savedGeneratedSettingsForPanelReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [
    'cards',
    'generatedSettingsForPanel',
    'savedGeneratedSettingsForPanel',
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
