import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '@/Layout'
import i18n from '@/i18n/i18n'
import { I18nextProvider } from 'react-i18next'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <I18nextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </I18nextProvider>
    </ChakraProvider>
  )
}
