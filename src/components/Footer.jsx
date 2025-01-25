import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#9C51B6] text-[#8A2BE2] py-6">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo and Description */}
          <div className="w-full md:w-1/3 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-3xl font-bold" style={{color:"white"}}>
              Rent<span className="text-yellow-300">Vehicle</span>
            </h1>
            <p className="mt-4 text-lg text-gray-200">
              Trusted platform for renting vehicles anytime, anywhere.
              Experience convenience and quality service with us.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
  <ul className="flex flex-col space-y-4">
    <li>
      <a
        href="/home1"
        className="text-lg font-bold text-white   hover:text-yellow-300 transition"
      >
        HOME
      </a>
    </li>
    <li>
      <a
        href="/about"
        className="text-lg font-bold text-white  hover:text-yellow-300 transition"
      >
        ABOUT US
      </a>
    </li>
    <li>
      <a
        href="/blog"
        className="text-lg font-bold text-white  hover:text-yellow-300 transition"
      >
      Blog
      </a>
    </li>
    <li>
      <a
        href="/contact"
        className="text-lg font-bold text-white  hover:text-yellow-300 transition"
      >
        CONTACT
      </a>
    </li>
  </ul>
</div>


          {/* Social Links */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-4 bg-white rounded-full h-13 w-13 hover:bg-yellow-300 hover:text-white transition"
            >
              <FaFacebookF className="text-2xl" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
               className="p-4 bg-white rounded-full h-13 w-13 hover:bg-yellow-300 hover:text-white transition"
            >
              <FaTwitter className="text-2xl" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
             className="p-4 bg-white rounded-full h-13 w-13 hover:bg-yellow-300 hover:text-white transition"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-4 bg-white rounded-full h-13 w-13 hover:bg-yellow-300 hover:text-white transition"
            >
              <FaLinkedinIn className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-300" />

        {/* Bottom Section */}
        <div className="flex flex-wrap justify-between items-center text-lg text-gray-200">
          <p>
            &copy; {new Date().getFullYear()} RentVehicle. All rights
            reserved@Module3.
          </p>
          <div className="space-x-6">
            <a href="/terms" className="hover:text-yellow-300 transition">
              Terms of Service
            </a>
            <a href="/privacy" className="hover:text-yellow-300 transition">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
