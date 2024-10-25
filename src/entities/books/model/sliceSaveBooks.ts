import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ResultData } from "../../../shared/model";

export interface FavoritesBooksState {
  favBooks: ResultData[];
  FavoriteBooksId: (number | string)[];
}

const initialState: FavoritesBooksState = {
  favBooks: [],
  FavoriteBooksId: [],
};

export const FavoritesBooksSlice = createSlice({
  name: "favoritesBooks",
  initialState,
  reducers: {
    saveFavBooks: (state, action: PayloadAction<ResultData>) => {
      if (!state.FavoriteBooksId.includes(action.payload.id)) {
        state.favBooks.push(action.payload);
        state.FavoriteBooksId.push(action.payload.id);
      }
    },
    deleteFavBooks: (state, action: PayloadAction<ResultData>) => {
      state.favBooks = state.favBooks.filter(
        (item) => item.id !== action.payload.id
      );
      state.FavoriteBooksId = state.FavoriteBooksId.filter(
        (item) => item !== action.payload.id
      );
    },
  },
});
export const favoritesBooksActions = FavoritesBooksSlice.actions;
export const favoritesBooksReducer = FavoritesBooksSlice.reducer;