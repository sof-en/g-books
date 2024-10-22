import { FC } from "react";
// import scss from "./popularbooks.module.scss";
import { PopularBooksCart } from "../../features";
import { LayoutBooksContent } from "../../shared/ui";
export const PopularBooks: FC = () => {
  return (
    <LayoutBooksContent text="Popular Books">
      <PopularBooksCart />
    </LayoutBooksContent>
  );
};
