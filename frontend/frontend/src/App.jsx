import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import Layout from './components/layout/Layout'; // Path to your Layout component
import Home from './components/Book.jsx';
import UserProfile from './pages/UserProfile';
import VehicleListing from './pages/VehicleListing';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgetPassword from './pages/ForgetPassword';
import Home1 from './components/Home1';
import UserBookingDetails from './pages/UserBookingDetails';
import PaymentPage from './pages/PaymentPage';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from './pages/About';
import Testimonials from './pages/Testimonal';
import Blog from './pages/Blog';
import BookingPage from './pages/BookingPage';
import Book from './components/Book';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Wrap your routes with Layout for shared components like Navbar and Footer */}
        <Route element={<Layout />}>
          {/* Home1 and other routes */}
          <Route path="/" element={<Home1 />} />
          <Route path="/home" element={<Book />} />

          {/* Other pages */}
          <Route path="contact" element={<ContactPage />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="vehicle" element={<VehicleListing />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forget-password" element={<ForgetPassword />} />
          <Route path="/book-page" element={<Book />} />
          <Route path="/testimonal" element={<Testimonials />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/user-booking-details" element={<UserBookingDetails />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/book" element={<BookingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
