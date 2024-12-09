import React from 'react';
import ServiceLayout from '../ServiceLayout/ServiceLayout';
import OfferSection from '../../component/sections/OfferSection';
import FAQSection from '../../component/sections/FAQSection';
import ElectricityBillForm from '../../component/sections/ElectricityBillForm';



const ElectricityBillPage = () => {
  return (
    <ServiceLayout title="Electricity Bill Payment">
      <div className="space-y-6">
        <ElectricityBillForm />
        <OfferSection serviceType="electricity" />
        <FAQSection serviceType="electricity" />
      </div>
    </ServiceLayout>
  );
};

export default ElectricityBillPage;
