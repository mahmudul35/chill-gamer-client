import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const SubscriptionPlans = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-pink-500 to-pink-800 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Choose Your Plan</h2>
        <p className="text-lg mb-12">
          Select the best plan to unlock premium content and features!
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-4">Basic Plan</h3>
            <p className="text-4xl font-bold mb-4">$5/month</p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-center text-lg">
                <FaCheckCircle className="text-green-500 mr-2" />
                Unlimited Access to Reviews
              </li>
              <li className="flex items-center text-lg">
                <FaCheckCircle className="text-green-500 mr-2" />
                Game Genre Insights
              </li>
              <li className="flex items-center text-lg">
                <FaCheckCircle className="text-green-500 mr-2" />
                Email Support
              </li>
            </ul>
            <button className="bg-pink-800 text-white py-2 px-6 rounded-md hover:bg-pink-600 transition duration-300">
              Choose Plan
            </button>
          </div>

          {/* Standard Plan */}
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-4">Standard Plan</h3>
            <p className="text-4xl font-bold mb-4">$10/month</p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-center text-lg">
                <FaCheckCircle className="text-green-500 mr-2" />
                Everything in Basic Plan
              </li>
              <li className="flex items-center text-lg">
                <FaCheckCircle className="text-green-500 mr-2" />
                Early Access to New Reviews
              </li>
              <li className="flex items-center text-lg">
                <FaCheckCircle className="text-green-500 mr-2" />
                Priority Support
              </li>
            </ul>
            <button className="bg-pink-800 text-white py-2 px-6 rounded-md hover:bg-pink-600 transition duration-300">
              Choose Plan
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-4">Premium Plan</h3>
            <p className="text-4xl font-bold mb-4">$20/month</p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-center text-lg">
                <FaCheckCircle className="text-green-500 mr-2" />
                Everything in Standard Plan
              </li>
              <li className="flex items-center text-lg">
                <FaCheckCircle className="text-green-500 mr-2" />
                Exclusive Content Access
              </li>
              <li className="flex items-center text-lg">
                <FaCheckCircle className="text-green-500 mr-2" />
                24/7 Live Support
              </li>
            </ul>
            <button className="bg-pink-800 text-white py-2 px-6 rounded-md hover:bg-pink-600 transition duration-300">
              Choose Plan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
