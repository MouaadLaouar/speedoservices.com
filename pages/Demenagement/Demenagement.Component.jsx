import Style from './Demenagement.module.scss'
import { Container } from '@chakra-ui/react'
import Customer from '@/Assets/customer.png'
import Deal from '@/Assets/deal.png'
import Image from 'next/image'
import DataServices from '@/Helpers/Services'

import React from 'react'


export default function Demenagement() {
    const Title = DataServices[1].Title
    const Desc = DataServices[1].Description

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
