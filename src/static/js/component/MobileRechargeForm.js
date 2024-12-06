import React, { useState } from 'react';
import { Phone, Radio } from 'lucide-react';

const MobileRechargeForm = () => {
  const [formData, setFormData] = useState({
    mobileNumber: '',
    operator: '',
    amount: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md">
      <div className="flex items-center space-x-3 mb-6">
        <Phone className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-800">Mobile Recharge</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Mobile Number
          </label>
          <input
            type="tel"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter mobile number"
            value={formData.mobileNumber}
            onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Operator
          </label>
          <select
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={formData.operator}
            onChange={(e) => setFormData({ ...formData, operator: e.target.value })}
            required
          >
            <option value="">Select operator</option>
            <option value="airtel">Airtel</option>
            <option value="jio">Jio</option>
            <option value="vi">Vi</option>
            <option value="bsnl">BSNL</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Amount
          </label>
          <input
            type="number"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter amount"
            value={formData.amount}
            onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Proceed to Pay
        </button>
      </form>
    </div>
  );
};

export default MobileRechargeForm;
