import React from 'react'
import Style from './NavBar.module.scss'
import { Container, useMediaQuery, useDisclosure, Button } from '@chakra-ui/react'
import { useRef } from 'react'
import Image from 'next/image'
import logo from "../../Assets/Vector.png"
import Link from 'next/link'

import Menu from '../../Assets/Icons/menu.png'

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'

export default function NavBar() {
  
  const [isLargerThanMobile] = useMediaQuery('(min-width: 768px)')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()


  return (
    <div className={ Style.NavBar }>
      <Container maxW='1200px' h='100%' display="flex" justifyContent="space-between" alignItems="center">
        <div className={ Style.Logo }>
          <Image src={ logo } alt="Logo of the Website"/>
          <h1>Speedo Services</h1>
        </div>
        
        {isLargerThanMobile ? (
          <ul>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Features</Link>
            </li>
            <li>
              <Link href="/">Pricing</Link>
            </li>
            <li>
              <Link href="/">Testimonials</Link>
            </li>
            <li>
              <Link href="/">Help</Link>
            </li>
        </ul>) : (
        <>
          <Button ref={btnRef} onClick={onOpen} colorScheme="none">
            <Image src={ Menu } alt="Menu"/>
          </Button>
          <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
          >
          <DrawerOverlay />
          <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>

          <DrawerBody>
          <ul className={ Style.MenuMobile }>
            <li>
              <Link href="/" onClick={onClose}>About</Link>
            </li>
            <li>
              <Link href="/" onClick={onClose}>Features</Link>
            </li>
            <li>
              <Link href="/" onClick={onClose}>Pricing</Link>
            </li>
            <li>
              <Link href="/" onClick={onClose}>Testimonials</Link>
            </li>
            <li>
              <Link href="/" onClick={onClose}>Help</Link>
            </li>
        </ul>
          </DrawerBody>

        </DrawerContent>
      </Drawer>
        </>
        )}
      </Container>
    </div>
  )
}