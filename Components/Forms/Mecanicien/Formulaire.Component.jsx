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
  Container
} from '@chakra-ui/react'
import wilayas from '@/Helpers/Wilayas';


export default function Formulaire({ isClient }) {
  const [Nom, setNom] = useState(null)
  const [Prenom, setPrenom] = useState(null)
  const [Adress, setadress] = useState(null)
  const [Numero, setNumero] = useState(null)
  const [TypeVM, setTypeVM] = useState(null)
  const [DescDePanne, setDescDePanne] = useState(null)
  const [PPane, setPPane] = useState(null)
  const Service = "Mecanicien"

  const [piece, set_piece] = useState(null)
  const [ZTravaille, set_ZTravaille] = useState(null)

  ////////

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

  ////////

  const SendClient = async () => {
    setSending(true)
    await axios.post('/api/NewClient', {
      Service,
      Nom,
      Prenom,
      Adress,
      Numero,
      TypeVM,
      DescDePanne,
      PPane
    }).then((result) => {
      if(!result.ok) {
        Toast('success')
      } else {
        Toast('error')
      }
      setSending(false)
    })
  }

  ////////

  const SendPartnaire = async () => {
    setSending(true)
    const formData = new FormData()

    formData.append('Service', Service)
    formData.append('Nom', Nom)
    formData.append('Prenom', Prenom)
    formData.append('Adress', Adress)
    formData.append('Numero', Numero)
    formData.append('theFiles', piece)
    formData.append('ZTravaille', ZTravaille)
   

    const config = {
      headers: { 'content-type': 'multipart/form-data' },
      onUploadProgress: (event) => {
        console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
      },
    };

    await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/Partenaire/Mecanicien`, formData, config).then((result) => {
      if(!result.ok) {
        Toast('success')
      } else {
        Toast('error')
      }
      setSending(false)
    })

  }

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
                <FormLabel>Address :</FormLabel>
                <Input type='text' onChange={(event) => { setadress(event.target.value) }}/>
              </FormControl>
              <FormControl my="15px">
                <FormLabel>Numero :</FormLabel>
                <Input type='number' onChange={(event) => { setNumero(event.target.value) }}/>
              </FormControl>
              <Select placeholder='Type De Vehicule' display="flex" alignItems="center" justifyContent="space-between" onChange={(event) => { setTypeVM(event.target.value) }}>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>
              <FormControl my="15px">
                <FormLabel>Description De Panne :</FormLabel>
                <Input type='text' onChange={(event) => { setDescDePanne(event.target.value) }}/>
              </FormControl>
              <FormControl my="15px">
                <FormLabel>Position De Panne :</FormLabel>
                <Input type='text' onChange={(event) => { setPPane(event.target.value) }}/>
              </FormControl>
              <Button isLoading={ Sending } colorScheme='teal' bg="#2296DE" variant='solid' loadingText='Loading' onClick={SendClient} my="20px">
                SEND
              </Button>

            </Container>
          ) : (
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
                <FormLabel>Address :</FormLabel>
                <Input type='text' onChange={(event) => { setadress(event.target.value) }}/>
              </FormControl>
              <FormControl my="15px">
                <FormLabel>Numero :</FormLabel>
                <Input type='number' onChange={(event) => { setNumero(event.target.value) }}/>
              </FormControl>
              <FormControl my="15px">
                <FormLabel>Piece d'identité : </FormLabel>
                <Input type="file" onChange={(event) => { set_piece(event.target.files[0]) }} border="none"/>
              </FormControl>
              <Select my="15px" placeholder='Zone de travaille' onChange={(event) => { set_ZTravaille(event.target.value) }}>
                {
                  wilayas.map((data, edx) => {
                    return (
                      <option key={edx + 1} value={data.name}>{ data.code } - { data.name }</option>
                    )
                  })
                }
              </Select>
              <Button isLoading={ Sending } colorScheme='teal' bg="#2296DE" variant='solid' loadingText='Loading' onClick={() => {
                if(piece) {
                  SendPartnaire()
                } else {
                  toast({
                    description: "Please Complete All Data !",
                    position: 'top',
                    status: 'warning',
                    duration: 5000,
                    isClosable: true,
                  })
                }
              }} my="20px">
                SEND
              </Button>
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