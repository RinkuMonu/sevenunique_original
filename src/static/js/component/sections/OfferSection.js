import React from 'react';
import { Tag } from 'lucide-react';

const OfferSection = ({ serviceType }) => {
  const getOffers = () => {
    switch (serviceType) {
      case 'mobile':
        return [
          { id: '1', title: 'First Recharge', description: 'Get ₹50 cashback on first recharge', code: 'FIRST50', discount: '₹50' },
          { id: '2', title: 'Weekend Special', description: '10% cashback up to ₹100', code: 'WEEKEND10', discount: '10%' },
        ];
      case 'flight':
        return [
          { id: '1', title: 'First Flight', description: 'Flat ₹1000 off on first flight booking', code: 'FLY1000', discount: '₹1000' },
          { id: '2', title: 'International', description: '5% off on international flights', code: 'INTL5', discount: '5%' },
        ];
      // Add cases for other service types
      default:
        return [];
    }
  };

  const offers = getOffers();

  return (
    <section className="bg-gray-50 p-6 rounded-lg mb-6">
      <div className="flex items-center space-x-2 mb-4">
        <Tag className="w-5 h-5 text-blue-600" />
        <h2 className="text-xl font-semibold text-gray-800">Available Offers</h2>
      </div>
      <div className="grid gap-4">
        {offers.map((offer) => (
          <div key={offer.id} className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-800">{offer.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{offer.description}</p>
              </div>
              <span className="text-green-600 font-semibold">{offer.discount}</span>
            </div>
            <div className="mt-2 flex items-center space-x-2">
              <span className="text-sm text-gray-500">Use code:</span>
              <code className="bg-gray-100 px-2 py-1 rounded text-blue-600 font-mono">{offer.code}</code>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfferSection;
