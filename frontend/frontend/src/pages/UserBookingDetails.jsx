import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserBookingDetails = () => {
  const navigate = useNavigate();
  const [searchCriteria, setSearchCriteria] = useState({
    bookingType: "Daily",
    pickupDate: "",
    pickupTime: "",
    dropDate: "",
    dropTime: "",
  });
  const [userDetails, setUserDetails] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    address: "",
  });
  const [warning, setWarning] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in searchCriteria) {
      setSearchCriteria({ ...searchCriteria, [name]: value });
    } else {
      setUserDetails({ ...userDetails, [name]: value });
    }
  };

  const handleConfirmBooking = () => {
    // Check if any field is empty
    const isSearchCriteriaIncomplete = Object.values(searchCriteria).some(
      (value) => value.trim() === ""
    );
    const isUserDetailsIncomplete = Object.values(userDetails).some(
      (value) => value.trim() === ""
    );

    if (isSearchCriteriaIncomplete || isUserDetailsIncomplete) {
      setWarning("Please fill out all mandatory fields before confirming your booking.");
      return;
    }

    setWarning(""); // Clear warning if all fields are filled
    navigate("/payment");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-6">
        {/* Page Header */}
        <h1 className="text-3xl font-bold text-center text-blue-600">
          User Booking Details
        </h1>
        <p className="text-center text-gray-700 mt-2">
          Review and confirm your booking details below.
        </p>

        {/* Warning Message */}
        {warning && (
          <div className="bg-red-100 text-red-700 border border-red-500 rounded-md p-4 mt-4 text-center">
            {warning}
          </div>
        )}

        {/* Booking Details Form */}
        <div className="bg-white rounded-lg shadow-lg p-6 mt-8 max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">Booking Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">
                Pickup Date (DD-MM-YYYY)
              </label>
              <input
                type="text"
                name="pickupDate"
                placeholder="Enter pickup date"
                className="w-full px-4 py-2 rounded-md border border-gray-300"
                value={searchCriteria.pickupDate}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">
                Pickup Time (HH:MM)
              </label>
              <input
                type="text"
                name="pickupTime"
                placeholder="Enter pickup time"
                className="w-full px-4 py-2 rounded-md border border-gray-300"
                value={searchCriteria.pickupTime}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">
                Drop Date (DD-MM-YYYY)
              </label>
              <input
                type="text"
                name="dropDate"
                placeholder="Enter drop date"
                className="w-full px-4 py-2 rounded-md border border-gray-300"
                value={searchCriteria.dropDate}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">
                Drop Time (HH:MM)
              </label>
              <input
                type="text"
                name="dropTime"
                placeholder="Enter drop time"
                className="w-full px-4 py-2 rounded-md border border-gray-300"
                value={searchCriteria.dropTime}
                onChange={handleChange}
              />
            </div>
          </div>

          <h2 className="text-xl font-semibold mt-6 mb-4">User Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="font-semibold text-gray-600 mb-2">Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your name"
                className="px-4 py-2 border border-gray-300 rounded-md"
                value={userDetails.fullName}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-gray-600 mb-2">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Enter your phone number"
                className="px-4 py-2 border border-gray-300 rounded-md"
                value={userDetails.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-gray-600 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="px-4 py-2 border border-gray-300 rounded-md"
                value={userDetails.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-gray-600 mb-2">Address</label>
              <textarea
                name="address"
                placeholder="Enter your address"
                className="px-4 py-2 border border-gray-300 rounded-md"
                rows="3"
                value={userDetails.address}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={handleConfirmBooking}
              className="px-6 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition"
            >
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBookingDetails;
