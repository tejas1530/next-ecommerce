import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import { Inter } from 'next/font/google'
import homeImg from "../public/home.jpg"
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <>
      <NavBar/>
      <Image
      src={homeImg}
      alt='home image'
      />
      <Footer/>
      </>
    )
}
