import { Container } from "@chakra-ui/react"
import Style from './AboutUs.module.scss'
import { useTranslation } from "react-i18next"

export default function AboutUs() {
  const { t } = useTranslation();

  return (
    <div className={ Style.AboutUs }>
        <Container maxW="1200px" height="auto">
            <h1>{ t('AboutUs:HeadLine') }</h1>
            <p>{ t('AboutUs:Description') }</p>
        </Container>
    </div>
  )
}
