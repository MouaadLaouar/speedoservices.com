import { useRouter } from "next/router"
import PageNotFound from "./404"
import Services from "@/Components/ServicesContent/Services.Component"
import DataServices from "@/Helpers/Services"

export default function services() {
    const router = useRouter()
    console.log(router.asPath)

    switch(router.asPath) {
        case '/Transport':
            return (
                <Services Title={ DataServices[0].Title } Desc={ DataServices[0].Description } />
            )
            break;
        case '/Demenagement':
            return (
                <Services Title={ DataServices[1].Title } Desc={ DataServices[1].Description } />
            )
            break;
        case '/Depannage':
            return (
                <Services Title={ DataServices[2].Title } Desc={ DataServices[2].Description } />
            )
            break;
        default:
            return (
                <PageNotFound />
            )
    }
}
