import React from 'react'
import logo from "../public/logo.png"
import Image from 'next/image'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer>
      <div className="flex justify-center items-center">
<div className="bg-white items-center w-full md:max-w-7xl">
    <div
        className="flex flex-col justify-center items-center mt-3 space-y-2 md:mx-[50px] md:flex-row md:justify-between">
       
        
    </div>
    <hr className="mt-2 md:overflow-hidden" />
    <div className="grid grid-cols-2 my-3 text-center md:grid-cols-4">
        <div className="flex flex-col leading-7 items-start ml-20">
            <h1 className="text-pink-500 text-lg font-semibold">Product</h1>
            <p> <a className="text-gray-500/80 hover:text-pink-500" href="#">Features</a> </p>
            <p> <a className="text-gray-500/80 hover:text-pink-500" href="#">Integrations</a> </p>
            <p> <a className="text-gray-500/80 hover:text-pink-500" href="#">Shopify Integrations</a> </p>
            <p> <a className="text-gray-500/80 hover:text-pink-500" href="#">Pricing</a> </p>
            <p> <a className="text-gray-500/80 hover:text-pink-500" href="#">Chrome Extensions</a> </p>
        </div>
        <div className="flex flex-col leading-7">
            <h1 className="text-pink-500 text-lg font-semibold">Company</h1>
            <p> <a className="text-gray-500/80 hover:text-pink-500" href="#">Terms</a> </p>
            <p> <a className="text-gray-500/80 hover:text-pink-500" href="#">Customers</a> </p>
            <p> <a className="text-gray-500/80 hover:text-pink-500" href="#">Blog</a> </p>
            <p> <a className="text-gray-500/80 hover:text-pink-500" href="#">Terms of Service</a> </p>
            <p> <a className="text-gray-500/80 hover:text-pink-500" href="#">Privacy Policy</a> </p>
        </div>
        <div className="flex flex-col my-6 leading-7 md:my-0">
            <h1 className="text-pink-500 text-lg font-semibold">Support</h1>
            <p> <a className="text-gray-500/80 hover:text-pink-500" href="#">Community</a> </p>
            <p> <a className="text-gray-500/80 hover:text-pink-500" href="#">Support Customers</a> </p>
            <p> <a className="text-gray-500/80 hover:text-pink-500" href="#">Documentations</a> </p>
            <p> <a className="text-gray-500/80 hover:text-pink-500" href="#">Service Providers</a> </p>
            <p> <a className="text-gray-500/80 hover:text-pink-500" href="#">Email Contact</a> </p>
        </div>
        <div className="flex flex-col my-6 leading-7 md:my-0">
            <h1 className="text-pink-500 text-lg font-semibold">Contact Us</h1>
            <p> <a className="text-gray-500/80 hover:text-pink-500" href="#">Support@admin.com</a> </p>
            <p> <a className="text-gray-500/80 hover:text-pink-500" href="#">(+91)700-788-67-00</a> </p>
        </div>
    </div>
    <hr className="mt-2 md:invisible" />
    <div className="flex flex-col items-center m-5 md:flex-row md:justify-between md:mx-28"> 
    <Image
        className='md:h-14 md:w-14 h-8 w-8   '
        src={logo}
        alt='logo'
        // height={10}
        // width={200}
        />
        <div className="mt-4 text-gray-500 font-semibold"> <a className="hover:text-pink-500 tracking-wide" href="/">Here
            </a> <strong>|</strong> <a className="hover:text-pink-500 tracking-normal" href="/">Scroll on Top</a>
        </div>
    </div>
</div>
</div>
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>   
    </footer>
  )
}

export default Footer