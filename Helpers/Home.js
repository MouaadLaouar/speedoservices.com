import logo1 from '../Assets/delivery-truck.png'
import logo2 from '../Assets/moving-truck.png'
import logo3 from '../Assets/shipping.png'
import logo4 from '../Assets/mecanism.png'


const HomeData = {
    HeadLine: "Fast, Reliable Delivery Services for Any Need",
    Description: "At SpeedoServices, we know that your time is valuable. That's why we offer lightning-fast delivery services that you can depend on",
    HeadLine2: "Choose Your Services",
    Description2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit sem."
}

const CardData = [
    {
        id: 1,
        logo: logo1,
        Title: "Transport",
        Link: "/Transport"
    },
    {
        id: 2,
        logo: logo2,
        Title: "Déménagement",
        Link: "/Demenagement"
    },
    {
        id: 3,
        logo: logo3,
        Title: "Dépannage",
        Link: "/Depannage"
    },
    {
        id: 4,
        logo: logo4,
        Title: 'Mecanicien',
        Link: '/Mecanicien'
    }
]


export { HomeData, CardData } 