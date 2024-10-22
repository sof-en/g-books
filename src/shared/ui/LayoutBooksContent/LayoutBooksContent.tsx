import { FC } from "react";
import scss from "./style.module.scss";
interface LayoutBooksContentProps {
  children: React.ReactNode;
  text: string
}
export const LayoutBooksContent: FC<LayoutBooksContentProps> = ({
  children, text
}) => {
  return (
    <div className={scss.layout}>
      <h2>{text.toLocaleUpperCase()}</h2>
      {children}
    </div>
  );
};
