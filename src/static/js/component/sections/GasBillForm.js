import React, { useState } from 'react';
import { Flame } from 'lucide-react';

const GasBillForm = () => {
  const [formData, setFormData] = useState({
    provider: '',
    accountNumber: '',
    amount: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Gas Bill:', formData);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md">
      <div className="flex items-center space-x-3 mb-6">
        <Flame className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-800">Gas Bill Payment</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Gas Provider
          </label>
          <select
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            value={formData.provider}
            onChange={(e) => setFormData({ ...formData, provider: e.target.value })}
            required
          >
            <option value="">Select provider</option>
            <option value="igl">Indraprastha Gas Limited</option>
            <option value="mgl">Mahanagar Gas Limited</option>
            <option value="ggl">Gujarat Gas Limited</option>
            <option value="agl">Adani Gas Limited</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Account Number / Consumer Number
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter account number"
            value={formData.accountNumber}
            onChange={(e) => setFormData({ ...formData, accountNumber: e.target.value })}
            required
          />
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

export default GasBillForm;
