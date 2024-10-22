import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { EN, QQ, RU } from "./shared/model";

i18n.use(initReactI18next).init({
  resources: {
    qq: QQ, // Добавление нового языка
    en: EN,
    ru: RU,
  },
  lng: "en", // Язык по умолчанию
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
