import Style from './Footer.module.scss'
import { Container } from '@chakra-ui/react'
import Image from 'next/image'
import logo from '../../Assets/Vector.png'
import Link from 'next/link'

import Facebook from '../../Assets/Icons/icons8-facebook.svg'
import Instagram from '../../Assets/Icons/icons8-instagram.svg'
import Linkedin from '../../Assets/Icons/icons8-linkedin.svg'

import { useTranslation } from 'react-i18next'



export default function Footer() {
  const { t } = useTranslation();

  return (
    <div className={ Style.Footer }>
      <Container maxW="1200px">
        <div className={ Style.Content }>
          <div className={ Style.Left}>
            <nav>
              <Link href='/'>
                <Image src={ logo } alt="Logo of the Website"/>
                <h1>Speedo Services</h1>
              </Link>
            </nav>
            <p>{ t('Footer:paragraph') }</p>
            <div className={ Style.Icons }>
              <Link href="/">
                <Image src={ Facebook } alt="Facebook Url"/>
              </Link>
              <Link href="/">
                <Image src={ Instagram } alt="Instagram Url"/>
              </Link>
              <Link href="/">
                <Image src={ Linkedin } alt="Linkedin Url"/>
              </Link>
            </div>
          </div>

          <div className={ Style.Right }>
            <div>
              <h1>{ t('Footer:Headlines:Services') }</h1>
              <ul>
                <li>
                  <Link href="/Transport">
                  { t('Footer:Services:0') }
                  </Link>
                </li>
                <li>
                  <Link href="/Demenagement">
                  { t('Footer:Services:1') }
                  </Link>
                </li>
                <li>
                  <Link href="/Depannage">
                  { t('Footer:Services:2') }
                  </Link>
                </li>
                <li>
                  <Link href="/GeneralServices">
                  { t('Footer:Services:3') }
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h1>
                { t('Footer:Headlines:Engage') }
              </h1>
              <ul>
                <li>
                  <Link href="/AboutUs">
                  { t('Footer:Engage:0') }
                  </Link>
                </li>
                <li>
                  <Link href="/ContactUs">
                  { t('Footer:Engage:1') }
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        </div>
        <h3>2023 © - all rights reserved</h3>
      </Container>
    </div>
  )
}
