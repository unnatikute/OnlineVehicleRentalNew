import React, { useState, useEffect } from "react";
import axios from "axios";

const UserProfile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    profilePicture: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch user details
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get("/api/user"); // Update this endpoint to match your backend
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
        setError("Failed to fetch user details. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchUserDetails();
  }, []);

  const handleUpdate = async () => {
    try {
      await axios.put("/api/user", user); // Update endpoint accordingly
      setIsEditing(false);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      setError("Failed to update profile. Please try again.");
    }
  };

  const handleCancel = () => {
    // Revert the changes by fetching user details again
    setIsEditing(false);
    setUser({
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
      address: user.address,
      profilePicture: user.profilePicture,
    });
  };

  const handleProfilePictureChange = (e) => {
    setUser({
      ...user,
      profilePicture: URL.createObjectURL(e.target.files[0]), // Handle profile picture preview
    });
  };

  if (isLoading) {
    return (
      <div className="text-center p-4">
        <p>Loading your profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          User Profile
        </h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form>
          {/* Profile Picture */}
          <div className="flex justify-center mb-4">
            {user.profilePicture ? (
              <img
                src={user.profilePicture}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
                <span className="text-white text-xl">No Picture</span>
              </div>
            )}
          </div>

          {/* Name Field */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              disabled={!isEditing}
              placeholder="Enter your name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>

          {/* Email Field (view-only) */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700" required
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={user.email}
          
              placeholder="Your email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm" required
            />
          </div>

          {/* Phone Number Field */}
          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              value={user.phoneNumber}
              onChange={(e) =>
                setUser({ ...user, phoneNumber: e.target.value })
              }
              disabled={!isEditing}
              placeholder="Enter your phone number"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>

          {/* Address Field */}
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <textarea
              id="address"
              value={user.address}
              onChange={(e) => setUser({ ...user, address: e.target.value })}
              disabled={!isEditing}
              placeholder="Enter your address"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>

          {/* Profile Picture Input (optional) */}
          {isEditing && (
            <div className="mb-4">
              <label
                htmlFor="profilePicture"
                className="block text-sm font-medium text-gray-700"
              >
                Profile Picture
              </label>
              <input
                type="file"
                id="profilePicture"
                onChange={handleProfilePictureChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>
          )}
        </form>

        <div className="mt-6 flex justify-between">
          {isEditing ? (
            <>
              <button
                className="px-4 py-2 bg-green-500 text-white rounded"
                onClick={handleUpdate}
              >
                Save Changes
              </button>
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => setIsEditing(true)}
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
