import { FC } from "react";
import scss from "./layoutHeader.module.scss";
import { Logo } from "../../shared/ui";
import { Language, Save, Search } from "../../features";

export const LayoutHeader: FC = () => {
  return (
    <div className={scss.layout_header}>
      <Logo />
      <div className={scss.layout_header_right}>
        <Search />
        <Save />
        <Language />
      </div>
    </div>
  );
};
