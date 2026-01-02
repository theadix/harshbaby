'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FAQItem {
  question: string;
  answer: string;
}

const PricingFAQ = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const faqs: FAQItem[] = [
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, cryptocurrency, and bank transfers for enterprise clients. All transactions are secured with SSL encryption and processed through trusted payment gateways.',
    },
    {
      question: 'Do you offer refunds if I\'m not satisfied?',
      answer: 'Yes, we offer a 30-day satisfaction guarantee. If the delivered services don\'t meet our quality standards or your expectations, we provide refills or refunds according to our transparent refund policy. Please review our complete refund terms for specific conditions.',
    },
    {
      question: 'Can I upgrade or downgrade my package?',
      answer: 'Absolutely! You can upgrade to a higher tier at any time, and we\'ll credit your existing package value. Downgrades are processed on a case-by-case basis. Contact our support team to discuss your specific needs.',
    },
    {
      question: 'What makes your pricing different from competitors?',
      answer: 'Unlike automated SMM panels, our pricing reflects manual verification, quality assurance, and genuine engagement. We position between high-volume panels and expensive agencies, offering premium quality with accessible pricing through strategic partnerships.',
    },
    {
      question: 'Are there any hidden fees or recurring charges?',
      answer: 'No hidden fees, ever. The price you see is the price you pay. There are no recurring charges unless you opt for a subscription service. All costs are transparent and disclosed upfront during consultation.',
    },
    {
      question: 'Do you offer discounts for bulk orders?',
      answer: 'Yes! Our bulk pricing calculator shows automatic discounts ranging from 15% to 60% based on order volume. Enterprise clients receive custom pricing with additional benefits like dedicated account managers and priority processing.',
    },
    {
      question: 'How long does delivery take after payment?',
      answer: 'Delivery times vary by package tier: Starter (5-7 days), Growth (3-5 days), Premium (1-3 days), Enterprise (24-48 hours). All orders undergo manual verification before processing to ensure quality standards.',
    },
    {
      question: 'What happens if followers/engagement drops?',
      answer: 'All packages include retention guarantees and refill periods. If engagement drops within the guarantee period, we automatically refill at no additional cost. Retention rates vary by tier, from 30 days (Starter) to lifetime (Enterprise).',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!isHydrated) {
    return (
      <div className="bg-card rounded-xl border border-border p-8 shadow-subtle">
        <div className="h-8 bg-surface rounded mb-6 animate-pulse" />
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-16 bg-surface rounded animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-xl border border-border p-8 shadow-subtle">
      <div className="flex items-center space-x-3 mb-8">
        <Icon name="QuestionMarkCircleIcon" size={32} variant="solid" className="text-primary" />
        <h2 className="text-3xl font-headline font-bold text-text-primary">
          Pricing FAQs
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-border rounded-lg overflow-hidden smooth-transition hover:shadow-subtle"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between px-6 py-4 bg-surface hover:bg-muted smooth-transition"
            >
              <span className="text-left font-headline font-semibold text-text-primary">
                {faq.question}
              </span>
              <Icon
                name={openIndex === index ? 'ChevronUpIcon' : 'ChevronDownIcon'}
                size={20}
                variant="outline"
                className="text-primary flex-shrink-0 ml-4"
              />
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-white border-t border-border animate-fade-in">
                <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-gradient-trust rounded-lg">
        <div className="flex items-start space-x-4">
          <Icon name="InformationCircleIcon" size={24} variant="solid" className="text-primary flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-headline font-bold text-text-primary mb-2">
              Still have questions?
            </h3>
            <p className="text-text-secondary mb-4">
              Our consultation team is ready to provide personalized answers and custom pricing solutions.
            </p>
            <button className="px-6 py-3 rounded-lg bg-primary text-white font-headline font-semibold smooth-transition hover:bg-secondary hover:shadow-subtle">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingFAQ;
