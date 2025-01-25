import { useState, useEffect } from "react";
import { FaCity } from "react-icons/fa";
import blurImage from "../assets/images/car8.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
  const [vehicles, setVehicles] = useState([]);
  const [searchCriteria, setSearchCriteria] = useState({
    city: "Pune",
    bookingType: "Daily",
    pickupDate: "",
    pickupTime: "",
    dropDate: "",
    dropTime: "",
  });
  const [warning, setWarning] = useState("");
  const [products1, setProducts1] = useState([]);

  const navigate = useNavigate();

  const apiUrl = "http://192.168.1.8:5000/api/v1/product/get-products";

  const getProduct = async () => {
    if (!searchCriteria.city) {
      setWarning("Please select a city to proceed.");
      return; // Exit the function if no city is selected
    }

    setWarning("");
    try {
      const { data } = await axios.get(apiUrl);
      console.log(data.products);
      setProducts1(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const handleChange = (e) => {
    setSearchCriteria({
      ...searchCriteria,
      [e.target.name]: e.target.value,
    });
  };

  const findVehicles = async () => {
    try {
      const location = searchCriteria.city.trim(); // Ensure no trailing spaces
      console.log("Querying location:", location);

      const response = await axios.get(
        "http://localhost:4000/api/v1/products/getByLocation",
        { params: { location } }
      );

      console.log("Fetched Vehicles Data:", response.data.data);

      if (Array.isArray(response.data.data) && response.data.data.length > 0) {
        setVehicles(response.data.data);
      } else {
        console.warn("No vehicles found for the given location.");
        setVehicles([]);
      }
    } catch (error) {
      console.error("Failed to fetch vehicle data:", error);
      setVehicles([]); // Reset vehicles on error
    }
  };

  const bookVehicle = (vehicle) => {
    alert(`You selected ${vehicle.name}. Proceed to booking & payment.`);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${blurImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" ></div>

      <div className="relative z-10 text-white text-center p-8" style={{marginTop: "85px"}}>
        <h1 className="text-4xl font-extrabold mb-2">
          <span className="text-blue-400">Rent</span>Vehicle
        </h1>
        <p className="text-sm italic">Customer safety is our Priority..</p>

        <h2 className="text-5xl font-bold mt-6">ASSURED RENTALS</h2>
        <p className="text-lg mt-4">
          Rent from India's Largest Fleet of Vehicles, Trusted by Customers
        </p>

        <div className="bg-white bg-opacity-90 text-gray-900 p-6 rounded-lg mt-10 shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Book Your Ride</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">City</label>
              <div className="flex items-center space-x-2">
                <FaCity />
                <select
                  name="city"
                  className="w-full px-4 py-2 rounded-md border border-gray-300"
                  value={searchCriteria.city}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select City
                  </option>{" "}
                  {/* Placeholder option */}
                  <option value="Pune">Pune</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Chh.Sambhajinagar">Chh.Sambhajinagar</option>
                </select>
              </div>
            </div>
            {warning && (
              <div className="mt-2 text-red-600 font-semibold text-left">
                ⚠️ {warning}
              </div>
            )}

            {/* Additional inputs */}
          </div>

          <button
            onClick={findVehicles}
            className="px-6 py-3 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 transition mt-6"
          >
            Fin
          </button>

          <button
            onClick={findVehicles}
            className="px-6 py-3 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 transition mt-6" style={{marginLeft: "30px"}}
          >
            Find Bike
          </button>
        </div> 

        {vehicles.length > 0 && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((car, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={car.vehicleImage}
                  alt={car.name}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="p-6 grid grid-cols-2 ">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {car.name}
                  </h3>
                  <p className="text-lg text-gray-600 mt-2">
                    Price :{car.rentalPricePerDay}/hr
                  </p>
                  <p className="text-lg text-gray-600 mt-2">{car.location}</p>
                  <p className="text-lg text-gray-600 mt-2">
                    {car.available ? "Available" : "Not Available"}
                  </p>
                </div>

                <button
                  onClick={() => navigate("/book")}
                  className="btn px-4 py-2 w-32 bg-blue-500 text-white text-lg rounded-full text-center hover:bg-blue-700 transition duration-300"
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
