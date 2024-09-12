import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HowItWorks from './HowItWorks';

const HomePage = () => {
  const [scanType, setScanType] = useState('');
  const [bodyPart, setBodyPart] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    // Navigate to the booking page with query params
    navigate(`/booking`, {
      state: {
        scanType,
        bodyPart,
        location
      }
    });
  };

  return (
    <>
      <main className="bg-cover bg-center min-h-screen flex flex-col items-center justify-center text-white py-16" style={{ backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1665203618989-e04554a539b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
        <h1 className="text-7xl font-bold mb-4">Book your MRI scan today</h1>
        <p className="text-lg mb-8">Self referral MRI scans from £199</p>

        <div className='bg-white h-28 flex items-center' style={{ width: '1000px' }}>
          <div className="flex space-x-4 mb-6">
            <select 
              className="border hover:bg-gray-200 rounded-md py-4 px-12 w-60 ml-5 mt-6 text-black"
              value={scanType}
              onChange={(e) => setScanType(e.target.value)}
            >
              <option value="">Select scan type</option>
              <option value="MRI">MRI Scan</option>
              <option value="CT">CT Scan</option>
            </select>

            <select 
              className="border hover:bg-gray-200 rounded-md py-4 px-12 w-60 ml-5 mt-6 text-black"
              value={bodyPart}
              onChange={(e) => setBodyPart(e.target.value)}
            >
              <option value="">Select Body type</option>
              <option value="FULL BODY">Full Body Scan</option>
              <option value="SPINE">Full Spine</option>
              <option value="BRAIN">Brain</option>
              <option value="SINUS">Sinuses</option>
              <option value="NECK">Soft tissue Neck</option>
              <option value="CHEST">Chest</option>
            </select>

            {/* <input
              type="text"
              placeholder="Search for body parts..."
              className="border hover:bg-gray-200 mt-6 border-gray-300 rounded-md py-2 px-4 w-48 text-black"
              value={bodyPart}
              onChange={(e) => setBodyPart(e.target.value)} required
            /> */}
            <input
              type="text"
              placeholder="City, town or Postcode"
              className="border hover:bg-gray-200 mt-6 border-gray-300 rounded-md py-2 px-4 w-48 text-black"
              value={location}
              onChange={(e) => setLocation(e.target.value)} required
            />
            <button
              className="bg-blue-700 text-white px-20 py-2 h-12 mt-6 rounded-md hover:bg-blue-600"
              onClick={handleSearch} 
            >
              Search
            </button>
          </div>
        </div>

        <p className="text-pretty text-start text-xl font-bold items-start mr-72 ml-20">
          Unsure what scan / body part you need? <br />
          <a href="/referral-form" className="underline hover:text-blue-500">Click HERE</a> to fill in our self-referral form, and a member of our team will assist you.
        </p>
      </main>
      <HowItWorks />
    </>
  );
};

export default HomePage;
