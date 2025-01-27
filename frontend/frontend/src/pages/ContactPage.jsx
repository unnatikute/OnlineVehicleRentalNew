import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import blurImage from "../assets/images/car4.avif";


const ContactPage = () => {
  return (
    <div
      className="bg-gray-500 min-h-screen flex items-center justify-center py-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${blurImage})` }} // Replace with the actual path to your image
    >
      <div className="max-w-5xl w-full bg-gray-800 text-white p-8 rounded-lg shadow-2xl bg-opacity-80">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
       

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-2xl text-blue-400" />
              <div>
                <h3 className="text-lg font-semibold">Address</h3>
                <p>4567 Maple Avenue, Suite 900, Cityville, CA 90000</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <FaPhone className="text-2xl text-green-400" />
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p>(123) 456-7890</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-2xl text-purple-400" />
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p>contact@example.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white bg-opacity-95  text-black p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Send Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Your Message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
