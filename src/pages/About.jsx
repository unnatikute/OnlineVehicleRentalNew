import React, { useEffect, useState } from "react";
import aboutImage from "../assets/images/verna.jpg"; // Replace with your actual image path

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById("about-us-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <div
      id="about-us-section"
      className="min-h-screen bg-white text-gray-900 py-12 px-3 flex items-center justify-center" style={{ marginTop: "-50px" }} 
    >
      
      <div className="max-w-5xl flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2 p-4 flex justify-center">
          <img
            src={aboutImage}
            alt="About Us"
            className={`w-full h-auto object-cover rounded-lg shadow-lg transition-all duration-1000 ${
              isVisible ? "transform scale-105" : "transform scale-95 opacity-50"
            }`}style={{height: "280px", width: "500px"}}
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 p-4 flex flex-col justify-center text-center md:text-left">
          <h2
            className={`text-4xl font-bold mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            } bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent`}
            style={{ paddingLeft: "50px", fontFamily: "Poppins, sans-serif" }}
          >
            WHY RENTVEHICLE!!!!
           
          </h2>
          <p
            className={`text-lg leading-relaxed transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            style={{ paddingLeft: "50px" ,fontFamily: "Roboto, sans-serif", lineHeight: "1.8",  fontSize: "20px" }}
          >
            At RentVehicle, we are dedicated to providing our customers with the
            best rental experience. Our platform connects you with a variety of
            vehicles, ensuring you can find the perfect ride for any occasion.
            With a commitment to quality and customer satisfaction, we aim to
            make vehicle rental easy, affordable, and stress-free.
          </p>
          <p
            className={`text-lg leading-relaxed mt-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            style={{paddingLeft: "50px", fontFamily: "Roboto, sans-serif", lineHeight: "1.8" }}
          >
            Whether you're planning a weekend getaway or need a vehicle for a
            business trip, RentVehicle has got you covered. Explore our fleet
            and enjoy the journey with peace of mind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
