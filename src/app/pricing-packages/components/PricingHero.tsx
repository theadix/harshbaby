'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface PricingHeroProps {
  onPlatformSelect: (platform: string) => void;
  selectedPlatform: string;
}

const PricingHero = ({ onPlatformSelect, selectedPlatform }: PricingHeroProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const platforms = [
    { id: 'all', name: 'All Platforms', icon: 'SparklesIcon' },
    { id: 'instagram', name: 'Instagram', icon: 'CameraIcon' },
    { id: 'youtube', name: 'YouTube', icon: 'PlayCircleIcon' },
    { id: 'facebook', name: 'Facebook', icon: 'UserGroupIcon' },
  ];

  if (!isHydrated) {
    return (
      <div className="bg-gradient-trust py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="h-12 bg-surface/50 rounded-lg mb-4 animate-pulse" />
            <div className="h-6 bg-surface/50 rounded-lg mb-8 animate-pulse" />
            <div className="flex flex-wrap justify-center gap-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-12 w-32 bg-surface/50 rounded-lg animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-trust py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-text-primary mb-4">
            Transparent Pricing, Premium Quality
          </h1>
          <p className="text-lg md:text-xl text-text-secondary mb-8">
            Choose your platform and discover packages designed for authentic growth. No hidden fees, no unrealistic promises—just honest pricing for reliable results.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {platforms.map((platform) => (
              <button
                key={platform.id}
                onClick={() => onPlatformSelect(platform.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-headline font-semibold smooth-transition ${
                  selectedPlatform === platform.id
                    ? `${platform.color} text-white shadow-premium scale-105`
                    : 'bg-card text-text-secondary hover:bg-surface hover:shadow-subtle'
                }`}
              >
                <Icon name={platform.icon as any} size={20} variant={selectedPlatform === platform.id ? 'solid' : 'outline'} />
                <span>{platform.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingHero;
