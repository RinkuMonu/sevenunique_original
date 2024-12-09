import React, { useState } from 'react';
import { Tv } from 'lucide-react';

const DthRechargeForm = () => {
  const [formData, setFormData] = useState({
    customerId: '',
    operator: '',
    amount: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('DTH Recharge:', formData);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md">
      <div className="flex items-center space-x-3 mb-6">
        <Tv className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-800">DTH Recharge</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Customer ID / Subscriber ID
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Customer ID"
            value={formData.customerId}
            onChange={(e) => setFormData({ ...formData, customerId: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Operator
          </label>
          <select
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            value={formData.operator}
            onChange={(e) => setFormData({ ...formData, operator: e.target.value })}
            required
          >
            <option value="">Select operator</option>
            <option value="tatasky">Tata Play</option>
            <option value="dishtv">Dish TV</option>
            <option value="airtel">Airtel Digital TV</option>
            <option value="videocon">d2h</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Amount
          </label>
          <input
            type="number"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
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

export default DthRechargeForm;
