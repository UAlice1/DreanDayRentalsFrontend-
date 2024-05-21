import React from 'react';
function Service() {
  return (
    <div className="flex justify-center items-center h-screen">
    <div className="flex flex-col justify-center items-center w-full">
      <p className="text-3xl mt-10 font-sans italic text-center">Our Services</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 w-full">
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-center items-center">
          <img src="public/images/camera-removebg-preview.png" className="w-16 h-16 mb-4" alt="Photography" />
          <h3 className="text-xl font-bold mb-2">Photography</h3>
          <p className="text-base text-center">Capture every moment with our professional wedding photography services, ensuring memories that last a lifetime.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-center items-center">
          <img src="public/images/dress.png" className="w-16 h-16 mb-4" alt="Dress Icon" />
          <h3 className="text-xl font-bold mb-2">Bridal Wear</h3>
          <p className="text-base text-center">Find the perfect dress for your big day with our exclusive bridal wear collection, tailored to make you shine.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-center items-center">
          <img src="public/images/flower.png" className="w-16 h-16 mb-4" alt="Flower Icon" />
          <h3 className="text-xl font-bold mb-2">Floral Arrangements</h3>
          <p className="text-base text-center">Enhance your venue with our stunning floral arrangements, crafted to add elegance and charm to your wedding.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-center items-center">
          <img src="public/images/cake.png" className="w-16 h-16 mb-4" alt="Cake Icon" />
          <h3 className="text-xl font-bold mb-2">Catering & Cakes</h3>
          <p className="text-base text-center">Delight your guests with our exquisite catering services and beautifully designed wedding cakes.</p>
        </div>
      </div>
    </div>
  </div>

            
          
  )
}

export default Service