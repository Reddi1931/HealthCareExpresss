import React from 'react';
import { useLocation } from 'react-router-dom';

const AppointmentBooking = () => {
  const location = useLocation();
  const { scanType, bodyPart, location: userLocation } = location.state || {};

  return (
    <div className="flex flex-col lg:flex-row p-8 lg:space-x-8">

      {/* Left side - Booking Info */}
      <div className="w-full lg:w-1/2 bg-white p-8 rounded-lg shadow-lg mb-6 lg:mb-0">
        <h2 className="text-3xl font-bold mb-4">Book an appointment</h2>
        <p className="text-gray-600 mb-6">Choose a scanning centre that suits you best and book online in minutes.</p>

        {/* Show the selected values from the search */}
        <div className="mb-4">
          <p><strong>Selected Scan Type:</strong> {scanType}</p>
          <p><strong>Body Part:</strong> {bodyPart}</p>
          <p><strong>Location:</strong> {userLocation}</p>
        </div>

        {/* Booking Info */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Hendon MRI Centre</h3>
          <p>30-100 Colindeep, Lane Hendon, London</p>
          <p className="text-lg font-bold mt-4">From £399</p>
          <p className="text-sm text-gray-500">Including referral, consultations, scan, and results. No hidden fees.</p>

          <div className="flex space-x-4 mt-4">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-md">Self Funding</button>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-md">Insurance</button>
          </div>

          <div className="mt-4">
            <button className="bg-pink-500 text-white py-2 px-4 rounded-md">Pay with Klarna. No Fees</button>
          </div>
        </div>
      </div>

      {/* Right side - Map Image */}
      <div className="w-full lg:w-1/2">
        <img 
          src='https://cdn.images.express.co.uk/img/dynamic/25/590x/secondary/Google-Maps-2702826.jpg?r=1602181753125' 
          alt="Maps" 
          className="rounded-lg shadow-lg w-full h-full object-cover"
        />
      </div>
      
    </div>
  );
};

export default AppointmentBooking;
