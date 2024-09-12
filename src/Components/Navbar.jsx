import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    // State to toggle dropdown visibility
    const [servicesDropdown, setServicesDropdown] = useState(false);
    const [bodyPartsDropdown, setBodyPartsDropdown] = useState(false);

    return (
        <nav className="bg-white shadow-md py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center border border-gray-400 rounded-lg px-4 py-2 space-x-3">
                    {/* Phone Icon and Number */}
                    <a href="tel:01702595551" className="flex items-center text-blue-700 font-semibold">
                        <i className="fas fa-phone-alt mr-2"></i> {/* FontAwesome phone icon */}
                        01702 595551
                    </a>

                    {/* Enquire Button */}
                    <button className="bg-blue-700 text-white px-1 py-1 rounded-lg hover:bg-blue-900">
                        Enquire
                    </button>
                </div>

                {/* Logo */}
                <Link to="/" className="text-3xl font-bold text-blue-500">
                Express HealthCare
                </Link>

                {/* Navbar Links */}
                <div className="space-x-6">
                    <div className="relative inline-block">
                        <button
                            onClick={() => setServicesDropdown(!servicesDropdown)}
                            className="text-gray-700 font-semibold hover:text-blue-500"
                        >
                            Services
                        </button>
                        {/* Services Dropdown */}
                        {servicesDropdown && (
                            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-10">
                                <Link to="/services/service1" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                    Service 1
                                </Link>
                                <Link to="/services/service2" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                    Service 2
                                </Link>
                                <Link to="/services/service3" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                    Service 3
                                </Link>
                            </div>
                        )}
                    </div>

                    <div className="relative inline-block">
                        <button
                            onClick={() => setBodyPartsDropdown(!bodyPartsDropdown)}
                            className="text-gray-700 font-semibold hover:text-blue-500"
                        >
                            Body Parts
                        </button>
                        {/* Body Parts Dropdown */}
                        {bodyPartsDropdown && (
                            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-10">
                                <Link to="/body-parts/full-body-scan" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                    Full Body Scan
                                </Link>
                                <Link to="/body-parts/wrist" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                    Wrist
                                </Link>
                                <Link to="/body-parts/brain-head" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                    Brain & Head
                                </Link>
                                {/* Add more body parts as needed */}
                            </div>
                        )}
                    </div>

                    <Link to="/how-it-works" className="text-gray-700 font-semibold hover:text-blue-500">
                        How it works
                    </Link>

                    <Link to="/faq" className="text-gray-700 font-semibold hover:text-blue-500">
                        FAQ
                    </Link>

                    <Link to="/locations" className="text-gray-700 font-semibold hover:text-blue-500">
                        Locations
                    </Link>

                    <Link to="/about" className="text-gray-700 font-semibold hover:text-blue-500">
                        About us
                    </Link>
                </div>

                {/* Login and Book Now buttons */}
                <div className="space-x-4">
                    <Link to="/login" className="text-gray-700 font-semibold hover:text-blue-500">
                        LOGIN
                    </Link>
                    <Link to="/book" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        BOOK NOW
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;


