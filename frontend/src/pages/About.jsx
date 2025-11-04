import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="w-full flex flex-col items-center py-16 px-6 sm:px-16">
      
      {/* Header */}
      <h2 className="text-4xl font-bold text-gray-900">About Us</h2>
      <p className="text-gray-500 text-sm mt-2">Know who we are</p>

      {/* Content */}
      <div className="max-w-4xl mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Image Section */}
        <img
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
          alt="About"
          className="rounded-2xl shadow-lg"
        />

        {/* Text Section */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            We are redefining online shopping.
          </h3>

          <p className="text-gray-600 leading-7 mb-4">
            Welcome to <span className="font-semibold text-gray-900">ClothVerse</span>,
            your trusted online shopping destination. We bring trending products
            from premium brands at the most affordable prices.
          </p>

          <p className="text-gray-600 leading-7 mb-4">
            Our mission is to provide a seamless and delightful shopping experience
            through fast delivery, secure payments, and top-notch customer support.
          </p>

          <p className="text-gray-600 leading-7 mb-6">
            Whether it's clothes, accessories, lifestyle, or electronics — we’ve got
            everything curated for you.
          </p>
        <Link to={'/collection'}>
        <button className="px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition">
            Explore Products
          </button></Link>
          
        </div>
      </div>
    </div>
  );
};

export default About;
