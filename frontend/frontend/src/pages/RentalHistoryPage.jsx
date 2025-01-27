import React from "react";

const RentalHistoryPage = () => {
  const rentalHistory = [
    {
      id: 1,
      vehicle: "Toyota",
      rentDate: "2025-01-01",
      returnDate: "2025-01-05",
      amount: "200",
    },
    {
      id: 2,
      vehicle: "Honda",
      rentDate: "2025-01-10",
      returnDate: "2025-01-15",
      amount: "300",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-gray-800 via-purple-900 to-black">
      <h2 className="text-3xl font-bold text-white mt-8 mb-4">Rental History</h2>
      <div className="w-full max-w-3xl bg-gray-800 p-6 rounded-lg shadow-lg">
        <table className="w-full text-left text-white">
          <thead>
            <tr>
              <th className="border-b border-gray-700 p-3">Vehicle</th>
              <th className="border-b border-gray-700 p-3">Rent Date</th>
              <th className="border-b border-gray-700 p-3">Return Date</th>
              <th className="border-b border-gray-700 p-3">Amount</th>
            </tr>
          </thead>
          <tbody>
            {rentalHistory.map((rental) => (
              <tr key={rental.id}>
                <td className="p-3 border-b border-gray-700">{rental.vehicle}</td>
                <td className="p-3 border-b border-gray-700">{rental.rentDate}</td>
                <td className="p-3 border-b border-gray-700">{rental.returnDate}</td>
                <td className="p-3 border-b border-gray-700">{rental.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RentalHistoryPage;
