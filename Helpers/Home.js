import logo1 from '../Assets/delivery-truck.png'
import logo2 from '../Assets/moving-truck.png'
import logo3 from '../Assets/shipping.png'
import logo4 from '../Assets/mecanism.png'

import { useTranslation } from 'react-i18next'

const HomeData = () => {
    const { t } = useTranslation()


    return {
    //HeadLine: "Fast, Reliable Delivery Services for Any Need",
    HeadLine: t('Home:Hero:headline'),
    Description: t('Home:Hero:paragraph'),
    HeadLine2: t('Home:Services:headline'),
    Description2: t('Home:Services:paragraph')
    }
}



const CardData = () => { 
    const { t } = useTranslation();
    
    const Data = [
    {
        id: 1,
        logo: logo1,
        Title: t('Home:Services:services:0'),
        Link: "/Transport"
    },
    {
        id: 2,
        logo: logo3,
        Title: t('Home:Services:services:2'),
        Link: "/Depannage"
    },
    {
        id: 3,
        logo: logo2,
        Title: t('Home:Services:services:1'),
        Link: "/Demenagement"
    },
    {
        id: 4,
        logo: logo4,
        Title: t('Home:Services:services:3'),
        Link: '/GeneralServices'
    }
    ]

    return Data;
}


export { HomeData, CardData } 