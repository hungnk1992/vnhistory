import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./local/en";
import vi from "./local/vi";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: en,
  vi: vi
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    interpolation: { escapeValue: false }, // React already does escaping
    resources,
    lng: 'en',
    keySeparator: false, // we do not use keys in form messages.welcome
  });

export default i18n;
