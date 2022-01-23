import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/langingPage/Header'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Books</title>
      </Head>
      <div className='grid h-screen w-screen  container mx-auto my-10 '>
        <Navbar/>
        <Header/>
      </div>
    </>
  )
}
