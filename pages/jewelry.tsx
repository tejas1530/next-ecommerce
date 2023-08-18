import Image from 'next/image'
import React from 'react'
import imgs from "../public/artem-beliaikin-T368H1Xvi9I-unsplash.jpg"

type Props = {}

const jewelry = (props: Props) => {
  return (
    <section className="text-gray-600 body-font  ">
    <div className="container px-5 sm:py-24 py-12 mx-auto">
      <div className="flex flex-wrap -m-4">
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg ">
          <a className="block relative h-48 rounded overflow-hidden">
            <Image alt="ecommerce" className=" m-auto sm:m-0 object-cover object-center w-full h-full block" src={imgs} width={420} height={265} />
          </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
            <p className="mt-1">$16.00</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg ">
          <a className="block relative h-48 rounded overflow-hidden">
            <Image alt="ecommerce" className="object-cover object-center w-full h-full block" src={imgs} width={420}height={265}   />
          </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
            <p className="mt-1">$21.15</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg ">
          <a className="block relative h-48 rounded overflow-hidden">
            <Image alt="ecommerce" className="object-cover object-center w-full h-full block" src={imgs} width={420}height={265}   />
          </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
            <p className="mt-1">$12.00</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg  ">
          <a className="block relative h-48 rounded overflow-hidden">
            <Image alt="ecommerce" className="object-cover object-center w-full h-full block" src={imgs} width={420} height={265}  />
          </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
            <p className="mt-1">$18.40</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a className="block relative h-48 rounded overflow-hidden">
            <Image alt="ecommerce" className="object-cover object-center w-full h-full block" src={imgs} width={420} height={265}  />
          </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
            <p className="mt-1">$16.00</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a className="block relative h-48 rounded overflow-hidden">
            <Image alt="ecommerce" className="object-cover object-center w-full h-full block" src={imgs} width={420} height={265}  />
          </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
            <p className="mt-1">$21.15</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a className="block relative h-48 rounded overflow-hidden">
            <Image alt="ecommerce" className="object-cover object-center w-full h-full block" src={imgs} width={420}height={265}   />
          </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
            <p className="mt-1">$12.00</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a className="block relative h-48 rounded overflow-hidden">
            <Image alt="ecommerce" className="object-cover object-center w-full h-full block" src={imgs}  width={420} height={265}  />
          </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
            <p className="mt-1">$18.40</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default jewelry