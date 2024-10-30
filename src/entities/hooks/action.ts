import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { booksActions } from "../books/model/slice";
import { saveBooksActions } from "../search/model/slice";
import { favoritesBooksActions } from "../books/model/sliceSaveBooks";

const allAction = {
  ...booksActions,
  ...saveBooksActions,
  ...favoritesBooksActions,
};
export const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allAction, dispatch);
};
