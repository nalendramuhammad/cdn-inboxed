import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../public/locales/en/common.json";
import id from "../public/locales/id/common.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { common: en },
    id: { common: id },
  },
  fallbackLng: "en",
  supportedLngs: ["en", "id"],
  lng: "en",
  ns: ["common"],
  defaultNS: "common",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
