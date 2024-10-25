import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { booksActions, favoritesBooksActions, saveBooksActions } from "../../../entities";
const allAction = {
  ...booksActions,
  ...saveBooksActions,
  ...favoritesBooksActions
};
export const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allAction, dispatch);
};
