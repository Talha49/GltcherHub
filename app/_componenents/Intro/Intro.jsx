import Image from 'next/image'
import React from 'react'

const Intro = () => {


  const portfolio = () => {
    alert("I will attach my portfolio Soon")
  }

  const sourcecode =() => {
    alert("Visit SideBar For SourceCodes")
  }

  return (
    <div className="flex flex-col md:flex-row justify-around items-center py-20 bg-dark">
      <div className="w-full md:w-1/2 xl:w-1/2 p-6 text-container">
        <h1 className="gradient-text mb-4 transition duration-500 ease-in-out hover:scale-110">
          Glitchy Coder
        </h1>
        <p className="text-lg md:text-xl xl:text-2xl font-medium text-gray-800 mb-8 transition duration-500 ease-in-out hover:text-blue-600">
          Welcome to Glitcher Hub, your ultimate destination for exploring the digital world and mastering the art of coding! This web app is designed to provide you with a comprehensive platform for learning and growth, featuring:
          <br />
          <span className="gradient-text">- Latest blogs on digital trends and technologies</span>
          <br />
          <span className="gradient-text">- Step-by-step coding tutorials for beginners and experts alike</span>
          <br />
          <span className="gradient-text">- Access to source code for tutorials, allowing you to practice and learn hands-on</span>
        </p>
        <button onClick={portfolio} className='bg-gradient-to-r from-purple-400 to-pink-300  rounded-lg hover:scale-90 duration-300 ease-in-out py-2 px-4'>Portfolio</button>
        <button onClick={sourcecode} className='ml-3 bg-gradient-to-r from-purple-600 to-pink-500  rounded-lg hover:scale-90 duration-300 ease-in-out py-2 px-4'>SourceCodes</button>

      </div>
      <div className="w-full md:w-1/2  p-6 mt-8 md:mt-0 image-container">
        <div className="image-background">
        <div className="relative">
  <Image 
    src={'/t.jpg'} 
    width={300} 
    height={500} 
    className="rounded-lg shadow-lg transition duration-500 ease-in-out hover:scale-110 custom-image" 
  />
  <div className="absolute bottom-10  right-8 w-full h-full  bg-gradient-to-r from-purple-400 to-pink-300 opacity-25 rounded-lg hover:scale-90 duration-300 ease-in-out"></div>
  <div className="absolute top-20 left-24 lg:w-full lg:h-full md:w-[35vh] md:h-[35vh] w-[28vh] h-[30vh]  bg-gradient-to-r from-purple-400 to-pink-500 hover:scale-90 duration-300 ease-in-out opacity-25 rounded-lg"></div>
</div>
        </div>
      </div>
    </div>
  )
}

export default Intro
