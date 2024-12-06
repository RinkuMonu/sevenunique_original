import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import PaymentMethods from '../../component/sections/PaymentMethods';
import RecentTransactions from '../../component/sections/RecentTransactions';

const ServiceLayout = ({ title, children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
            <Link to="/" className="mr-4">
              <ArrowLeft className="w-5 h-5 text-gray-600 hover:text-gray-900" />
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {children}
          </div>
          <div className="space-y-6">
            <PaymentMethods />
            <RecentTransactions />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServiceLayout;
