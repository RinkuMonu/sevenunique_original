import React from 'react';
import ServiceLayout from '../ServiceLayout/ServiceLayout';
import OfferSection from '../../component/sections/OfferSection';
import FAQSection from '../../component/sections/FAQSection';
import TrainBookingForm from '../../component/sections/TrainBookingForm';




const TrainBookingPage = () => {
  return (
    <ServiceLayout title="Train Booking">
      <div className="space-y-6">
        <TrainBookingForm/>
        <OfferSection serviceType="train" />
        <FAQSection serviceType="train" />
      </div>
    </ServiceLayout>
  );
};

export default TrainBookingPage;
