import Head from 'next/head'

import styles from '@/styles/Home.module.css'


export default function Home() {
  return (
    <>
      <Head>
        <title>Speedo Services</title>
        <meta name="description" content="Speedo Services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>SpeedoServices.com</h1>
      </main>
    </>
  )
}
