import { Container } from "@chakra-ui/react"
import Style from './AboutUs.module.scss'

export default function AboutUs() {
  return (
    <div className={ Style.AboutUs }>
        <Container maxW="1200px" height="auto">
            <h1>About SpeedoServices: Delivering Excellence</h1>
            <p>SpeedoServices was founded with a simple goal in mind: to provide fast, reliable delivery services that exceed our customers' expectations. Since our inception, we have worked tirelessly to build a reputation as a trusted and dependable delivery partner for businesses and individuals alike. Our team is made up of experienced logistics professionals who are passionate about delivering excellence in every aspect of our business. From our cutting-edge tracking technology to our personalized customer service, we are dedicated to providing the best possible delivery experience for our clients. At SpeedoServices, we believe that success is built on strong relationships, and we are committed to earning and maintaining your trust with every delivery. Thank you for choosing SpeedoServices as your delivery partner.</p>
        </Container>
    </div>
  )
}
