import "@formatjs/intl-getcanonicallocales/polyfill";
import "@formatjs/intl-locale/polyfill-force";

import "@formatjs/intl-numberformat/polyfill-force";
import "@formatjs/intl-numberformat/locale-data/de";
import "@formatjs/intl-numberformat/locale-data/en";
import "@formatjs/intl-numberformat/locale-data/es";
import "@formatjs/intl-numberformat/locale-data/fr";
import "@formatjs/intl-numberformat/locale-data/it";
import "@formatjs/intl-numberformat/locale-data/ja";
import "@formatjs/intl-numberformat/locale-data/ko";
import "@formatjs/intl-numberformat/locale-data/ru";

import "@formatjs/intl-pluralrules/polyfill-force";
import "@formatjs/intl-pluralrules/locale-data/de";
import "@formatjs/intl-pluralrules/locale-data/en";
import "@formatjs/intl-pluralrules/locale-data/es";
import "@formatjs/intl-pluralrules/locale-data/fr";
import "@formatjs/intl-pluralrules/locale-data/it";
import "@formatjs/intl-pluralrules/locale-data/ja";
import "@formatjs/intl-pluralrules/locale-data/ko";
import "@formatjs/intl-pluralrules/locale-data/ru";

import "@formatjs/intl-datetimeformat/polyfill-force";
import "@formatjs/intl-datetimeformat/locale-data/de";
import "@formatjs/intl-datetimeformat/locale-data/en";
import "@formatjs/intl-datetimeformat/locale-data/es";
import "@formatjs/intl-datetimeformat/locale-data/fr";
import "@formatjs/intl-datetimeformat/locale-data/it";
import "@formatjs/intl-datetimeformat/locale-data/ja";
import "@formatjs/intl-datetimeformat/locale-data/ko";
import "@formatjs/intl-datetimeformat/locale-data/ru";
import "@formatjs/intl-datetimeformat/add-all-tz"; // Add ALL tz data

import "@formatjs/intl-relativetimeformat/polyfill-force";
import "@formatjs/intl-relativetimeformat/locale-data/de";
import "@formatjs/intl-relativetimeformat/locale-data/en";
import "@formatjs/intl-relativetimeformat/locale-data/es";
import "@formatjs/intl-relativetimeformat/locale-data/fr";
import "@formatjs/intl-relativetimeformat/locale-data/it";
import "@formatjs/intl-relativetimeformat/locale-data/ja";
import "@formatjs/intl-relativetimeformat/locale-data/ko";
import "@formatjs/intl-relativetimeformat/locale-data/ru";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";

import de from "./i18n/de.json";
import en from "./i18n/en.json";
import es from "./i18n/es.json";
import fr from "./i18n/fr.json";
import it from "./i18n/it.json";
import ja from "./i18n/ja.json";
import ko from "./i18n/ko.json";
import ru from "./i18n/ru.json";

const resources = {
  de: { translation: de },
  en: { translation: en },
  es: { translation: es },
  fr: { translation: fr },
  it: { translation: it },
  ja: { translation: ja },
  ko: { translation: ko },
  ru: { translation: ru },
};

const locale =
  Localization.locale.search(/-|_/) !== -1
    ? Localization.locale.slice(0, 2)
    : Localization.locale;
console.log(locale);
i18n.use(initReactI18next).init({
  resources,
  lng: locale,
  fallbackLng: "en",
});

export default i18n;
