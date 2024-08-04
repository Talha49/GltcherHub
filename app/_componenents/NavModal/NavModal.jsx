"use client"
import React, { useState } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import { IoHomeOutline } from "react-icons/io5";
import { SiBloglovin } from "react-icons/si";
import { RiContactsLine } from "react-icons/ri";
import { MdOutlineRoundaboutLeft } from "react-icons/md";
import Dialog from '../Dialog/Dialog';
import Link from 'next/link';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Source from '../Source/Source';


const NavModal = ({onClose}) => {

   
    const [isOpen, setIsOpen] = useState(false);
    const [openAbout, setOpenAbout] = useState(false)
    const [openContact, setOpenContact] = useState(false)
    const [openSource, setOpenSource] = useState(false)
  return (
    <div className='py-4 px-2 '>

        <div className='flex items-center justify-between border-b pb-1'>
              <h1>TG BLOGS</h1>
              <button onClick={onClose} className='text-xl'><RiCloseCircleLine /></button>

        </div>
        <div className="flex flex-col w-50 h-full px-4 py-8  bg-white border-r dark:bg-gray-900 dark:border-gray-700">

  <div className="flex flex-col items-center mt-6 -mx-2">
    <img
      className="object-cover w-24 h-24 mx-2 rounded-full"
      src='/t.jpg'
      alt="avatar"
    />
    <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">Talha Ghauri</h4>
    <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">ghaurit82@gmail.com</p>
  </div>

  <div className="flex flex-col justify-between flex-1 mt-6">
    <nav>
      <Link href='/' className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200" >
      <IoHomeOutline />



        <span className="mx-4 font-medium">Home</span>
      </Link>

      <Link href="/Blogs" className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" >
        <SiBloglovin />

        <span className="mx-4 font-medium">Blogs</span>
      </Link>

 
      <Link  onClick={() => {
        setOpenAbout(true) 
        setIsOpen(false)
    }
    } href='' className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" >
        <MdOutlineRoundaboutLeft />

        <span className="mx-4 font-medium">About</span>
      </Link>
      <Link 
      onClick={() => {
        setOpenContact(true) 
        setIsOpen(false)
    }}
      
      href='' className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
      <RiContactsLine/>

        <span className="mx-4 font-medium">Contact</span>
      </Link>
      <Link 
      onClick={() => {
        setOpenSource(true) 
        setIsOpen(false)
    }}
      
      href='' className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
      <RiContactsLine/>

        <span className="mx-4 font-medium ">Source Codes</span>
      </Link>

    </nav>
  </div>
</div>
<Dialog
        isOpen={openAbout}
        onClose={() => {
          setOpenAbout(false);
        }}
        widthClass="md:w-[900px] w-[500px]" isLeft={false} withBlur={true} padding='p-4 pt-3'
      >
        <div><About onClose={() =>setOpenAbout(false)}/></div>
      </Dialog> 

      <Dialog
        isOpen={openContact}
        onClose={() => {
          setOpenContact(false);
        }}
        widthClass="md:w-[1280px] w-[500px]" isLeft={false} withBlur={true} padding='p-4 pt-3'
      >
        <div><Contact onClose={() =>setOpenContact(false)}/></div>
      </Dialog> 
      <Dialog
        isOpen={openSource}
        onClose={() => {
          setOpenSource(false);
        }}
        widthClass="md:w-[1280px] w-[500px]" isLeft={false} withBlur={true} padding='p-4 pt-3'
      >
        <div><Source onClose={() =>setOpenSource(false)}/></div>
      </Dialog> 

    </div>
  )
}

export default NavModal