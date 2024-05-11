import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './assets/pages/Layout';
import SignIn from './assets/pages/SignIn';
import Home from './pages/Home';
import Navbar from './assets/pages/Navbar';
import Auth from './assets/pages/Authentication/Auth';
import Service from './assets/pages/Service';
import Contact from './assets/pages/Contact';
import About from './assets/pages/About';



function App() {
  return (
    <Router>
        <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Auth" element={<Auth/>} />
          <Route path="/Service" element={<Service/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/About" element={<About/>} />

      
      </Routes>
    </Router>
  );
}

export default App;

