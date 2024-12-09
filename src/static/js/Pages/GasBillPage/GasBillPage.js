import React from 'react';
import ServiceLayout from '../ServiceLayout/ServiceLayout';
import OfferSection from '../../component/sections/OfferSection';
import FAQSection from '../../component/sections/FAQSection';
import GasBillForm from '../../component/sections/GasBillForm';


const GasBillPage = () => {
  return (
    <ServiceLayout title="Gas Bill Payment">
      <div className="space-y-6">
        <GasBillForm />
        <OfferSection serviceType="gas" />
        <FAQSection serviceType="gas" />
      </div>
    </ServiceLayout>
  );
};

export default GasBillPage;
