import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Contact Info Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-gray-400" />
                <a
                  href="mailto:info@example.com"
                  className="text-gray-300 hover:text-white transition"
                >
                  info@example.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-gray-400" />
                <a
                  href="tel:+1234567890"
                  className="text-gray-300 hover:text-white transition"
                >
                  +8801234567890
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-gray-400" />
                <span className="text-gray-300">
                  123 Main Street, City, Country
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors duration-300"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-400 transition-colors duration-300"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-700 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Programming Hero. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
