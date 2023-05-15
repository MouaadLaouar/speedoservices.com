import { useTranslation } from "react-i18next";

const DataServices = () => {
    const { t } = useTranslation();
    
    return [
        {
            Title: t('Transport:HeadLine'),
            Description: t('Transport:Paragraphe')
        },
        {
            Title: t('Demenagement:HeadLine'),
            Description: t('Demenagement:Paragraphe')
        },
        {
            Title: t('Depannage:HeadLine'),
            Description: t('Depannage:Paragraphe')
        },
        {
            Title: t('GeneralServices:HeadLine'),
            Description: t('GeneralServices:Paragraphe')
        },
    ]
}

export default DataServices;