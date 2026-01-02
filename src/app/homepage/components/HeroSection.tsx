'use client';

import { useState, useEffect } from 'react';

import Icon from '@/components/ui/AppIcon';
import VerificationBadge from '@/components/common/VerificationBadge';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleWhatsAppClick = () => {
    if (!isHydrated) return;
    window.open(
      'https://wa.me/1234567890?text=Hi, I would like to learn more about your social media growth services.',
      '_blank'
    );
  };

  const handleTelegramClick = () => {
    if (!isHydrated) return;
    window.open('https://t.me/socialboostpro', '_blank');
  };

  return (
    <section className={`relative bg-gradient-trust overflow-hidden ${className}`}>
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <VerificationBadge label="Manually Verified Services" size="md" />
              <h1 className="font-headline font-bold text-4xl lg:text-5xl xl:text-6xl text-text-primary leading-tight">
                Authentic Social Media Growth Through{' '}
                <span className="text-primary">Quality & Trust</span>
              </h1>
              <p className="text-lg lg:text-xl text-text-secondary leading-relaxed">
                Your success is our reputation. We deliver realistic, reliable results through manual verification and personalized support—no bots, no spam, just genuine growth.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <Icon name="CheckBadgeIcon" size={24} variant="solid" className="text-success" />
                <span className="font-medium text-text-primary">Manual Verification</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="ShieldCheckIcon" size={24} variant="solid" className="text-secondary" />
                <span className="font-medium text-text-primary">100% Secure</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="ClockIcon" size={24} variant="solid" className="text-accent" />
                <span className="font-medium text-text-primary">24/7 Support</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleWhatsAppClick}
                disabled={!isHydrated}
                className="flex items-center justify-center space-x-3 px-8 py-4 rounded-lg bg-success text-white font-headline font-semibold shadow-premium smooth-transition hover:shadow-lg hover:scale-105 disabled:opacity-50"
              >
                <Icon name="ChatBubbleLeftRightIcon" size={24} variant="solid" />
                <span>WhatsApp Consultation</span>
              </button>
              <button
                onClick={handleTelegramClick}
                disabled={!isHydrated}
                className="flex items-center justify-center space-x-3 px-8 py-4 rounded-lg bg-primary text-white font-headline font-semibold shadow-premium smooth-transition hover:shadow-lg hover:scale-105 disabled:opacity-50"
              >
                <Icon name="PaperAirplaneIcon" size={24} variant="solid" />
                <span>Telegram Connect</span>
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <div className="font-headline font-bold text-2xl lg:text-3xl text-primary">50K+</div>
                <div className="text-sm text-text-secondary">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="font-headline font-bold text-2xl lg:text-3xl text-success">500K+</div>
                <div className="text-sm text-text-secondary">Orders Delivered</div>
              </div>
              <div className="text-center">
                <div className="font-headline font-bold text-2xl lg:text-3xl text-secondary">98%</div>
                <div className="text-sm text-text-secondary">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative lg:block hidden">
            <div className="relative z-10 bg-card rounded-2xl shadow-premium p-8 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon name="SparklesIcon" size={32} variant="solid" className="text-white" />
                </div>
                <div>
                  <h3 className="font-headline font-bold text-xl text-text-primary">Premium Quality</h3>
                  <p className="text-text-secondary">Verified & Authentic</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-surface rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Icon name="UserGroupIcon" size={24} variant="outline" className="text-primary" />
                    <span className="font-medium text-text-primary">Instagram Growth</span>
                  </div>
                  <Icon name="CheckCircleIcon" size={24} variant="solid" className="text-success" />
                </div>
                <div className="flex items-center justify-between p-4 bg-surface rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Icon name="PlayIcon" size={24} variant="outline" className="text-primary" />
                    <span className="font-medium text-text-primary">YouTube Services</span>
                  </div>
                  <Icon name="CheckCircleIcon" size={24} variant="solid" className="text-success" />
                </div>
                <div className="flex items-center justify-between p-4 bg-surface rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Icon name="MusicalNoteIcon" size={24} variant="outline" className="text-primary" />
                    <span className="font-medium text-text-primary">TikTok Boost</span>
                  </div>
                  <Icon name="CheckCircleIcon" size={24} variant="solid" className="text-success" />
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-sm text-text-secondary text-center">
                  Trusted by creators, influencers, and businesses worldwide
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary opacity-10 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-secondary opacity-10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;