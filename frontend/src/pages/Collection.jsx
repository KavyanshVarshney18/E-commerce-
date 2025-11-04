import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(true); // default visible

  return (
    <div className="flex flex-col sm:flex-row gap-10 pt-10 border-t">
      
      {/* Left Side - FILTERS */}
      <div className="w-60">
        <p
          className="text-xl font-semibold cursor-pointer mb-4"
          onClick={() => setShowFilter(!showFilter)}
        >
          FILTERS
        </p>

        {/* Category Filter Box */}
        <div
          className={`bg-white border border-gray-200 rounded-xl shadow-sm p-5 transition-all duration-300 ease-in-out ${
            showFilter ? "block" : "hidden"
          }`}
        >
          <p className="mb-3 text-base font-semibold tracking-wide border-b pb-2">
            Categories
          </p>

          <div className="flex flex-col gap-3 text-sm text-gray-700">
            <label className="flex items-center gap-2 cursor-pointer hover:text-black">
              <input className="w-4 h-4 accent-black" type="checkbox" value="Men" />
              Men
            </label>

            <label className="flex items-center gap-2 cursor-pointer hover:text-black">
              <input className="w-4 h-4 accent-black" type="checkbox" value="Women" />
              Women
            </label>

            <label className="flex items-center gap-2 cursor-pointer hover:text-black">
              <input className="w-4 h-4 accent-black" type="checkbox" value="Kids" />
              Kids
            </label>
          </div>
        </div>
      </div>

      {/* Right Side - PRODUCTS LISTING */}
      <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {products?.map((item) => (
          <div key={item.id} className="hover:scale-105 transition cursor-pointer">
            <img src={item.image} alt={item.name} className="rounded-lg" />
            <p className="mt-2 text-sm font-medium">{item.name}</p>
            <p className="text-gray-600 text-sm font-semibold">₹{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
