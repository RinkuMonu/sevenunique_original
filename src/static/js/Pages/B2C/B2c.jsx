import React from "react";

import { Phone, Plane, Bus, Train, Tv, Zap, Flame } from "lucide-react";
import ServiceCard from "../ServiceCard/ServiceCard";

const services = [
  {
    icon: Phone,
    title: "Mobile Recharge",
    description: "Recharge your mobile phone instantly",
    link: "/mobile-recharge",
  },
  {
    icon: Plane,
    title: "Flight Booking",
    description: "Book domestic and international flights",
    link: "/flight-booking",
  },
  {
    icon: Bus,
    title: "Bus Tickets",
    description: "Book bus tickets across India",
    link: "/bus-booking",
  },
  {
    icon: Train,
    title: "Train Booking",
    description: "Book train tickets easily",
    link: "/train-booking",
  },
  {
    icon: Tv,
    title: "DTH Recharge",
    description: "Recharge your DTH connection",
    link: "/dth-recharge",
  },
  {
    icon: Zap,
    title: "Electricity Bill",
    description: "Pay your electricity bills",
    link: "/electricity-bill",
  },
  {
    icon: Flame,
    title: "Gas Bill",
    description: "Pay your gas bills online",
    link: "/gas-bill",
  },
];

const B2c = () => {
  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">PayTM Clone</h1>
          <p className="mt-2">All your payments and bookings in one place</p>
        </div>
      </header> */}

      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default B2c;

