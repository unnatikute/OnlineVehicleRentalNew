import React, { useState } from 'react';
import axios from 'axios';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [step, setStep] = useState(1); // Step 1: Email, Step 2: OTP, Step 3: New Password
  const [message, setMessage] = useState('');

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/forget-password', { email });
      setMessage(response.data.message);
      setStep(2); // Proceed to OTP step
    } catch (error) {
      setMessage('Error sending OTP to your email');
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/verify-otp', { email, otp });
      setMessage(response.data.message);
      setStep(3); // Proceed to set new password
    } catch (error) {
      setMessage('Invalid OTP, please try again');
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/reset-password', { email, newPassword });
      setMessage(response.data.message);
      setStep(1); // Reset to initial step after successful password reset
    } catch (error) {
      setMessage('Error resetting password, please try again');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg w-full max-w-md transform transition-all duration-300 hover:scale-105">
        <h2 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 mb-8">
          {step === 1 && 'Forget Password'}
          {step === 2 && 'Verify OTP'}
          {step === 3 && 'Reset Password'}
        </h2>
        
        {step === 1 && (
          <form onSubmit={handleEmailSubmit}>
            <div className="mb-6">
              <label className="block text-gray-400 font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border-none rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-gradient-to-r from-purple-400 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Send OTP
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleOtpSubmit}>
            <div className="mb-6">
              <label className="block text-gray-400 font-medium mb-2" htmlFor="otp">
                OTP
              </label>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter the OTP sent to your email"
                className="w-full px-4 py-2 border-none rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-gradient-to-r from-purple-400 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Verify OTP
            </button>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={handlePasswordSubmit}>
            <div className="mb-6">
              <label className="block text-gray-400 font-medium mb-2" htmlFor="newPassword">
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter your new password"
                className="w-full px-4 py-2 border-none rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-gradient-to-r from-purple-400 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Reset Password
            </button>
          </form>
        )}

        {message && (
          <p className={`mt-4 text-center text-sm ${message.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default ForgetPassword;