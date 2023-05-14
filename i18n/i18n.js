import i18n from "i18next";
import { initReactI18next } from "react-i18next";


///// EN
import NavBarEN from './locales/EN/NavBar.json';
import FooterEN from './locales/EN/Footer.json'
import HomeEN from './locales/EN/Home.json';
import AboutUsEN from './locales/EN/AboutUs.json';
import ContactUsEN from './locales/EN/ContactUs.json'
///// FR
import NavBarFR from './locales/FR/NavBar.json';
import FooterFR from './locales/FR/Footer.json'
import HomeFR from './locales/FR/Home.json';
import AboutUsFR from './locales/FR/AboutUs.json';
import ContactUsFR from './locales/FR/ContactUs.json'

const resources = {
  en: {
    NavBar: NavBarEN,
    Footer: FooterEN,
    Home: HomeEN,
    AboutUs: AboutUsEN,
    ContactUs: ContactUsEN
  },
  fr: {
    NavBar: NavBarFR,
    Footer: FooterFR,
    Home: HomeFR,
    AboutUs: AboutUsFR,
    ContactUs: ContactUsFR
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    interpolation: {
      escapeValue: false
    }
});

export default i18n;