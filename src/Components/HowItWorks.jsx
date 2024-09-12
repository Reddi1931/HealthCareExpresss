import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faCheckCircle, faSearch, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const HowItWorks = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-orange-500 font-semibold text-lg mb-4">HOW IT WORKS</h2>
        <h3 className="text-3xl font-bold mb-8">Book a scan with us</h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Card 1: Book your scan */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-orange-100 p-4 rounded-full mb-4">
              <FontAwesomeIcon icon={faCalendarAlt} className="text-orange-500 w-12 h-12" />
            </div>
            <h4 className="font-bold text-lg mb-2">BOOK YOUR SCAN</h4>
            <p className="text-gray-600">Booking a scan with us is simple and easy, select your scan type and body parts, choose a date and time that works for you, and complete your booking.</p>
          </div>

          {/* Card 2: Scan Confirmation */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <FontAwesomeIcon icon={faCheckCircle} className="text-blue-500 w-12 h-12" />
            </div>
            <h4 className="font-bold text-lg mb-2">SCAN CONFIRMATION</h4>
            <p className="text-gray-600">Our expert team will check all of your details and confirm your booking. If there are any problems, our friendly booking team will contact you.</p>
          </div>

          {/* Card 3: Have Your Scan */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-orange-100 p-4 rounded-full mb-4">
              <FontAwesomeIcon icon={faSearch} className="text-orange-500 w-12 h-12" />
            </div>
            <h4 className="font-bold text-lg mb-2">HAVE YOUR SCAN</h4>
            <p className="text-gray-600">During your scan, our expert radiologists will guide you through every step of the process and answer any questions you may have.</p>
          </div>

          {/* Card 4: Your Scan Report */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <FontAwesomeIcon icon={faEnvelope} className="text-blue-500 w-12 h-12" />
            </div>
            <h4 className="font-bold text-lg mb-2">YOUR SCAN REPORT</h4>
            <p className="text-gray-600">Once your scan is complete, your results will be sent to your nominated consultant, and a copy will be sent to you for your records.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
