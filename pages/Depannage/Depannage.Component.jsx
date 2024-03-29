import Style from './Depannage.module.scss'
import { Container } from '@chakra-ui/react'
import Customer from '@/Assets/customer.png'
import Deal from '@/Assets/deal.png'
import Image from 'next/image'
import DataServices from '@/Helpers/Services'

//Formulaire
import Formulaire from '@/Components/Forms/Depannage/Formulaire.Component'
import { useState } from 'react'


export default function Depannage() {
    const Data = DataServices();
    const Title = Data[2].Title
    const Desc = Data[2].Description
    const [isClient, setisClient] = useState(true)

  return (
    <div className={ Style.Services }>
        <Container maxW="1200px" marginTop="100px">
            <h1>{ Title }</h1>
            <p>{ Desc }</p>

            <section className={ Style.Choice }>
                <nav className={ `${isClient ? Style.Active : ''}` } onClick={() => { setisClient(true) }}>
                    <Image src={ Customer } alt="Client"/>
                    <h2>Client</h2>
                </nav>

                <nav className={ `${!isClient ? Style.Active : ''}` } onClick={() => { setisClient(false) }}>
                    <Image src={ Deal } alt="Partenaire"/>
                    <h2>Partenaire</h2>
                </nav>
            </section>

            <Formulaire isClient={ isClient } />
        </Container>
    </div>
  )
}
