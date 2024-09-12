import React, { useState } from 'react';

const BookMRI = () => {
  // State to handle the form data
  const [formData, setFormData] = useState({
    scanType: '',
    bodyPart: '',
    pinCode: ''
  });

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submit (for now it just logs the data)
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data: ', formData);
    // You can implement actual form submission or API call here
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen w-full">
      {/* Left side: Booking form */}
      <div className="lg:w-2/3 w-full p-6 bg-gray-100">
        <h2 className="text-2xl font-semibold mb-6">Book Your MRI Scan</h2>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label htmlFor="scanType" className="block text-gray-700">Scan Type:</label>
            <input
              type="text"
              id="scanType"
              name="scanType"
              value={formData.scanType}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Enter Scan Type"
            />
          </div>
          <div>
            <label htmlFor="bodyPart" className="block text-gray-700">Body Part:</label>
            <input
              type="text"
              id="bodyPart"
              name="bodyPart"
              value={formData.bodyPart}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Enter Body Part"
            />
          </div>
          <div>
            <label htmlFor="pinCode" className="block text-gray-700">Pin Code:</label>
            <input
              type="text"
              id="pinCode"
              name="pinCode"
              value={formData.pinCode}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Enter Pin Code"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition-colors"
          >
            Confirm Booking
          </button>
        </form>
      </div>

      {/* Right side: Static Google Map or an image */}
      <div className="lg:w-1/3 w-full h-full">
        {/* You can use a static image or an iframe to embed Google Maps */}
        {/* Option 1: Static Google Map Embed (via iframe) */}
        <iframe
          className="w-full h-full"
          frameBorder="0"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=London"
          allowFullScreen
        ></iframe>

        {/* Option 2: Just a Google Maps static image */}
        {/* <img
          className="w-full h-full object-cover"
          src="https://maps.googleapis.com/maps/api/staticmap?center=London&zoom=12&size=600x400&key=YOUR_GOOGLE_MAPS_API_KEY"
          alt="Google Maps"
        /> */}
      </div>
    </div>
  );
};

export default BookMRI;
