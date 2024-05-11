import axios from "axios";
import { useState } from "react";
import SuccessAlert from "../../../Components/SuccessAlert";
import ErrorAlert from "../../../Components/ErrorAlert";

const Signin = () =>{
    const [user, setUser] =useState({
        email: '',
        password: '',
    })
    const [message, setMessage] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState({
        email: '',
        password: '',
    });
    const SignIn = (e) =>{
        e.preventDefault();
        setError({title: "", description: ""});
        setMessage({title: "", description: ""})
        axios.post(`https://dream-day-/api_docs/#/Users/post_user_signin`, user)
        .then(response => {
            if(response.status === 200) {
                setMessage({title: 'succes', description: response.data.message})
                var localUserData = JSON.stringify(response.data.user);
                lacalstorage.setItem('token', response.data.token);
                lacalstorage.setItem('user',localUserData);
                setTimeout(()=>{
                    window.location.replace('/');
                },2000)

            }
        })
        .catch(err => {
            setError({title: 'Error',ndescription: err});
        })
    }
    const handleInputs = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    return(
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
}