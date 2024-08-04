import React from 'react'
import SideBar from '../Dialog/Dialog'
import Image from 'next/image'

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center md:space-x-10 gap-y-8 md:px-20 px-10 py-10">
    <div className="lg:text-[10rem] md:text-[7rem] text-[3rem] font-bold">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Gli</span>
      <span className="text-gray-400">tch</span>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">er</span>
      <span className="text-gray-400">Hu</span>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">b</span>


    </div>

<div className='grid md:grid-cols-2 grid-cols-1 justify-center md:gap-10 space-y-10 items-center '>
    <div className="  ">
      <h1 className="text-2xl font-semibold">Hello! I'm <span className="text-gray-900">Talha</span> {""}
      <span className="text-gray-400">Ghauri</span>, I Provide</h1>

      <h2 className="mt-2 text-xl font-semibold">Newest News Update About Digital</h2>
      <p className="mt-4 text-gray-600 ">
        A small river named Duden flows by their place and supplies it with the necessary
        regelialia. It is a paradisematic country, in which roasted parts of sentences fly into
        your mouth.
      </p>
    </div>

    <div className="flex flex-col  ">
      <div>
        <Image
          className="object-cover w-20 h-20 rounded-full"
          src="/t.jpg"
          alt="Giller Moose"
          width={86}
          height={86}
        />
      </div>
      <div>
        <h4 className="text-lg font-medium text-gray-500">Talha Ghauri</h4>
        <p className="mt-1 text-gray-600">
        Transforming Web Development. One App at a Time.
        </p>
      </div>
    </div>

    </div>
  </div>
  )
}

export default HomePage