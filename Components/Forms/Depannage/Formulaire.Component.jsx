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
  Container,
  Switch
} from '@chakra-ui/react'


export default function Formulaire({ isClient }) {
  const [Nom, setNom] = useState(null)
  const [Prenom, setPrenom] = useState(null)
  const [Adress, setadress] = useState(null)
  const [Numero, setNumero] = useState(null)
  const [PActuelle, setPActuelle] = useState(null)
  const [PDisitination, setPDisitination] = useState(null)
  const [TypeVD, setTypeVD] = useState(null)
  const Service = "Dépannage"

  //////////////
  const [Cart_Gris, set_Cart_Gris] = useState(null)
  const [Permis, set_Permis] = useState(null)
  const [Register_De_Commerce, set_Register_De_Commerce] = useState(null)

  /////////////////
  const [Nom_Chauffeur, setNom_CHauffeur] = useState(null)
  const [Prenom_Chauffeur, setPrenom_Chauffeur] = useState(null)
  const [Adress_Chauffeur, setadress_Chauffeur] = useState(null)
  const [Numero_Chauffeur, setNumero_Chauffeur] = useState(null)

  const [Chauffeur, setChauffeur] = useState(false)
  ///////////////////////////

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
      PActuelle,
      PDisitination,
      TypeVD
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

  const SendPartnaire = async () => {
    setSending(true)
    const formData = new FormData()

    formData.append('Service', Service)
    formData.append('Nom', Nom)
    formData.append('Prenom', Prenom)
    formData.append('Adress', Adress)
    formData.append('Numero', Numero)
    formData.append('TypeVD', TypeVD)
    formData.append('theFiles', Cart_Gris)
    formData.append('theFiles', Permis)
    formData.append('theFiles', Register_De_Commerce)
    formData.append('Nom_Chauffeur', Nom_Chauffeur)
    formData.append('Prenom_Chauffeur', Prenom_Chauffeur)
    formData.append('Adress_Chauffeur', Adress_Chauffeur)
    formData.append('Numero_Chauffeur', Numero_Chauffeur)

    const config = {
      headers: { 'content-type': 'multipart/form-data' },
      onUploadProgress: (event) => {
        console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
      },
    };

    await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/Partenaire/Depannage`, formData, config).then((result) => {
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
              <FormControl my="15px">
                <FormLabel>Position Actuelle :</FormLabel>
                <Input type='text' onChange={(event) => { setPActuelle(event.target.value) }}/>
              </FormControl>
              <FormControl my="15px">
                <FormLabel>Position De Disitination :</FormLabel>
                <Input type='text' onChange={(event) => { setPDisitination(event.target.value) }}/>
              </FormControl>
              <Select placeholder='Type De Vehicule' display="flex" alignItems="center" justifyContent="space-between" onChange={(event) => { setTypeVD(event.target.value) }}>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>
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
                <FormLabel>Carte Gris : </FormLabel>
                <Input type="file" onChange={(event) => { set_Cart_Gris(event.target.files[0]) }} border="none"/>
              </FormControl>
              <FormControl my="15px">
                <FormLabel>Permis : </FormLabel>
                <Input type="file" onChange={(event) => { set_Permis(event.target.files[0]) }} border="none"/>
              </FormControl>
              <FormControl my="15px">
                <FormLabel>Register De Commerce : </FormLabel>
                <Input type="file" onChange={(event) => { set_Register_De_Commerce(event.target.files[0]) }} border="none"/>
              </FormControl>
              <Select placeholder='Type de Vehicule' display="flex" alignItems="center" justifyContent="space-between" onChange={(event) => { setTypeVD(event.target.value) }}>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>
              <FormControl display='flex' alignItems='center'>
                <FormLabel htmlFor='email-alerts' mb='0'>
                  Vous avez un chauffeur ?
                </FormLabel>
                <Switch id='email-alerts' onChange={(event) => { setChauffeur(event.target.checked) }}/>
              </FormControl>
              {
                Chauffeur ? (
                  <>
                  <FormControl my="15px">
                    <FormLabel>Nom Du Chauffeur : </FormLabel>
                    <Input type="text" onChange={(event) => { setNom_CHauffeur(event.target.value) }}/>
                  </FormControl>
                  <FormControl my="15px">
                    <FormLabel>Prenom Du Chauffeur : </FormLabel>
                    <Input type="text" onChange={(event) => { setPrenom_Chauffeur(event.target.value) }}/>
                  </FormControl>
                  <FormControl my="15px">
                    <FormLabel>Adress Du Chauffeur : </FormLabel>
                    <Input type="text" onChange={(event) => { setadress_Chauffeur(event.target.value) }}/>
                  </FormControl>
                  <FormControl my="15px">
                    <FormLabel>Numero Du Chauffeur : </FormLabel>
                    <Input type="text" onChange={(event) => { setNumero_Chauffeur(event.target.value) }}/>
                  </FormControl>
                  </>
                  
                ) : ('')
              }
              <Button isLoading={ Sending } colorScheme='teal' bg="#2296DE" variant='solid' loadingText='Loading' onClick={() => {
                if(Cart_Gris && Permis && Register_De_Commerce) {
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