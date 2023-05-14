import { useTranslation } from "react-i18next";

const NavBarData = () => {
    const { t } = useTranslation();

    return [
    {
        Name: t('NavBar:menu:0'),
        Link: "/"
    },
    {
        Name: t('NavBar:menu:1'),
        Link: "/#Section2"
    },
    {
        Name: t('NavBar:menu:2'),
        Link: "/AboutUs"
    },
    {
        Name: t('NavBar:menu:3'),
        Link: "/ContactUs"
    }
]

}

export default NavBarData;