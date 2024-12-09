import React from 'react';
import ServiceLayout from '../ServiceLayout/ServiceLayout';
import OfferSection from '../../component/sections/OfferSection';
import FAQSection from '../../component/sections/FAQSection';
import BusBookingForm from '../../component/sections/BusBookingForm';


const BusBookingPage = () => {
  return (
    <ServiceLayout title="Bus Booking">
      <div className="space-y-6">
        <BusBookingForm />
        <OfferSection serviceType="bus" />
        <FAQSection serviceType="bus" />
      </div>
    </ServiceLayout>
  );
};

export default BusBookingPage;
