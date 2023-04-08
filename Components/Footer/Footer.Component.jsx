import Style from './Footer.module.scss'
import { Container } from '@chakra-ui/react'
import Image from 'next/image'
import logo from '../../Assets/Vector.png'
import Link from 'next/link'

import Facebook from '../../Assets/Icons/facebook.png'
import Instagram from '../../Assets/Icons/instagram.png'
import Linkedin from '../../Assets/Icons/linkedin.png'



export default function Footer() {
  return (
    <div className={ Style.Footer }>
      <Container maxW="1200px">
        <div className={ Style.Content }>
          <div className={ Style.Left}>
            <nav>
              <Image src={ logo } alt="Logo of the Website"/>
              <h1>Speedo Services</h1>
            </nav>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus.</p>
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
              <h1>Services</h1>
              <ul>
                <li>
                  <Link href="/Transport">
                    Transport
                  </Link>
                </li>
                <li>
                  <Link href="/Demenagement">
                    Déménagement
                  </Link>
                </li>
                <li>
                  <Link href="/Depannage">
                    Dépannage
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h1>Engage</h1>
              <ul>
                <li>
                  <Link href="/">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/ContactUs">
                    Contact Us
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
