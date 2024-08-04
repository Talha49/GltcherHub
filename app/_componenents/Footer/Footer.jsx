import React from 'react'

const Footer = () => {
  return (
    <div class="text-center bg-gradient-to-r from-purple-200 to-pink-300  border  w-full p-2">
    <p  class="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900">
        <img src="https://cdn-icons-png.freepik.com/256/13452/13452842.png?ga=GA1.1.1848175349.1687177590&semt=ais_hybrid" class="h-12 mr-3 sm:h-9" alt="Landwind Logo" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Gli</span>
      <span className="text-gray-800">tch</span>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">er</span>
      <span className="text-gray-800">Hu</span>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">b</span>
    </p>

    <span class="block text-sm text-center text-white">© WebApp Developed by Talha Ghauri
            <p
			 class="text-purple-600 font-bold hover:underline">~Glitchy Coder
        </p>
	</span>
    </div>
  )
}

export default Footer