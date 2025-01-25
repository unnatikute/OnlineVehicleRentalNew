import { useState } from "react";

function PaymentForm() {
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({
    cardNumber: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.cardNumber) {
      formErrors.cardNumber = "Card number is required.";
    }
    if (!formData.cvv) {
      formErrors.cvv = "CVV is required.";
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0; // Returns true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Proceed with form submission
      console.log("Form Submitted", formData);
    } else {
      console.log("Form has errors");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className="block font-semibold text-gray-600 mb-2">Card Number</label>
        <input
          type="text"
          name="cardNumber"
          placeholder="Enter Card Number"
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
          value={formData.cardNumber}
          onChange={handleChange}
        />
        {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber}</p>}
      </div>

      <div>
        <label className="block font-semibold text-gray-600 mb-2">Expiry Date</label>
        <input
          type="text"
          name="expiryDate"
          placeholder="MM/YY"
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
          value={formData.expiryDate}
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="block font-semibold text-gray-600 mb-2">CVV</label>
        <input
          type="password"
          name="cvv"
          placeholder="***"
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
          value={formData.cvv}
          onChange={handleChange}
        />
        {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv}</p>}
      </div>

      <div className="mt-4">
        <button
          type="submit"
          className={`px-6 py-3 bg-green-500 text-white font-bold rounded-md ${
            !formData.cardNumber || !formData.cvv ? "bg-gray-300 cursor-not-allowed" : "hover:bg-green-600"
          }`}
          disabled={!formData.cardNumber || !formData.cvv}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default PaymentForm;
