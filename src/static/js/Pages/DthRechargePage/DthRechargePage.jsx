import React from 'react';
import ServiceLayout from '../ServiceLayout/ServiceLayout';
import OfferSection from '../../component/sections/OfferSection';
import FAQSection from '../../component/sections/FAQSection';
import DthRechargeForm from '../../component/sections/DthRechargeForm';



const DthRechargePage = () => {
  return (
    <ServiceLayout title="DTH Recharge">
      <div className="space-y-6">
        <DthRechargeForm />
        <OfferSection serviceType="dth" />
        <FAQSection serviceType="dth" />
      </div>
    </ServiceLayout>
  );
};

export default DthRechargePage;
