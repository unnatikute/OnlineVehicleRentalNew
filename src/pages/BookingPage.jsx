import React, { useState } from "react";

const BookingPage = () => {
  const [vehicleId, setVehicleId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleBooking = (e) => {
    e.preventDefault();
    const bookingData = { vehicleId, startDate, endDate };

    // Process the bookingData (e.g., send to an API or store in state)
    console.log("Booking Submitted:", bookingData);

    // Navigate to the user booking details page after submitting
    // You can use `useNavigate` if you want programmatic navigation
    window.location.href = "/user-booking-details";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 via-purple-900 to-black">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          Book a Vehicle
        </h2>
        <form onSubmit={handleBooking}>
          <div className="mb-4">
            <label
              className="block text-gray-300 font-medium mb-2"
              htmlFor="vehicleId"
            >
              Vehicle ID
            </label>
            <input
              type="text"
              id="vehicleId"
              value={vehicleId}
              onChange={(e) => setVehicleId(e.target.value)}
              className="w-full px-3 py-2 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-300 font-medium mb-2"
              htmlFor="startDate"
            >
              Start Date
            </label>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full px-3 py-2 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-300 font-medium mb-2"
              htmlFor="endDate"
            >
              End Date
            </label>
            <input
              type="date"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full px-3 py-2 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700"
          >
            Submit Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
