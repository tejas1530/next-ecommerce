import Image from 'next/image'
import React from 'react'
import logo from "../public/logo.png"
import Link from 'next/link'
import {FiShoppingCart}from"react-icons/fi"
type Props = {}

const NavBar = (props: Props) => {
  return (
    <header className='flex justify-between space-y-3 flex-col items-center md:flex-row shadow-lg py-2 ' >
      <div className="logo mx-5 pt-2 flex items-center w-screen sm:w-fit sm:p-3.5 justify-around ">
       <Link href={"/"} > <Image
        className='md:h-14 md:w-14 h-8 w-8   '
        src={logo}
        alt='logo'
        // height={10}
        // width={200}
        /></Link>
        <div className='sm:hidden'  ><FiShoppingCart className="text-xl" /></div>
      </div>
      <div className="nav">
         <ul className='flex space-x-9   ' >
            <Link href={'/kurtis'} ><li>Kurtis</li></Link>
            <Link href={'/jewelry'} ><li>Jewelry</li></Link>
            <Link href={'/gowns'} ><li>Gowns</li></Link>
            <Link href={'/palazzoSuits'} ><li>Palazzo Suits</li></Link>
         </ul>
      </div>
      <div className="cart md:mx-7 hidden sm:block  ">
        <FiShoppingCart className="text-3xl"  />
      </div>
    </header>
  )
}

export default NavBar