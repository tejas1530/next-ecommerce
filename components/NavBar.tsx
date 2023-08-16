import Image from 'next/image'
import React from 'react'
import logo from "../public/logo.png"
import Link from 'next/link'
import {FiShoppingCart}from"react-icons/fi"
type Props = {}

const NavBar = (props: Props) => {
  return (
    <header className='flex justify-between space-y-3 flex-col items-center md:flex-row ' >
      <div className="logo mx-5 pt-2 flex items-center w-screen sm:w-fit sm:p-3.5 justify-around ">
        <Image
        className='md:h-14 md:w-14 h-8 w-8   '
        src={logo}
        alt='logo'
        // height={10}
        // width={200}
        />
        <div className='sm:hidden'  ><FiShoppingCart className="text-xl" /></div>
      </div>
      <div className="nav">
         <ul className='flex space-x-9   ' >
            <Link href={'/'} ><li>item 1</li></Link>
            <Link href={'/'} ><li>item 2</li></Link>
            <Link href={'/'} ><li>item 3</li></Link>
            <Link href={'/'} ><li>item 4</li></Link>
         </ul>
      </div>
      <div className="cart md:mx-7 hidden sm:block  ">
        <FiShoppingCart className="text-3xl"  />
      </div>
    </header>
  )
}

export default NavBar