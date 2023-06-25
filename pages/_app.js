import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '@/Layout'
import i18n from '@/i18n/i18n'
import { I18nextProvider } from 'react-i18next'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <I18nextProvider>
        {
          process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "1" ? (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          ) : (<h1>Hors Service</h1>)
        }
      </I18nextProvider>
    </ChakraProvider>
  )
}
