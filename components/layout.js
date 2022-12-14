import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from './navbar';
import Footer from './footer';

const name = 'SavageCabbage'
const siteTitle = "Cabbage's blog"

export default function Layout({ children }) {
  return (
    <div className='flex flex-col h-screen'>
      <Head>
        <link rel="icon" href="/pfp.jpg" />
        <meta
          name="description"
          content="Cabbage's blog"
        />
        <title>Cabbage</title>
      </Head>
      <Navbar/>
      <main className='grow overflow-auto'>{children}</main>
      <Footer/>
    </div>
  )
}
