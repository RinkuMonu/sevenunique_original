import React from "react";
import { Tag } from "lucide-react";

const OfferSection = ({ serviceType }) => {
  const getOffers = () => {
    switch (serviceType) {
      case "mobile":
        return [
          {
            id: "1",
            title: "First Recharge",
            description: "Get ₹50 cashback on first recharge",
            code: "FIRST50",
            discount: "₹50",
          },
          {
            id: "2",
            title: "Weekend Special",
            description: "10% cashback up to ₹100",
            code: "WEEKEND10",
            discount: "10%",
          },
        ];
      case "flight":
        return [
          {
            id: "1",
            title: "First Flight",
            description: "Flat ₹1000 off on first flight booking",
            code: "FLY1000",
            discount: "₹1000",
          },
          {
            id: "2",
            title: "International",
            description: "5% off on international flights",
            code: "INTL5",
            discount: "5%",
          },
        ];
      case "bus":
        return [
          {
            id: "1",
            title: "First Booking Offer",
            description: "Get ₹50 cashback on your first bus booking!",
            code: "FIRSTRIDE",
            discount: "₹50",
          },
          {
            id: "2",
            title: "Weekend Special Offer",
            description:
              "Enjoy 10% cashback on bus bookings this weekend (up to ₹100)!",
            code: "WEEKEND100",
            discount: "10%",
          },
        ];
      case "train":
        return [
          {
            id: "1",
            title: "Welcome Bonus",
            description: "Book your first train ticket and get ₹50 cashback!",
            code: "WELCOME50",
            discount: "₹50",
          },
          {
            id: "2",
            title: "Weekend Delight",
            description:
              "Travel smart this weekend with 10% cashback on train bookings (up to ₹100)!",
            code: "DELIGHT10",
            discount: "10%",
          },
        ];
      case "dth":
        return [
          {
            id: "1",
            title: "New User Offer",
            description:
              "Recharge your DTH for the first time and get ₹30 cashback!",
            code: "DTHNEW30",
            discount: "₹30",
          },
          {
            id: "2",
            title: "Monthly Saver",
            description: "Enjoy ₹50 cashback on DTH recharges of ₹500 or more!",
            code: "SAVER50",
            discount: "10%",
          },
        ];
      case "electricity":
        return [
          {
            id: "1",
            title: "First Payment Reward",
            description:
              "Pay your electricity bill for the first time and get ₹40 cashback!",
            code: "BILLNEW40",
            discount: "₹40",
          },
          {
            id: "2",
            title: "Power Saver Offer",
            description:
              "Get 5% cashback on electricity bill payments above ₹1000 (up to ₹75)!",
            code: "POWER75",
            discount: "10%",
          },
          {
            id: "3",
            title: "Monthly Cashback",
            description:
              "Pay your electricity bill and enjoy a flat ₹20 cashback!",
            code: "BILL20",
            discount: "20",
          },
        ];
      case "gas":
        return [
          {
            id: "1",
            title: "Welcome Offer",
            description:
              "Pay your gas bill for the first time and get ₹30 cashback!",
            code: "GASNEW30",
            discount: "₹30",
          },
          {
            id: "2",
            title: "Smart Saver",
            description:
              "Get 5% cashback on gas bill payments above ₹800 (up to ₹50)!",
            code: "GASSAVER50",
            discount: "5%",
          },
          {
            id: "3",
            title: "Monthly Delight",
            description: "Flat ₹20 cashback on every gas bill payment!",
            code: "GAS20",
            discount: "20",
          },
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
        <h2 className="text-xl font-semibold text-gray-800">
          Available Offers
        </h2>
      </div>
      <div className="grid gap-4">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="bg-white p-4 rounded-lg border border-gray-200"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-800">{offer.title}</h3>
                <p className="text-sm text-gray-600 mt-1">
                  {offer.description}
                </p>
              </div>
              <span className="text-green-600 font-semibold">
                {offer.discount}
              </span>
            </div>
            <div className="mt-2 flex items-center space-x-2">
              <span className="text-sm text-gray-500">Use code:</span>
              <code className="bg-gray-100 px-2 py-1 rounded text-blue-600 font-mono">
                {offer.code}
              </code>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfferSection;
