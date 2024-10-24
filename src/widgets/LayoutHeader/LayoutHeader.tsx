import { FC } from "react";
import scss from "./layoutHeader.module.scss";
import { Logo } from "../../shared/ui";
import { Language, Search } from "../../features";

export const LayoutHeader: FC = () => {
  return (
    <div className={scss.layout_header}>
      <Logo />
      <Search />
      <div>
        <Language />
      </div>
    </div>
  );
};
