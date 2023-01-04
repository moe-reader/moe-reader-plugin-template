import i18next from "i18next";

import zh from './zh-CN.json';
import en from './en.json';

// init i18n
const resources = {
  zh: {
    default: zh
  },
  en: {
    default: en
  },
}

i18next.init({
  lng: 'zh',
  debug: true,
  resources,
  defaultNS: 'default'
});

export default i18next;