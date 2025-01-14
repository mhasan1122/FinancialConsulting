import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import logo from './assets/logo.png';
import bannerlogo from './assets/banarlogo.png';
import { Typewriter } from 'react-simple-typewriter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/send-email', formData);
      toast.success(response.data.message); // Show success notification
      setFormData({ name: '', email: '', phone: '', business: '' }); // Reset form
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send email. Please try again.');
    }
  };

  return (
    <div className="bg-[#217A7E] text-white min-h-screen">
      <ToastContainer position="top-right" autoClose={5000} />
      {/* Header */}
      <header className="p-4 sm:p-6 flex justify-between items-center shadow-md">
        <img
          src={logo}
          alt="ZeroAPR Logo"
          className="h-10 sm:h-12 w-auto logo-animation"
          style={{ maxWidth: '250px' }}
        />
      </header>

      {/* About Section */}
      <section className="px-4 sm:px-8 py-12 sm:py-16 text-center bg-[#1b6468] rounded-b-2xl shadow-lg relative h-auto">
        <div className="absolute inset-0 opacity-30">
          <img src={bannerlogo} alt="Banner Logo" className="w-full h-full object-cover" />
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 relative z-10">
          <Typewriter words={['About ZeroAPR']} loop={1} typeSpeed={70} deleteSpeed={50} />
        </h2>
        <p className="text-sm sm:text-lg leading-relaxed max-w-2xl sm:max-w-3xl mx-auto relative z-10">
          <Typewriter
            words={[
              'At ZeroAPR, we help small business owners secure 0% APR financing from major banks. Stop paying high interest and keep more money in your pocket. Our experienced team is here to guide you every step of the way toward financial freedom.',
            ]}
            loop={1}
            typeSpeed={30}
          />
        </p>
      </section>

      {/* Client Form Section */}
      <section className="px-4 sm:px-8 py-12 sm:py-16 bg-white text-[#217A7E] rounded-t-3xl shadow-inner">
        <h2 className="text-2xl sm:text-4xl font-bold text-center mb-6 sm:mb-8">
          Stop Paying High Interest
        </h2>
        <form
          className="max-w-full sm:max-w-lg mx-auto space-y-6 bg-gray-50 p-4 sm:p-8 rounded-lg shadow"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col items-start">
            <label htmlFor="name" className="block text-sm font-semibold mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#217A7E] focus:border-transparent"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col items-start">
            <label htmlFor="email" className="block text-sm font-semibold mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#217A7E] focus:border-transparent"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col items-start">
            <label htmlFor="phone" className="block text-sm font-semibold mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#217A7E] focus:border-transparent"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col items-start">
            <label htmlFor="business" className="block text-sm font-semibold mb-1">
              Business Name
            </label>
            <input
              type="text"
              id="business"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#217A7E] focus:border-transparent"
              placeholder="Enter your business name"
              value={formData.business}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full p-4 bg-[#217A7E] text-white font-bold rounded hover:bg-[#1b6468] transition duration-300 shadow-lg"
          >
            Submit
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="p-4 text-center text-sm mt-8">
        <p>&copy; 2025 ZeroAPR. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
