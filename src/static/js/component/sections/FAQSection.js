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
        case 'bus':
          return [
            {
              question: 'What is the cancellation policy?',
              answer: 'Cancellation policies vary by operator. You can check the specific policy while booking or in your ticket details.'
            },
            {
              question: 'How do I get my bus ticket?',
              answer: 'After booking, your ticket will be sent to your registered email and phone number. You can also access it in the app under "My Bookings".'
            },
            {
              question: 'Can I change my travel date after booking?',
              answer: 'Date changes depend on the bus operators policy. Please contact customer support or check the app for modification options.'
            },  {
              question: 'Do I need to carry a printed ticket?',
              answer: 'Most operators accept e-tickets or SMS confirmations. However, it’s recommended to check the ticket instructions for specific requirements.'
            },  {
              question: 'What happens if my bus is delayed?',
              answer: 'If your bus is delayed, you will be notified via SMS or email. You can also track live updates in the app under "Track Bus.".'
            },
          ];
          case 'train':
            return [
              {
                question: 'What is the cancellation policy for train tickets?',
                answer: 'Cancellation policies depend on the type of ticket and booking class. You can view the specific policy under "My Bookings" or during the cancellation process in the app.'
              },
              {
                question: 'How can I check my trains live status?',
                answer: 'You can track your trains live status using the "Track Train" feature in the app by entering the train number or PNR.'
              },
              {
                question: 'Do I need a printed ticket for travel?',
                answer: 'No, e-tickets or SMS confirmations are valid for most train journeys. Make sure to carry a valid ID proof.'
              },  {
                question: 'Can I change the passenger name after booking?',
                answer: 'Yes, name changes are allowed under certain conditions. Please check the app "Ticket Modification" section or contact customer support.'
              },  {
                question: 'What happens if my train is delayed?',
                answer: 'If your train is delayed, you wll receive notifications through SMS or email. You can also check live updates in the app.'
              },
            ];
            case 'dth':
              return [
                {
                  question: 'How can I recharge my DTH account?',
                  answer: 'You can recharge your DTH account by selecting your operator, entering your subscriber ID or registered mobile number, choosing a plan, and completing the payment through the app..'
                },
                {
                  question: 'What payment methods are accepted for DTH recharge?',
                  answer: 'We accept payments via credit/debit cards, net banking, UPI, wallets, and other popular payment methods.'
                },
              ];
              case 'electricity':
                return [
                  {
                    question: 'How can I check my electricity bill amount?',
                    answer: 'You can check your electricity bill amount by entering your consumer number or account ID in the app. Your outstanding bill details will be displayed instantly..'
                  },
                  {
                    question: 'Is there any late fee for overdue electricity bills?',
                    answer: 'Yes, most electricity providers charge a late fee for overdue bills. The exact amount will be mentioned in your bill details.'
                  },
                ];   case 'gas':
                return [
                  {
                    question: 'How do I get a receipt for my gas bill payment?',
                    answer: 'After a successful payment, a receipt will be sent to your registered email or SMS. You can also download it from the "Payment History" section in the app.'
                  },
                  {
                    question: 'What happens if my payment fails?',
                    answer: 'If your payment fails, the amount will not be deducted from your account. You can retry the transaction or contact customer support for assistance.'
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
