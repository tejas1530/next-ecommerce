import Image from 'next/image'
import React from 'react'
import logo from "../public/1146.jpg"
type Props = {}

const NavBar = (props: Props) => {
  return (
    <header className='flex justify-between ' >
      <div className="logo">
        <Image
        className='h-14'
        src={logo}
        alt='logo'
        height={10}
        width={200}
        />
      </div>
      <div className="nav">
         <ul className='flex' >
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
         </ul>
      </div>
      <div className="cart">
        <button>cart</button>
      </div>
    </header>
  )
}

export default NavBar