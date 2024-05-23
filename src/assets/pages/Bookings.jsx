import React, { useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";
import { SiSanfranciscomunicipalrailway } from "react-icons/si";
import { Link } from 'react-router-dom'; // Assuming you are using React Router

const BookingPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    eventDate: '',
    eventLocation: '',
    additionalNotes: ''
  });

  const [showSecondImage, setShowSecondImage] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false); // Example state to check if user is signed in
  const [showSignInMessage, setShowSignInMessage] = useState(false); // State to handle the sign-in message

  const isFormValid = () => {
    return (
      formData.firstName !== '' &&
      formData.lastName !== '' &&
      formData.email !== '' &&
      formData.phoneNumber !== '' &&
      formData.eventDate !== ''
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isSignedIn) {
      setShowSignInMessage(true);
      return;
    }
    if (isFormValid()) {
      console.log(formData);
    } else {
      alert('Please fill in all required fields.');
    }
  };

  const handleToggleImage = () => {
    setShowSecondImage(!showSecondImage);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="md:w-3/5 p-4 border border-gray-300 rounded-xl mt-10 md:mr-5">
        <img src={showSecondImage ? "/images/des6.jpg" : "/images/des9.jpg" } alt="Hall" className="h-64 md:h-80 w-full rounded-xl object-cover"/>
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Luxurious Event Hall</h2>
          <h1 className="flex items-center mt-2"><FaLocationDot className="mr-2" /> Kigali city</h1>
          <div className="flex flex-col md:flex-row justify-between mt-2">
            <p className="text-sm text-gray-600 flex items-center mb-2 md:mb-0"><FaLocationDot className="mr-2" /> Convention centre, Central Plaza</p>
            <p className="text-sm text-gray-600 flex items-center mb-2 md:mb-0"><GoPeople className="mr-2" /> 200 per/people</p>
            <p className="text-sm text-gray-600 flex items-center"><SiSanfranciscomunicipalrailway className="mr-2" /> Renting Cost: $5000/day</p>
          </div>
          <button onClick={handleToggleImage} className="inline-block bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 mt-4">More About</button>
          <h1 className="mt-4">Description</h1>
          <p className="mt-2 text-sm text-gray-700">This luxurious event hall situated in the heart of the city offers a sophisticated venue for various occasions. With its modern amenities and spacious layout, it can accommodate up to 200 guests comfortably. Perfect for weddings, corporate events, and other special occasions.</p>
        </div>
      </div>

      <div className="md:w-2/5 p-4 mt-10 md:ml-5 border border-gray-300 rounded-xl">
        <h2 className="text-2xl font-semibold text-center">Information</h2>
        <form onSubmit={handleSubmit} className="mt-8">
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
            <input type="text" id="firstName" name="firstName" required value={formData.firstName} onChange={handleInputChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
            <input type="text" id="lastName" name="lastName" required value={formData.lastName} onChange={handleInputChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" required value={formData.email} onChange={handleInputChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Tel</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" required value={formData.phoneNumber} onChange={handleInputChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700">Event Date</label>
            <input type="date" id="eventDate" name="eventDate" required value={formData.eventDate} onChange={handleInputChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 w-full" />
          </div>
          <div className="mb-4 text-center">
            <button type="submit" className="inline-block bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600">Book Now</button>
          </div>
        </form>
        {showSignInMessage && (
          <div className="mt-4 text-center text-blue-500">
            Please <Link to="/signin" className="underline text-indigo-500">sign in</Link> to book an event.
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingPage;




