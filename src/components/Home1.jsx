import React from "react";
import { Link } from "react-router-dom";
import blurImage1 from "../assets/images/walpaper1.jpg";
import blurImage2 from "../assets/images/walpaper2.jpg";
import blurImage3 from "../assets/images/walpaper3.jpg";

import AboutUs from "../pages/About";
import PopularCars from "../pages/CarList";
import Testimonials from "../pages/Testimonal";
import Blog from "../pages/Blog";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home1 = () => {
  return (
    <div>
      <Navbar/>
      {/* CSS for Full-Screen Image Slider */}
      <style>
        {`
          @keyframes slideBackground {
            0%, 33% {
              background-image: url(${blurImage1});
            }
            34%, 66% {
              background-image: url(${blurImage2});
            }
            67%, 100% {
              background-image: url(${blurImage3});
            }
          }

          .slider {
            animation: slideBackground 15s infinite;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            height: 100vh; /* Full screen height */
            width: 100%; /* Full width of the container */
          }
        `}
      </style>

      {/* Main Section with Sliding Background Image */}
      <div
        className="min-h-screen relative slider flex items-center justify-center"
        style={{
          animationTimingFunction: "ease-in-out",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          {/* Content */}
          <div className="relative z-10 text-white text-center px-5 max-w-3xl mx-auto">
            <h1
              className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-wide"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <span className="text-blue-400">Rent</span>Vehicle
            </h1>
            <p
              className="text-base md:text-lg mt-6 leading-relaxed font-bold"
              style={{
                fontFamily: "Poppins, sans-serif",
                lineHeight: "1.8",
                fontSize: "25px",
                paddingTop: "10px",
              }}
            >
              Welcome to{" "}
              <strong>
                <span style={{ color: "yellow" }}>Rent</span>Vehicle
              </strong>
              , your trusted platform for renting vehicles anytime, anywhere.
              We offer a wide range of vehicles to meet your travel needs,
              ensuring convenience, quality service, and a seamless booking
              experience.
            </p>

            {/* Book a Ride Button */}
            <Link
              to="/home"
              className="inline-block mt-8 px-4 md:px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105" style={{fontSize: "20px"}}
            >
              Book a Ride
            </Link>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="bg-white">
        <AboutUs />
      </div>
      <div className="bg-white">
        <PopularCars />
      </div>
      <div className="bg-white">
        <Testimonials />
      </div>

      <div className="bg-white">
        <Blog />
      </div>
      <Footer/>
    </div>
   
    
  );
};

export default Home1;
