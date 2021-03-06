import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationsEN from "./locales/en/translations.json";
import translationsGH from "./locales/gh/translations.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationsEN,
      },
      gh: {
        translation: translationsGH,
      },
    },
    lng: "en",
    fallbackLng: "go",
    debug: true,
    detection: {
      order: ["queryString", "cookie"],
      cache: ["cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
  })
  .then((r) => console.log(r));

export default i18n;
