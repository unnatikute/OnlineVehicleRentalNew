// src/pages/Blog.jsx
import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  // Blog post data array with vehicle-related content
  const blogPosts = [
    {
      title: "Top 5 Tips for Maintaining Your Rental Vehicle",
      content:
        "Keeping your rental vehicle in good condition is essential for a smooth and safe journey. Here are some maintenance tips: check tire pressure, ensure oil levels are adequate, clean the vehicle regularly, and always report any issues immediately.",
      date: "January 21, 2025",
      image:
        "https://images.unsplash.com/photo-1508974239320-0a029497e820?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhciUyMG1haW50YW5lbmNlfGVufDB8fDB8fHww", // Replace with actual images
    },
    {
      title: "New Vehicles Available for Rent This Year!",
      content:
        "We’re excited to announce that we have added new models to our fleet. From luxury sedans to family-friendly SUVs, we’ve got the perfect vehicle for your next trip. Book now and enjoy a comfortable ride.",
      date: "January 19, 2025",
      image:
        "https://d2m3nfprmhqjvd.cloudfront.net/blog/20231103174155/new-Tata-Safari-1160x653.webp", // Replace with actual images
    },
    {
      title: "How to Choose the Right Vehicle for Your Road Trip",
      content:
        "Planning a road trip? It's crucial to choose the right vehicle for comfort and efficiency. Consider the number of passengers, luggage space, and fuel economy. Our selection of SUVs and minivans are perfect for long drives.",
      date: "January 15, 2025",
      image:
        "https://images.pexels.com/photos/376361/pexels-photo-376361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with actual images
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">
        Our Blogs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500 mb-4">{post.date}</p>
              <p className="text-gray-600">{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
