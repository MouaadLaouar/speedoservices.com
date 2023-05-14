import Style from "./Home.module.scss"
import { Container } from "@chakra-ui/react"
import {HomeData, CardData} from "@/Helpers/Home"
import Image from "next/image"
import Link from "next/link"

/// i18n
import { useTranslation } from "react-i18next"


export default function Home() {
  const { t } = useTranslation();
  const { HeadLine, Description, HeadLine2, Description2 } = HomeData()
  const Data  = CardData();

  return (
    <div className={ Style.Home }>
      <section className={ Style.Section1 }>
      <Container maxW="1200px" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <h1>{ HeadLine }</h1>
        <p>{ Description }</p>
        <a href="/#Section2">Get Started</a>
      </Container>
      </section>
      <section className={ Style.Section2 } id="Section2">
        <Container maxW="1200px" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <h1>{ HeadLine2 }</h1>
          <p>{ Description2 }</p>

          <div className={ Style.Card }>
            { Data.map((e) => {
              return (
                <nav key={e.id}>
                  <Image src={ e.logo } alt="logo of the service"/>
                  <h3>{ e.Title }</h3>

                  <Link href={ e.Link }>{ t('Home:Services:button') }</Link>
                </nav>
              )
            })}
          </div>
        </Container>
      </section>
    </div>
  )
}
