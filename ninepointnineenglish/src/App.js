import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Navbar from './components/Navbar';  // Make sure this path is correct
import About from './components/About';
import Map from './components/Map';
import Booking from './components/Booking';
import CalendarSection from './components/CalendarSection';
import Instructors from './components/Instructors/Instructors.js';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      
      <Navbar />  {/* Add the Navbar here */}

     
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/map" element={<Map />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/calendar" element={<CalendarSection />} />
      </Routes>

      <div className="main">
        
        </div>
    </Router>
  );
};

export default App;
