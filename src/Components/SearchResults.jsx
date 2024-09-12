// src/SearchResults.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const scanType = query.get('scanType');
  const bodyPart = query.get('bodyPart');
  const locationInfo = query.get('location');

  return (
    <div className="flex">
      <div className="w-1/2 p-8">
        <h2 className="text-3xl font-bold mb-4">Booking Information</h2>
        <p><strong>Scan Type:</strong> {scanType}</p>
        <p><strong>Body Part:</strong> {bodyPart}</p>
        <p><strong>Location:</strong> {locationInfo}</p>
      </div>
      <div className="w-1/2">
        <img 
          src="https://maps.googleapis.com/maps/api/staticmap?center=YOUR_LOCATION_COORDINATES&zoom=14&size=600x300&maptype=roadmap&key=YOUR_API_KEY"
          alt="Google Map"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default SearchResults;
