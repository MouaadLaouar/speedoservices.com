import { useTranslation } from "react-i18next";

const DataContact = () => {
    const { t } = useTranslation();
    
    return {
        Headline: t('ContactUs:HeadLine'),
        Description: t('ContactUs:Description')
    }
}

const ContactForm = [
    "First Name", "Last Name", "Email"
]

export  { DataContact, ContactForm };