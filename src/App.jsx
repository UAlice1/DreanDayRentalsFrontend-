import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './assets/pages/Layout';
import Signin from './assets/pages/Authentication/Signin';
import SignUp from './assets/pages/Authentication/SignUp'
import Home from './pages/Home';
import Available from './assets/pages/Available'
import Auth from './assets/pages/Authentication/Signin';
import Service from './assets/pages/Service';
import Contact from './assets/pages/Contact';
import About from './assets/pages/About';
import Bookings from './assets/pages/Bookings';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/Auth" element={<Auth />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Available" element={<Available />} />
          <Route path="/Bookings" element={<Bookings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

