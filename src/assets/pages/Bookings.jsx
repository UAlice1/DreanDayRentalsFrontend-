import React from 'react'

function Bookings() {
  return (
<div className="bookings p-6">
  <h2 className="text-3xl text-center mb-16">Bookings Halls</h2>
  <div className="mt-11 flex flex-col md:flex-row flex-wrap justify-center gap-8">
    <div className="card bg-white rounded-lg shadow-lg p-6 max-w-sm">
      <img className="w-full h-56 object-cover rounded-t-lg" src="/public/images/des4.jpg" alt="Booked hall" />
      <div className="mt-4">
        <span className="block text-gray-700">Location: Kigali</span>
        <span className="block text-gray-700">Price: frw</span>
        <span className="block text-gray-700">Max: 200 people</span>
        <a href="#" className="block mt-4 bg-[#a6c1ee] text-white py-2 px-4 rounded hover:bg-blue-600 text-center">Booked</a>
      </div>
    </div>
    <div className="card bg-white rounded-lg shadow-lg p-6 max-w-sm">
      <img className="w-full h-56 object-cover rounded-t-lg" src="/public/images/des4.jpg" alt="Booked hall" />
      <div className="mt-4">
        <span className="block text-gray-700">Location: Kigali</span>
        <span className="block text-gray-700">Price: frw</span>
        <span className="block text-gray-700">Max: 200 people</span>
        <a href="#" className="block mt-4 bg-[#a6c1ee] text-white py-2 px-4 rounded hover:bg-blue-600 text-center">Booked</a>
      </div>
    </div>
    <div className="card bg-white rounded-lg shadow-lg p-6 max-w-sm">
      <img className="w-full h-56 object-cover rounded-t-lg" src="/public/images/des4.jpg" alt="Booked hall" />
      <div className="mt-4">
        <span className="block text-gray-700">Location: Kigali</span>
        <span className="block text-gray-700">Price: frw</span>
        <span className="block text-gray-700">Max: 200 people</span>
        <a href="#" className="block mt-4 bg-[#a6c1ee] text-white py-2 px-4 rounded hover:bg-blue-600 text-center">Booked</a>
      </div>
    </div>
    <div className="card bg-white rounded-lg shadow-lg p-6 max-w-sm">
      <img className="w-full h-56 object-cover rounded-t-lg" src="/public/images/des4.jpg" alt="Booked hall" />
      <div className="mt-4">
        <span className="block text-gray-700">Location: Kigali</span>
        <span className="block text-gray-700">Price: frw</span>
        <span className="block text-gray-700">Max: 200 people</span>
        <a href="#" className="block mt-4 bg-[#a6c1ee] text-white py-2 px-4 rounded hover:bg-blue-600 text-center">Booked</a>
      </div>
    </div>
  </div>
</div>
  )
}

export default Bookings



