import React from 'react';

const PopularCars = () => {
  const cars = [
    { id: 1, name: 'Tesla Model S', price: '$30 per hour', image: 'car1.jpg' },
    { id: 2, name: 'BMW 3 Series', price: '$25 per hour', image: 'car2.jpg' },
    { id: 3, name: 'Audi A4', price: '$28 per hour', image: 'car3.jpg' },
    { id: 4, name: 'Mercedes-Benz C-Class', price: '$35 per hour', image: 'car4.jpg' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-8">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
        Our Popular Cars
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map((car) => (
          <div key={car.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800">{car.name}</h3>
              <p className="text-lg text-gray-600 mt-2">{car.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCars;
