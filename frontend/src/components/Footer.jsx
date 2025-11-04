import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-orange-500">ClothVerse</h2>
          <p className="mt-2">Your one-stop solution for online shopping.</p>
          <p className="mt-3 text-sm text-gray-400">
            © {new Date().getFullYear()} ShopKart. All Rights Reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-orange-400 transition">Home</a></li>
            <li><a href="/products" className="hover:text-orange-400 transition">Shop</a></li>
            <li><a href="/cart" className="hover:text-orange-400 transition">Cart</a></li>
            <li><a href="/about" className="hover:text-orange-400 transition">About Us</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2">
            <li><a href="/contact" className="hover:text-orange-400 transition">Help & FAQ</a></li>
            <li><a href="/return-policy" className="hover:text-orange-400 transition">Return Policy</a></li>
            <li><a href="/terms" className="hover:text-orange-400 transition">Terms & Conditions</a></li>
            <li><a href="/privacy" className="hover:text-orange-400 transition">Privacy Policy</a></li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
