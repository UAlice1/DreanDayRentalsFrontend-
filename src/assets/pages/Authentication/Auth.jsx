import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
const RegistrationPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const handleRegistration = (e) => {
    e.preventDefault();
    // Perform registration logic here, e.g., validate inputs, make API requests
    setIsRegistered(true);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here, e.g., validate inputs, make API requests
    setIsLogin(true);
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee]">
      {isLogin ? (
        <div className="max-w-md w-full mx-auto px-6 py-8 bg-white rounded shadow-md">
          <h2 className="text-3xl mb-4 text-center">Login Page</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <div className="flex items-center border-b border-gray-300">
                <FaEnvelope className="text-gray-500 mr-2" />
                <input
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="Email"
                  className="px-3 py-2 bg-transparent outline-none w-full"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <div className="flex items-center border-b border-gray-300">
                <FaLock className="text-gray-500 mr-2" />
                <input
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="Password"
                  className="px-3 py-2 bg-transparent outline-none w-full"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-center">
            Don't have an account?{' '}
            <a href="/register" className="text-blue-500 underline">
              Register
            </a>
          </p>
        </div>
      ) : (
        <div className="max-w-md w-full mx-auto px-6 py-8 bg-white rounded shadow-md">
          <h2 className="text-3xl mb-4 text-center">Registration Page</h2>
          {isRegistered ? (
            <p className="mb-4 text-green-500 text-center">
              Registration successful!
            </p>
          ) : (
            <form onSubmit={handleRegistration}>
              <div className="mb-4">
                <div className="flex items-center border-b border-gray-300">
                  <FaUser className="text-gray-500 mr-2" />
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    className="px-3 py-2 bg-transparent outline-none w-full"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <div className="flex items-center border-b border-gray-300">
                  <FaUser className="text-gray-500 mr-2" />
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                    className="px-3 py-2 bg-transparent outline-none w-full"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <div className="flex items-center border-b border-gray-300">
                  <FaEnvelope className="text-gray-500 mr-2" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="px-3 py-2 bg-transparent outline-none w-full"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <div className="flex items-center border-b border-gray-300">
                  <FaLock className="text-gray-500 mr-2" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="px-3 py-2 bg-transparent outline-none w-full"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
              >
                Register
              </button>
            </form>
          )}
          <p className="mt-4 text-center">
            Already have an account?{' '}
            <button
              className="text-blue-500 underline"
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
          </p>
        </div>
      )}
    </div>
  );
};
export default RegistrationPage;