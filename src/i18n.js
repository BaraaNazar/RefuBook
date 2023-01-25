import i18n from "i18next";
import { initReactI18next } from 'react-i18next';
import  LanguageDetector from "i18next-browser-languagedetector";
import translationEn from "./locale/en.json";
import translationAr from "./locale/ar.json";


const resources = {
  en: {
    translation: translationEn
  },
  ar: {
    translation: translationAr
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",

    interpolation: {
      escapeValue: false 
    },
    react:{
        useSuspense:false
    }
  });

  export default i18n;