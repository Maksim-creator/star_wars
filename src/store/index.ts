import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {peopleSlice} from '../features/people/redux/slice';
import {reducer as fans} from '../features/fans/redux';

export const rootReducer = combineReducers({
  [peopleSlice.reducerPath]: peopleSlice.reducer,
  fans,
});

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
export const store = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducer),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: true,
      serializableCheck: false,
    }).concat(peopleSlice.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
