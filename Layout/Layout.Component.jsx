import React from 'react'
import Head from 'next/head'
import Footer from '@/Components/Footer'
import NavBar from '@/Components/NavBar'

export default function Layout({ children }) {
  return (
    <>
    <Head>
        <title>Speedo Services</title>
        <meta name="description" content="Speedo Services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />


    </Head>
    <main>
        <NavBar />
        { children }
    </main>
    <Footer />
    </>
  )
}
