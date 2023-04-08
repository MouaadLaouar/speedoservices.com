import React from 'react'
import Style from './ContactUs.module.scss'
import { Html, Head, Body, Text } from '@react-email/components'

export default function ContactUs({ Data }) {
    const {FirstName, LastName, Email, Message } = Data;

  return (
    <>
    <Html>
      <Head>
        <h1>New Message to Us</h1>
      </Head>
      <Body>
        <Text className={ Style.TextH2 }>
          <h2>From : {`${ FirstName } ${ LastName }`}</h2>
        </Text>
        <Text>
          <h3>Email : { Email }</h3>
        </Text>
        <Text>
          <p>{ Message }</p>
        </Text>
      </Body>
    </Html>
    
    </>
  )
}
