import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formData);

    alert("Thank you! Your message has been submitted.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-16 px-6 sm:px-16 bg-gray-50">
      
      {/* Heading */}
      <h2 className="text-4xl font-bold text-gray-900">Contact Us</h2>
      <p className="text-gray-600 text-sm mt-2">We would love to hear from you</p>

      {/* Content Container */}
      <div className="w-full max-w-4xl mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Contact Form */}
        <form 
          onSubmit={onSubmitHandler}
          className="flex flex-col gap-5 bg-white p-8 rounded-2xl shadow-lg"
        >
          <h3 className="text-xl font-semibold text-gray-800">Send a Message</h3>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-3 border rounded-lg outline-none focus:border-gray-800 transition"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 border rounded-lg outline-none focus:border-gray-800 transition"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Write your message..."
            rows="5"
            className="w-full px-4 py-3 border rounded-lg outline-none focus:border-gray-800 transition"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Submit
          </button>
        </form>

        {/* Contact Information */}
        <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col gap-6 justify-center">
          <h3 className="text-xl font-semibold text-gray-800">Reach Us At</h3>

          <p className="flex flex-col text-gray-600">
            <span className="font-medium text-gray-900">Address:</span>
            Delhi , India
          </p>
    
          <p className="flex flex-col text-gray-600">
            <span className="font-medium text-gray-900">Phone:</span>
            844549xxxx
          </p>

          <p className="flex flex-col text-gray-600 break-words">
            <span className="font-medium text-gray-900">Email:</span>
            support@clothverse.com
          </p>

          <p className="text-gray-600">
            We typically reply within <span className="font-semibold">24 hours.</span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Contact;
