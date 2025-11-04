import React from 'react';
import { ShieldCheck, Truck, RefreshCw, Headphones } from 'lucide-react'; // icons

const OurPolicy = () => {
  const policies = [
    {

      icon: <Truck size={40} />,
      title: 'Free & Fast Delivery',
      description: 'Get your orders delivered quickly and safely right to your doorstep.',
    },
    {
      icon: <ShieldCheck size={40} />,
      title: 'Secure Payment',
      description: 'Your transactions are encrypted and 100% secure with us.',
    },
    {
      icon: <RefreshCw size={40} />,
      title: 'Easy Returns',
      description: 'Not satisfied with your product? Return it easily within 7 days.',
    },
    {
      icon: <Headphones size={40} />,
      title: '24/7 Support',
      description: 'Our team is available around the clock to assist you.',
    },
  ];

  return (
    <div className="my-16 px-4 sm:px-8">
      <h2 className="text-center text-3xl font-bold mb-10">Our Policies</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center "> 
        {policies.map((policy, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow bg-white hover:bg-gray-200 cursor-pointer"
          >
            <div className="flex justify-center text-blue-600 mb-4">{policy.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{policy.title}</h3>
            <p className="text-gray-600 text-sm">{policy.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPolicy;
