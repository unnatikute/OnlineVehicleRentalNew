import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaCarAlt,
  FaInfoCircle,
  FaPhoneAlt,
  FaUser,
  FaUserPlus,
  FaBlog,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from "../assets/images/car_emoji.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-[#9C51B6] shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-16 w-16 mr-2" />
          <h1 className="text-white text-3xl font-extrabold">
            Rent<span className="text-yellow-300">Vehicle</span>
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 text-white items-center text-lg">
          <Link
            to="/"
            className="flex items-center hover:text-yellow-300 transition-transform transform hover:scale-105"
          >
            <FaHome className="mr-2" /> Home
          </Link>

          <Link
            to="/about"
            className="flex items-center hover:text-yellow-300 transition-transform transform hover:scale-105"
          >
            <FaInfoCircle className="mr-2" /> About Us
          </Link>

          <Link
            to="/blog"
            className="flex items-center hover:text-yellow-300 transition-transform transform hover:scale-105"
          >
            <FaBlog className="mr-2" /> Blog
          </Link>

          <Link
            to="/contact"
            className="flex items-center hover:text-yellow-300 transition-transform transform hover:scale-105"
          >
            <FaPhoneAlt className="mr-2" /> Contact Us
          </Link>

          <Link
            to="/profile"
            className="flex items-center hover:text-yellow-300 transition-transform transform hover:scale-105"
          >
            <FaUser className="mr-2" /> Profile
          </Link>
        </div>

        {/* Login/Sign Up Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/login"
            className="flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
          >
            <FaUser className="mr-2" /> Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white text-3xl">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#9C51B6] text-white space-y-4 py-4 px-6">
          <Link
            to="/home1"
            className="flex items-center hover:text-yellow-300"
            onClick={toggleMobileMenu}
          >
            <FaHome className="mr-2" /> Home
          </Link>

          <Link
            to="/about"
            className="flex items-center hover:text-yellow-300"
            onClick={toggleMobileMenu}
          >
            <FaInfoCircle className="mr-2" /> About Us
          </Link>

          <Link
            to="/blog"
            className="flex items-center hover:text-yellow-300"
            onClick={toggleMobileMenu}
          >
            <FaBlog className="mr-2" /> Blog
          </Link>

          <Link
            to="/contact"
            className="flex items-center hover:text-yellow-300"
            onClick={toggleMobileMenu}
          >
            <FaPhoneAlt className="mr-2" /> Contact Us
          </Link>

          <Link
            to="/profile"
            className="flex items-center hover:text-yellow-300"
            onClick={toggleMobileMenu}
          >
            <FaUser className="mr-2" /> Profile
          </Link>

          <Link
            to="/login"
            className="flex items-center px-10 py-2 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
            onClick={toggleMobileMenu}
          >
            <FaUser className="mr-2" /> Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
