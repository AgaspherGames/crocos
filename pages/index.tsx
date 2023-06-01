import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/app/components/Header/Header'
import NavBar from '@/app/components/NavBar/NavBar'
import Main from '@/app/pages/Main/Main'
import Search from '@/app/pages/Search/Search'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header/>
        <NavBar/>
        {/* <Main/> */}  
        <Search/>
      </div>
    </>
  )
}