import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import english from './lang/english.json'
import vietnam from './lang/vietnam.json'
import enUser from './lang/enUser.json'
import vnUser from './lang/vnUser.json'
import enSetting from './lang/enSetting.json'
import vnSetting from './lang/vnSetting.json'
import enIndex from './lang/enIndex.json'
import vnIndex from './lang/vnIndex.json'
import enLogin from './lang/enLogin.json'
import vnLogin from './lang/vnLogin.json'
import enModal from './lang/enModal.json'
import vnModal from './lang/vnModal.json'

const resources = {
  English: {
    home: english,
    User: enUser,
    Setting: enSetting,
    Index: enIndex,
    Login: enLogin,
    modal: enModal,

  },

  Vietnamese: {
    home: vietnam,
    User: vnUser,
    Setting: vnSetting,
    Index: vnIndex,
    Login: vnLogin,
    modal: vnModal,

  }
 
};
const defaultNS = 'User'
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: "v3",
    resources,
    defaultNS,
    lng: "en",
    fallbackLng: "en",
    ns: ['home','user','Setting','Index','Login','modal'],
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
