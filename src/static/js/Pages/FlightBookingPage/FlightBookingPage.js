import React from 'react';
import ServiceLayout from '../ServiceLayout/ServiceLayout';
import FlightBookingForm from '../../component/sections/FlightBookingForm';
import OfferSection from '../../component/sections/OfferSection';
import FAQSection from '../../component/sections/FAQSection';

const FlightBookingPage = () => {
  return (
    <ServiceLayout title="Flight Booking">
      <div className="space-y-6">
        <FlightBookingForm />
        <OfferSection serviceType="flight" />
        <FAQSection serviceType="flight" />
      </div>
    </ServiceLayout>
  );
};

export default FlightBookingPage;
