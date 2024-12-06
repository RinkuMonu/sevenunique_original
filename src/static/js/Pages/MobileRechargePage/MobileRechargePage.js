import React from 'react';
import ServiceLayout from '../ServiceLayout/ServiceLayout';
import MobileRechargeForm from '../../component/MobileRechargeForm';
import OfferSection from '../../component/sections/OfferSection';
import FAQSection from '../../component/sections/FAQSection';


const MobileRechargePage = () => {
  return (
    <ServiceLayout title="Mobile Recharge">
      <div className="space-y-6">
        <MobileRechargeForm />
        <OfferSection serviceType="mobile" />
        <FAQSection serviceType="mobile" />
      </div>
    </ServiceLayout >
  );
};

export default MobileRechargePage;
