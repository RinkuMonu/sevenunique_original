import React from 'react';
import { Clock } from 'lucide-react';

const RecentTransactions = () => {
  const transactions = [
    {
      id: '1',
      date: '2024-03-20',
      amount: '₹499',
      status: 'success',
      details: 'Mobile Recharge - Jio'
    },
    {
      id: '2',
      date: '2024-03-19',
      amount: '₹2,999',
      status: 'pending',
      details: 'Flight Booking - Mumbai to Delhi'
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'success':
        return 'text-green-600 bg-green-50';
      case 'pending':
        return 'text-yellow-600 bg-yellow-50';
      case 'failed':
        return 'text-red-600 bg-red-50';
      default:
        return '';
    }
  };

  return (
    <section className="bg-gray-50 p-6 rounded-lg mb-6">
      <div className="flex items-center space-x-2 mb-4">
        <Clock className="w-5 h-5 text-blue-600" />
        <h2 className="text-xl font-semibold text-gray-800">Recent Transactions</h2>
      </div>
      <div className="space-y-3">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-semibold text-gray-800">{transaction.details}</p>
                <p className="text-sm text-gray-500">{new Date(transaction.date).toLocaleDateString()}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">{transaction.amount}</p>
                <span className={`text-sm px-2 py-1 rounded-full ${getStatusColor(transaction.status)}`}>
                  {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentTransactions;