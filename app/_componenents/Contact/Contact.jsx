"use client"
import React,{useState} from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { RiCloseLargeFill } from 'react-icons/ri'
import { FaMapMarkerAlt, FaPhoneAlt, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

const Contact = ({onClose}) => {
  return (
    <div>
        <div className='flex justify-between p-2 border-b sticky top-0  bg-white'>
        
        <div className='text-center  flex  justify-center items-center'>
  <p>Home</p>
  <IoIosArrowForward size={20} className='text-gray-500' />
  <p>Conatct</p>
  <IoIosArrowForward size={20} className='text-gray-500' />
</div>
<button onClick={onClose}><RiCloseLargeFill size={25} /></button>

      </div>
    


    <div className="flex justify-center items-center  bg-white">
      <div className="container mx-auto my-4 px-4 lg:px-20">
        <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
          <div className="flex">
            <h1 className="font-bold uppercase text-5xl">Send me a <br /> message</h1>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="First Name*"
            />
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Last Name*"
            />
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email*"
            />
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="number"
              placeholder="Phone*"
            />
          </div>
          <div className="my-4">
            <textarea
              placeholder="Message*"
              className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="my-2 w-1/2 lg:w-1/4">
            <button className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
              Send Message
            </button>
          </div>
        </div>

        <div
          className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-blue-900 rounded-2xl"
        >
          <div className="flex flex-col text-white">
            <h1 className="font-bold uppercase text-4xl my-4">Drop in our office</h1>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt arcu diam, eu feugiat felis
              fermentum id. Curabitur vitae nibh viverra, auctor turpis sed, scelerisque ex.
            </p>

            <div className="flex my-4 w-2/3 lg:w-1/2">
              <div className="flex flex-col">
                <FaMapMarkerAlt className="pt-2 pr-2" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl">Main Office</h2>
                <p className="text-gray-400">5555 Tailwind RD, Pleasant Grove, UT 73533</p>
              </div>
            </div>

            <div className="flex my-4 w-2/3 lg:w-1/2">
              <div className="flex flex-col">
                <FaPhoneAlt className="pt-2 pr-2" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl">Call Us</h2>
                <p className="text-gray-400">Tel: xxx-xxx-xxx</p>
                <p className="text-gray-400">Fax: xxx-xxx-xxx</p>
              </div>
            </div>

            <Link
                 href={''}
                target="_blank"
                className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"
              >
                <FaLinkedinIn className="text-blue-900" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
          <div>
            <Link
            href={''}
              to="https://www.buymeacoffee.com/Dekartmc"
              target="_blank"
              className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
            >
              <img
                className="object-cover object-center w-full h-full rounded-full"
                src="https://img.icons8.com/emoji/48/000000/pizza-emoji.png"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}




export default Contact