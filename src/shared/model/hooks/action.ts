import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { booksActions, saveBooksActions } from "../../../entities";
const allAction = {
  ...booksActions,
  ...saveBooksActions,
};
export const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allAction, dispatch);
};
