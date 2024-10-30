import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ResultData } from "../../../shared/model";
export interface SavedBooksState {
  resultSearchData: ResultData[];
}
const initialState: SavedBooksState = {
  resultSearchData: [],
};
export const SavedBooksSlice = createSlice({
  name: "saveBooks",
  initialState,
  reducers: {
    saveResultSearch: (state, action: PayloadAction<ResultData[]>) => {
      state.resultSearchData = action.payload;
    },
  },
});
export const saveBooksActions = SavedBooksSlice.actions;
export const saveBooksReducer = SavedBooksSlice.reducer;
