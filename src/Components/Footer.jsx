import React from 'react';
const Footer = () => {
    return (
        <footer className="bg-gray-100 pt-10 pb-5">
            {/* Footer Content */}
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo and Social Icons */}
                <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                        {/* <img src="" alt="HealthCare Express" className="h-10" /> */}
                        <h2 className="text-lg font-bold text-gray-800">Express HealthCare</h2>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-600 hover:text-blue-600">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="text-gray-600 hover:text-blue-600">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="text-gray-600 hover:text-blue-600">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>

                {/* Useful Links */}
                <div>
                    <h3 className="text-gray-800 font-bold mb-4">Useful Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-600 hover:text-gray-900">FAQ</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-900">How it works</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-900">Testimonial</a></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-gray-800 font-bold mb-4">Services</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-600 hover:text-gray-900">MRI Scans</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-900">Open MRI Scans</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-900">Full body MRI Scans</a></li>
                    </ul>
                </div>

                {/* Legal Info */}
                <div>
                    <h3 className="text-gray-800 font-bold mb-4">The Legal Stuff</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy & Cookie Policy</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-900">Terms & Conditions</a></li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="bg-gray-900 mt-10 py-4">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-400 px-4">
                    <p>© 2024, Express HealthCare. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <img src="https://mriplus.co.uk/assets/visa-card.d2c4ba87.svg" alt="Visa" className="h-6" />
                        <img src="https://mriplus.co.uk/assets/mastercard-card.47d4a389.svg" alt="Mastercard" className="h-6" />
                        <img src="https://mriplus.co.uk/assets/amex-card.80d199ff.svg" alt="American Express" className="h-6" />
                        <img src="https://mriplus.co.uk/assets/klarna-pay-now.382755ce.svg" alt="Klarna" className="h-6" />
                        <img src="https://mriplus.co.uk/assets/applepay-card.358ccdb0.svg" alt="Apple Pay" className="h-6" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
