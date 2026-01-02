'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface CTASectionProps {
  className?: string;
}

const CTASection = ({ className = '' }: CTASectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleWhatsAppClick = () => {
    if (!isHydrated) return;
    window.open(
      'https://wa.me/1234567890?text=Hi, I would like to start a consultation for my social media growth strategy.',
      '_blank'
    );
  };

  const handleTelegramClick = () => {
    if (!isHydrated) return;
    window.open('https://t.me/socialboostpro', '_blank');
  };

  return (
    <section className={`bg-gradient-to-br from-primary to-secondary py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="font-headline font-bold text-3xl lg:text-4xl text-white">
              Ready to Grow Your Social Media Presence?
            </h2>
            <p className="text-lg lg:text-xl text-white text-opacity-90 leading-relaxed">
              Start your journey to authentic social media growth today. Our expert team is ready to create a custom strategy tailored to your unique goals and audience.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-6 py-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 space-y-2">
              <Icon name="ClockIcon" size={32} variant="solid" className="text-white mx-auto" />
              <div className="font-headline font-bold text-white">Quick Response</div>
              <div className="text-sm text-white text-opacity-80">Get answers within minutes</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 space-y-2">
              <Icon name="ChatBubbleLeftRightIcon" size={32} variant="solid" className="text-white mx-auto" />
              <div className="font-headline font-bold text-white">Free Consultation</div>
              <div className="text-sm text-white text-opacity-80">No obligation, just advice</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 space-y-2">
              <Icon name="ShieldCheckIcon" size={32} variant="solid" className="text-white mx-auto" />
              <div className="font-headline font-bold text-white">100% Secure</div>
              <div className="text-sm text-white text-opacity-80">Your privacy guaranteed</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsAppClick}
              disabled={!isHydrated}
              className="flex items-center justify-center space-x-3 px-8 py-4 rounded-lg bg-success text-white font-headline font-semibold shadow-premium smooth-transition hover:shadow-lg hover:scale-105 disabled:opacity-50"
            >
              <Icon name="ChatBubbleLeftRightIcon" size={24} variant="solid" />
              <span>Start WhatsApp Chat</span>
            </button>
            <button
              onClick={handleTelegramClick}
              disabled={!isHydrated}
              className="flex items-center justify-center space-x-3 px-8 py-4 rounded-lg bg-white text-primary font-headline font-semibold shadow-premium smooth-transition hover:shadow-lg hover:scale-105 disabled:opacity-50"
            >
              <Icon name="PaperAirplaneIcon" size={24} variant="solid" />
              <span>Connect on Telegram</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8 border-t border-white border-opacity-20">
            <div className="flex flex-wrap justify-center gap-6 text-white text-opacity-90">
              <div className="flex items-center space-x-2">
                <Icon name="CheckCircleIcon" size={20} variant="solid" />
                <span className="text-sm font-medium">No Credit Card Required</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="CheckCircleIcon" size={20} variant="solid" />
                <span className="text-sm font-medium">Instant Support Access</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="CheckCircleIcon" size={20} variant="solid" />
                <span className="text-sm font-medium">Custom Solutions Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
