import React from 'react';
import { CreditCard, Smartphone, Building2 } from 'lucide-react';

const PaymentMethods = () => {
  const methods = [
    {
      icon: CreditCard,
      title: 'Cards',
      description: 'Credit & Debit cards',
    },
    {
      icon: Smartphone,
      title: 'UPI',
      description: 'Google Pay, PhonePe, etc.',
    },
    {
      icon: Building2,
      title: 'Net Banking',
      description: 'All major banks',
    },
  ];

  return (
    <section className="bg-gray-50 p-6 rounded-lg mb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Payment Methods</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {methods.map((method, index) => {
          const Icon = method.icon;
          return (
            <div key={index} className="bg-white p-2 rounded-lg border border-gray-200">
              <div className="flex items-center space-x-3">
                <Icon className="w-6 h-6 text-blue-600" />
                <div>
                  <h5 className="font-semibold text-gray-800">{method.title}</h5>
                  <p className="text-sm text-gray-600">{method.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PaymentMethods;