import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../../app/redux";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
