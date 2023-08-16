import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
       <Head>
        <title>Next-ECommerce</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <NavBar/>

      <Component {...pageProps} />
      <Footer/>
    </>
  )
}
