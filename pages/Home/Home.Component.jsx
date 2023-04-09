import Style from "./Home.module.scss"
import { Container } from "@chakra-ui/react"
import {HomeData, CardData} from "@/Helpers/Home"
import Image from "next/image"
import Link from "next/link"


export default function Home() {
  return (
    <div className={ Style.Home }>
      <section className={ Style.Section1 }>
      <Container maxW="1200px" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <h1>{ HomeData.HeadLine }</h1>
        <p>{ HomeData.Description }</p>
        <button>Get Started</button>
      </Container>
      </section>
      <section className={ Style.Section2 }>
        <Container maxW="1200px" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <h1>{ HomeData.HeadLine2 }</h1>
          <p>{ HomeData.Description2 }</p>

          <div className={ Style.Card }>
            { CardData.map((e) => {
              return (
                <nav key={e.id}>
                  <Image src={ e.logo } alt="logo of the service"/>
                  <h3>{ e.Title }</h3>

                  <Link href={ e.Link }>Select</Link>
                </nav>
              )
            })}
          </div>
        </Container>
      </section>
    </div>
  )
}
