import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {peopleQueries} from '../features/people/redux/slice';
import {reducer as fans} from '../features/fans/redux';

export const rootReducer = combineReducers({
  [peopleQueries.reducerPath]: peopleQueries.reducer,
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
    }).concat(peopleQueries.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
