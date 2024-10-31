import { GlobalOutlined } from "@ant-design/icons";
import { Button, Dropdown, MenuProps } from "antd";
import { FC } from "react";
import { useTranslation } from "react-i18next";

import scss from "./language.module.scss"

const items: MenuProps["items"] = [
  {
    key: "Russian",
    label: "Русский",
  },
  {
    key: " English",
    label: "English",
  },
  {
    key: "Qaraqalpaq",
    label: "Qaraqalpaq",
  },
];
export const Language: FC = () => {
  const {i18n } = useTranslation();

  const onChange: MenuProps["onClick"] = (value) => {
    i18n.changeLanguage(value.key);

  }
  const getCurrentLanguage = i18n.language;
  const getCurrentLanguageLabel = () => {
    switch (getCurrentLanguage) {
      case "Qaraqalpaq":
        return "qq";
      case "Russian":
        return "ru";
      case "English":
        return "en";
      default:
        return "en";
    }
  };

  return (
    <Dropdown menu={{ items, onClick: onChange }} placement="bottomLeft">
      <Button className={`${scss.btn} `}>
        <GlobalOutlined className={`${scss.icon} text-mediumSlateBlue`} />
        <span className={`${scss.text} text-mediumSlateBlue`}>{getCurrentLanguageLabel()}</span>
      </Button>
    </Dropdown>
  );
};
