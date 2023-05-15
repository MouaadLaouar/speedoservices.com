import i18n from "i18next";
import { initReactI18next } from "react-i18next";


///// EN
import NavBarEN from './locales/EN/NavBar.json';
import FooterEN from './locales/EN/Footer.json'
import HomeEN from './locales/EN/Home.json';
import AboutUsEN from './locales/EN/AboutUs.json';
import ContactUsEN from './locales/EN/ContactUs.json'
import TransportEN from "./locales/EN/Transport.json";
import GeneralServicesEN from './locales/EN/GeneralServices.json'
import DepannageEN from "./locales/EN/Depannage.json";
import DemenagementEN from "./locales/EN/Demenagement.json";
///// FR
import NavBarFR from './locales/FR/NavBar.json';
import FooterFR from './locales/FR/Footer.json'
import HomeFR from './locales/FR/Home.json';
import AboutUsFR from './locales/FR/AboutUs.json';
import ContactUsFR from './locales/FR/ContactUs.json'
import TransportFR from "./locales/FR/Transport.json";
import GeneralServicesFR from './locales/FR/GeneralServices.json'
import DepannageFR from "./locales/FR/Depannage.json";
import DemenagementFR from "./locales/FR/Demenagement.json";

const resources = {
  EN: {
    NavBar: NavBarEN,
    Footer: FooterEN,
    Home: HomeEN,
    AboutUs: AboutUsEN,
    ContactUs: ContactUsEN,
    Transport: TransportEN,
    GeneralServices: GeneralServicesEN,
    Depannage: DepannageEN,
    Demenagement: DemenagementEN
  },
  FR: {
    NavBar: NavBarFR,
    Footer: FooterFR,
    Home: HomeFR,
    AboutUs: AboutUsFR,
    ContactUs: ContactUsFR,
    Transport: TransportFR,
    GeneralServices: GeneralServicesFR,
    Depannage: DepannageFR,
    Demenagement: DemenagementFR
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "EN",

    interpolation: {
      escapeValue: false
    }
});

export default i18n;