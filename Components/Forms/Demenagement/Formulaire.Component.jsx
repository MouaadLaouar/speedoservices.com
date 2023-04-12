import Style from './Formulaire.module.scss';
import { useState } from 'react';
import axios from 'axios';
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  useToast,
  Button,
  Switch,
  Container
} from '@chakra-ui/react'


export default function Formulaire({ isClient }) {
  const [Nom, setNom] = useState(null)
  const [Prenom, setPrenom] = useState(null)
  const [Adress, setadress] = useState(null)
  const [Numero, setNumero] = useState(null)
  const [Destination, setDestination] = useState(null)
  const [Vehicule, setVehicule] = useState(null)
  const [BesoinDequipeDaide, setBesoinDequipeDaide] = useState(null)
  const Service = "Déménagement"

  ////
  const toast = useToast();
  const [Sending, setSending] = useState(false)
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
  ////

  const SendClient = async () => {
    setSending(true)
    await axios.post('/api/NewClient', {
      Service,
      Nom,
      Prenom,
      Adress,
      Numero,
      Destination,
      Vehicule,
      BesoinDequipeDaide
    }).then((result) => {
      if(!result.ok) {
        Toast('success')
      } else {
        Toast('error')
      }
      setSending(false)
    })
  }
  /////

  return (
    <div className={ Style.Formulaire }>
        {
          isClient ? (
            <Container marginTop="100px" textAlign="center">
              <FormControl my="10px">
                <FormLabel>Nom :</FormLabel>
                <Input type='text' onChange={(event) => { setNom(event.target.value) }}/>
              </FormControl>
              <FormControl my="15px">
                <FormLabel>Prenom :</FormLabel>
                <Input type='text' onChange={(event) => { setPrenom(event.target.value) }}/>
              </FormControl>
              <FormControl my="15px">
                <FormLabel>Adress :</FormLabel>
                <Input type='text' onChange={(event) => { setadress(event.target.value) }}/>
              </FormControl>
              <FormControl my="15px">
                <FormLabel>Numero :</FormLabel>
                <Input type='number' onChange={(event) => { setNumero(event.target.value) }}/>
              </FormControl>
              <FormControl my="15px">
                <FormLabel>Destination :</FormLabel>
                <Input type='text' onChange={(event) => { setDestination(event.target.value) }}/>
              </FormControl>
              <Select placeholder='Vehicule' display="flex" alignItems="center" justifyContent="space-between" onChange={(event) => { setVehicule(event.target.value) }}>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>
              <FormControl display='flex' alignItems='center' my="15px">
                <FormLabel htmlFor='email-alerts' mb='0'>
                  Besoin D'equipe D'aide ?
                </FormLabel>
                <Switch id='email-alerts' onChange={(event) => { setBesoinDequipeDaide(event.target.checked) }}/>
              </FormControl>
              <Button isLoading={ Sending } colorScheme='teal' variant='solid' loadingText='Loading' onClick={SendClient} my="20px">
                SEND
              </Button>

            </Container>
          ) : (
            <Container>
              <h1>
                Partnair
              </h1>
            </Container>
          )
        }
    </div>
  )
}
// Client

// Nom
// Prenom,
// Adress,
// Numero,
// Marchandise,
// Type de vahicule


// Partnaire

// Nom
// Prenom,
// Adress,
// Numero,

// import 4 picture
// -> cart geris 
// -> permis 
// -> inssurence 
// -> register de comerce 

// type de vehicule

// tonage

// [] check box () // if ther ea chauufeur work with the partnaire
// Nom,
// Prenom,
// permis,
// numero