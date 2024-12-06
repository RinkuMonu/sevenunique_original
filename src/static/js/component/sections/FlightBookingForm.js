import React, { useState } from 'react';
import { Plane } from 'lucide-react';

const FlightBookingForm = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    passengers: '1',
    class: 'economy',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Flight booking:', formData);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md">
      <div className="flex items-center space-x-3 mb-6">
        <Plane className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-800">Flight Booking</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Departure city"
              value={formData.from}
              onChange={(e) => setFormData({ ...formData, from: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Arrival city"
              value={formData.to}
              onChange={(e) => setFormData({ ...formData, to: e.target.value })}
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
          <input
            type="date"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Passengers</label>
            <select
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              value={formData.passengers}
              onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Class</label>
            <select
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              value={formData.class}
              onChange={(e) => setFormData({ ...formData, class: e.target.value })}
            >
              <option value="economy">Economy</option>
              <option value="business">Business</option>
              <option value="first">First Class</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Search Flights
        </button>
      </form>
    </div>
  );
};

export default FlightBookingForm;
