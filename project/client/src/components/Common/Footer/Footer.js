import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Logo Section */}
          <div>
            <img src="/logo1.png" alt="Alia Girls College Logo" className="h-24" />
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-gray-400">Home</a></li>
              <li><a href="#" className="hover:text-gray-400">About Us</a></li>
              <li><a href="#" className="hover:text-gray-400">Courses</a></li>
              <li><a href="#" className="hover:text-gray-400">Admissions</a></li>
              <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Information Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <ul className="space-y-1">
              <li>Alia Girls College</li>
              <li>Bhudakudhahaan Mod, in front of Guraini Petrol Pump, Khetasarai</li>
              <li>Jaunpur, Uttar Pradesh</li>
              <li>Phone: +91 8738921563</li>
              <li>Email: aliagirlscollege123@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <p>&copy; 2022 Alia Girls College. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
