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
    <footer className="bg-[#E8F3EF] text-[#2C3E3E] mt-auto border-t border-[#E2DCD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Contact Info Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#2C3E3E]">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 group">
                <FaEnvelope className="text-[#FFB7A4] group-hover:text-[#FF9B82] transition-colors" />
                <a
                  href="mailto:info@example.com"
                  className="text-[#2C3E3E]/80 hover:text-[#FF9B82] transition-colors"
                >
                  info@example.com
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <FaPhone className="text-[#FFB7A4] group-hover:text-[#FF9B82] transition-colors" />
                <a
                  href="tel:+8801234567890"
                  className="text-[#2C3E3E]/80 hover:text-[#FF9B82] transition-colors"
                >
                  +8801234567890
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <FaMapMarkerAlt className="text-[#FFB7A4] group-hover:text-[#FF9B82] transition-colors" />
                <span className="text-[#2C3E3E]/80 group-hover:text-[#2C3E3E] transition-colors">
                  123 Main Street, City, Country
                </span>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#2C3E3E]">
              Follow Us
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFF9F0] p-3 rounded-full text-[#FFB7A4] hover:bg-[#FFB7A4] hover:text-[#FFF9F0] transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFF9F0] p-3 rounded-full text-[#FFB7A4] hover:bg-[#FFB7A4] hover:text-[#FFF9F0] transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFF9F0] p-3 rounded-full text-[#FFB7A4] hover:bg-[#FFB7A4] hover:text-[#FFF9F0] transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFF9F0] p-3 rounded-full text-[#FFB7A4] hover:bg-[#FFB7A4] hover:text-[#FFF9F0] transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#2C3E3E]">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[#2C3E3E]/80 hover:text-[#FF9B82] transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#2C3E3E]/80 hover:text-[#FF9B82] transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#2C3E3E]/80 hover:text-[#FF9B82] transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-[#E2DCD1] mt-8 pt-6 text-center text-[#2C3E3E]/60 text-sm">
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
