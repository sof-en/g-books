import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { api } from "../../shared/api";
import storage from "redux-persist/lib/storage";
import {  booksSlice, FavoritesBooksSlice, SavedBooksSlice } from "../../entities";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  [SavedBooksSlice.name]: SavedBooksSlice.reducer,
  [booksSlice.name]: booksSlice.reducer,
  [FavoritesBooksSlice.name]: FavoritesBooksSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: [SavedBooksSlice.name, FavoritesBooksSlice.name],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Правильная конфигурация хранилища
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware),
});

export const persistor = persistStore(store);

// Типы для корневого состояния и диспетчера
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
