import React from 'react'
import Style from './NavBar.module.scss'
import { Container, useMediaQuery, useDisclosure, Button, Select } from '@chakra-ui/react'
import { useRef } from 'react'
import Image from 'next/image'
import logo from "../../Assets/Vector.png"
import Link from 'next/link'

import { useTranslation } from 'react-i18next'

import Menu from '../../Assets/Icons/menu.png'

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'

import NavBarData from '@/Helpers/NavBar'

export default function NavBar() {
  const { t, i18n } = useTranslation();
  const Data = NavBarData()
  
  const [isLargerThanMobile] = useMediaQuery('(min-width: 768px)')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <div className={ Style.NavBar }>
      <Container maxW='1200px' h='100%' display="flex" justifyContent="space-between" alignItems="center">
        <div className={ Style.Logo }>
          <Link href="/">
            <Image src={ logo } alt="Logo of the Website"/>
            <h1>Speedo Services</h1>
          </Link>
        </div>
        
        {isLargerThanMobile ? (
          <ul>
            {
              Data.map((data, edx) => {
                return (
                  <li key={ edx }>
                    <Link href={ data.Link }>
                      { data.Name }
                    </Link>
                  </li>
                )
              })
            }
            <li>
            <Select placeholder={ i18n.language } paddingLeft="0" border="none" onChange={(e) => { i18n.changeLanguage(e.target.value) }}>
              {
                i18n.language === "EN" ? (<option value='FR'>FR</option>) : (<option value='EN'>EN</option>)
              }
            </Select>
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
            {
              Data.map((data, edx) => {
                return (
                  <li key={ edx }>
                    <Link href={ data.Link } onClick={onClose}>
                      { data.Name }
                    </Link>
                  </li>
                )
              })
            }
            <li>
              <Select placeholder={ i18n.language } paddingLeft="0" border="none" onChange={(e) => { i18n.changeLanguage(e.target.value), onClose() }}>
              {
                i18n.language === "EN" ? (<option value='FR'>FR</option>) : (<option value='EN'>EN</option>)
              } 
              </Select>
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