import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Components/Homepage';
import BookMRI from './Pages/BookMRI';
import Footer from './Components/Footer';
import AppointmentBooking from './Components/AppointmentBooking';


function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar Component */}
        <Navbar />

        {/* Routing for different pages */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<AppointmentBooking/>} />
          <Route path="/book-mri" element={<BookMRI />} />
          <Route path="/services" element={<div>Services Page</div>} />
          <Route path="/how-it-works" element={<div>How It Works Page</div>} />
          <Route path="/body-parts" element={<div>Body Parts Page</div>} />
          <Route path="/faq" element={<div>FAQ Page</div>} />
          <Route path="/locations" element={<div>Locations Page</div>} />
          <Route path="/about" element={<div>About Us Page</div>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
