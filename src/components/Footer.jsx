import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-8">
      <div className="container mx-auto px-6 sm:px-12">
        {/* Footer Content Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          
          {/* Brand Section */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-2xl font-semibold mb-2">EventApp</h3>
            <p className="text-sm">Your go-to platform for event management</p>
            <p className="text-xs mt-4">Developed by <strong>Syed Nadir Abbas</strong></p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul>
              <li><a href="/" className="text-sm hover:text-gray-200">Home</a></li>
              <li><a href="/login" className="text-sm hover:text-gray-200">Login</a></li>
              <li><a href="/signup" className="text-sm hover:text-gray-200">Sign Up</a></li>
              <li><a href="/dashboard" className="text-sm hover:text-gray-200">Dashboard</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" className="text-white hover:text-gray-200">
                <i className="fab fa-github fa-lg"></i> GitHub
              </a>
              <a href="https://twitter.com" target="_blank" className="text-white hover:text-gray-200">
                <i className="fab fa-twitter fa-lg"></i> Twitter
              </a>
              <a href="https://linkedin.com" target="_blank" className="text-white hover:text-gray-200">
                <i className="fab fa-linkedin fa-lg"></i> LinkedIn
              </a>
            </div>
          </div>

        </div>
        
        {/* Footer Bottom Section */}
        <div className="mt-8 text-center text-xs">
          <p>&copy; 2024 EventApp. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
