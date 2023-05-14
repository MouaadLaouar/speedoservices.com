import React from 'react'
import {
  FormControl,
  FormLabel,
  Textarea,
  useToast,
} from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import Style from './ContactUs.module.scss'
import { ContactForm, DataContact } from '@/Helpers/ContactUs'
import { useState } from 'react'

export default function ContactUs() {

  const { Headline, Description } = DataContact();

  const [FirstName, setFirstName] = useState('')
  const [LastName, setLastName] = useState('')
  const [Email, setEmail] = useState('')
  const [Message, setMessage] = useState('')
  const [isSending, setisSending] = useState(false)

  const toast = useToast();

  const Toast = (status) => {
    toast({
      title: 'Message Envoyer',
      description: "Votre message a bien ete Envoyer !",
      position: 'top',
      status: status,
      duration: 5000,
      isClosable: true,
    })
  }

  const UpdateData = (Name, Word) => {
    switch(Name){
      case 'First Name':
        setFirstName(Word);
        break;
      case 'Last Name':
        setLastName(Word);
        break;
      case 'Email':
        setEmail(Word);
        break;
      default:
        break;
    }
  }


  const SendMessage = () => {
    setisSending(true)
    fetch(process.env.NEXT_PUBLIC_CONTACT_US_API, {
      method: "POST",
      body: JSON.stringify({
        FirstName,
        LastName,
        Email,
        Message
      }),
      headers: {
        "content-type": "application/json",
      },
    }).then((result) => {
    if(result.ok) {
      Toast('success')
    } else {
      Toast('error')
    }
    setisSending(false)
    })
  }



  return (
    <div className={ Style.ContactUs }>
      <Container maxW="1200px" h="auto">
        <h1>{ Headline }</h1>
        <p>{ Description}</p>
        <Container maxW="md">
          {
            ContactForm.map((data, edx) => {
              return (
                <FormControl key={ edx } m="20px 0px">
                  <FormLabel>{ data }</FormLabel>
                  <Input type='text' name={ data } onChange={(e) => { UpdateData(e.target.name, e.target.value) }}/>
                </FormControl>
              )
            })
          }
          <FormControl>
            <FormLabel>Message</FormLabel>
            <Textarea placeholder='' onChange={(e) => { setMessage(e.target.value )}}/>
          </FormControl>

          <nav>
            <Button isLoading={ isSending } bg="#0780BE" width="100px" onClick={SendMessage}>
              Send
            </Button>
          </nav>
        </Container>
      </Container>
    </div>
  )
}