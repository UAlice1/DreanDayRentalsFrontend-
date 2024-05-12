import axios from "axios";
import { useState } from "react";
import SuccessAlert from "../../../Components/SuccessAlert";
import ErrorAlert from "../../../Components/ErrorAlert";

const Signin = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [message, setMessage] = useState({
    title: '',
    description: '',
  });
  const [error, setError] = useState({
    title: '',
    description: '',
  });

  const SignIn = async (e) => {
    e.preventDefault();
    setError({ title: "", description: "" });
    setMessage({ title: "", description: "" });

    try {
      const response = await axios.post(`https://dream-day-/api_docs/#/Users/post_user_signin`, user);
      if (response.status === 200) {
        setMessage({ title: 'Success', description: response.data.message });
        const localUserData = JSON.stringify(response.data.user);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', localUserData);
        setTimeout(() => {
          window.location.replace('/');
        }, 2000);
      }
    } catch (err) {
      setError({ title: 'Error', description: err.message });
    }
  };

  const handleInputs = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee]">
      <div className="max-w-md w-full mx-auto px-6 py-8 bg-white rounded shadow-md">
        <h2 className="text-3xl mb-4 text-center">Login Page</h2>
        {error.title && <ErrorAlert title={error.title} description={error.description} />}
        {message.title && <SuccessAlert title={message.title} description={message.description} />}
        <form onSubmit={SignIn}>
          <div className="mb-4">
            <div className="flex items-center border-b border-gray-300">
              <FaEnvelope className="text-gray-500 mr-2" />
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleInputs}
                placeholder="Email"
                className="px-3 py-2 bg-transparent outline-none w-full"
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="flex items-center border-b border-gray-300">
              <FaLock className="text-gray-500 mr-2" />
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleInputs}
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
    </div>
  );
};

export default Signin;