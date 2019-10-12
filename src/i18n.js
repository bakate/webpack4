import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import commonDe from '../translations/de/common.json';
import commonEn from '../translations/en/common.json';
import commonFr from '../translations/fr/common.json';
import commonSp from '../translations/sp/common.json';
import commonCh from '../translations/ch/common.json';

i18n

  .use(Backend)

  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  .init({
    fallbackLng: 'fr',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        common: commonEn, // 'common' is our custom namespace
      },
      de: {
        common: commonDe,
      },
      fr: {
        common: commonFr,
      },
      ch: {
        common: commonCh,
      },
      sp: {
        common: commonSp,
      },
    },

    react: {
      //       bindI18n: 'languageChanged',
      //       bindI18nStore: '',
      // define which events on resourceStore should trigger a rerender
      //       transEmptyNodeValue: '',
      // how to treat failed lookups in Trans component
      transSupportBasicHtmlNodes: true,
      useSuspense: true,
    },
  });

export default i18n;
