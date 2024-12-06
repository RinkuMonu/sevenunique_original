import React from 'react';
import { HelpCircle } from 'lucide-react';

const FAQSection = ({ serviceType }) => {
  const getFAQs = () => {
    switch (serviceType) {
      case 'mobile':
        return [
          {
            question: 'How long does it take for the recharge to be processed?',
            answer: 'Most recharges are processed instantly. In rare cases, it might take up to 30 minutes.'
          },
          {
            question: 'What payment methods are accepted?',
            answer: 'We accept all major credit/debit cards, UPI, net banking, and wallets.'
          },
        ];
      case 'flight':
        return [
          {
            question: 'What is the cancellation policy?',
            answer: 'Cancellation policies vary by airline. You can check the specific policy during booking.'
          },
          {
            question: 'How can I get my boarding pass?',
            answer: 'You can get your boarding pass through web check-in 48 hours before departure or at the airport counter.'
          },
        ];
      // Add cases for other service types
      default:
        return [];
    }
  };

  const faqs = getFAQs();

  return (
    <section className="bg-gray-50 p-6 rounded-lg mb-6">
      <div className="flex items-center space-x-2 mb-4">
        <HelpCircle className="w-5 h-5 text-blue-600" />
        <h2 className="text-xl font-semibold text-gray-800">Frequently Asked Questions</h2>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details key={index} className="bg-white p-4 rounded-lg border border-gray-200">
            <summary className="font-semibold text-gray-800 cursor-pointer">{faq.question}</summary>
            <p className="mt-2 text-gray-600">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
