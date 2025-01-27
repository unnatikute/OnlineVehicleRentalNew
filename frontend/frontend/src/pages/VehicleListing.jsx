import React, { useState, useEffect } from "react";
import axios from "axios";

const VehicleListing = () => {
  const [vehicles, setVehicles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get("/api/vehicles");
        setVehicles(response.data);
        setError(null);
      } catch (error) {
        setError("Error fetching vehicles");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, []);

  if (loading) return <p>Loading vehicles...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Available Vehicles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {vehicles.map((vehicle) => (
          <div
            key={vehicle._id}
            className="p-4 border rounded shadow hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold">{vehicle.name}</h3>
            <p className="text-sm text-gray-600">{vehicle.brand}</p>
            <p className="mt-2">Category: {vehicle.category}</p>
            <p>Rent Per Day: ${vehicle.rentPerDay}</p>
            <p>
              Availability:{" "}
              <span
                className={`font-bold ${
                  vehicle.availability ? "text-green-500" : "text-red-500"
                }`}
              >
                {vehicle.availability ? "Available" : "Unavailable"}
              </span>
            </p>
            <button
              className="mt-4 w-full px-3 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
              disabled={!vehicle.availability}
            >
              {vehicle.availability ? "Rent Now" : "Not Available"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleListing;
