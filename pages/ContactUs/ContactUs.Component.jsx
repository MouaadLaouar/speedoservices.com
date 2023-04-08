import React from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'

import { Input } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'

export default function ContactUs() {
  return (
    <div className='ContactUs'>
      <Container maxW="1200px" h="80vh">
      <FormControl>
        <FormLabel>First Name</FormLabel>
          <Input type='text' />
        <FormHelperText>First Name</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel>Last Name</FormLabel>
          <Input type='text' />
        <FormHelperText>Last Name</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel>Email</FormLabel>
          <Input type='text' />
        <FormHelperText>EMail</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel>Message</FormLabel>
          <Input type='text' />
        <FormHelperText>Message</FormHelperText>
      </FormControl>
      </Container>
    </div>
  )
}