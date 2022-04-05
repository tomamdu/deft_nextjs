import Head from 'next/head'
import Image from 'next/image'

import LandingPage from '../components/Layout/LandingPage'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LandingPage/>
      
    </div>
  )
}
