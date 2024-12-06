import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon: Icon, title, description, link }) => {
  return (
    <Link to={link} className="block">
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <div className="flex items-center space-x-4">
          <div className="bg-blue-50 p-3 rounded-full">
            <Icon className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
