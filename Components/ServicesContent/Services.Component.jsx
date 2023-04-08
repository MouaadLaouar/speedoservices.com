import Style from './Services.module.scss'
import { Container } from '@chakra-ui/react'
import Customer from '../../Assets/customer.png'
import Deal from '../../Assets/deal.png'
import Image from 'next/image'

export default function Services({Title, Desc}) {
  return (
    <div className={ Style.Services }>
        <Container maxW="1200px">
            <h1>{ Title }</h1>
            <p>{ Desc }</p>

            <section className={ Style.Choice }>
                <nav>
                    <Image src={ Customer } alt="Client"/>
                    <h2>Client</h2>
                </nav>

                <nav>
                    <Image src={ Deal } alt="Partenaire"/>
                    <h2>Partenaire</h2>
                </nav>
            </section>
        </Container>
    </div>
  )
}
