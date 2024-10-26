import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ResultData } from "../../../shared/model";

export interface BookI {
  booksData: ResultData[];
  popularBooksData: ResultData[];
  soundbooks: ResultData[];
  active_audio: string | number | null;
  for_child_books_data: ResultData[];
}

const initialState: BookI = {
  booksData: [],
  popularBooksData: [],
  soundbooks: [],
  active_audio: null,
  for_child_books_data: [],
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    getBooks: (state, action: PayloadAction<ResultData[]>) => {
      state.booksData = action.payload;
    },
    getPopularBooks: (state, action: PayloadAction<ResultData[]>) => {
      state.popularBooksData = action.payload;
    },
    getSoundBooks: (state, action: PayloadAction<ResultData[]>) => {
      state.soundbooks = action.payload;
    },
    setActiveAudio: (state, action: PayloadAction<string | number | null>) => {
      state.active_audio = action.payload;
    },
    getChildBooks: (state, action: PayloadAction<ResultData[]>) => {
      state.for_child_books_data = action.payload;
    },
  },
});
export const booksActions = booksSlice.actions;
export const booksReducer = booksSlice.reducer;
