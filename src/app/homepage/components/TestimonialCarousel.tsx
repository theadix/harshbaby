'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  platform: string;
  image: string;
  alt: string;
  rating: number;
  content: string;
  growth: string;
  verified: boolean;
}

interface TestimonialCarouselProps {
  className?: string;
}

const TestimonialCarousel = ({ className = '' }: TestimonialCarouselProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Fashion Influencer',
    platform: 'Instagram',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e2bae134-1763293568471.png",
    alt: 'Professional headshot of young woman with long brown hair in white blazer smiling at camera',
    rating: 5,
    content: 'SocialBoost Pro transformed my Instagram presence. The manual verification process gave me confidence that every follower was real. My engagement rate increased by 340% in just 3 months!',
    growth: '+15K Followers in 90 Days',
    verified: true
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    role: 'Tech Content Creator',
    platform: 'YouTube',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_16cf43196-1763296280905.png",
    alt: 'Professional portrait of African American man with short hair in navy blue shirt against gray background',
    rating: 5,
    content: 'Finally found a service that delivers what they promise. No bots, no fake accounts—just genuine subscribers who actually watch my content. The consultation process was incredibly helpful.',
    growth: '+8K Subscribers in 60 Days',
    verified: true
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Small Business Owner',
    platform: 'Facebook',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c5beebde-1763299010301.png",
    alt: 'Professional headshot of Hispanic woman with dark hair in burgundy blazer smiling confidently',
    rating: 5,
    content: 'As a small business, authenticity matters. SocialBoost Pro helped us build a genuine community around our brand. The transparency and realistic expectations set them apart from other services.',
    growth: '+5K Page Likes in 45 Days',
    verified: true
  },
  {
    id: 4,
    name: 'David Chen',
    role: 'Fitness Coach',
    platform: 'TikTok',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1119be902-1763301466467.png",
    alt: 'Professional portrait of Asian man with styled hair in white t-shirt against neutral background',
    rating: 5,
    content: 'The quality of engagement I received was outstanding. Real people commenting and sharing my fitness tips. The 24/7 support team was always there to answer my questions. Highly recommend!',
    growth: '+25K Followers in 75 Days',
    verified: true
  }];


  const handlePrevious = () => {
    if (!isHydrated) return;
    setCurrentIndex((prev) => prev === 0 ? testimonials.length - 1 : prev - 1);
  };

  const handleNext = () => {
    if (!isHydrated) return;
    setCurrentIndex((prev) => prev === testimonials.length - 1 ? 0 : prev + 1);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className={`bg-surface py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-headline font-bold text-3xl lg:text-4xl text-text-primary">
            Real Stories, Real Results
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Discover how creators, influencers, and businesses achieved authentic growth with our manually verified services.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-2xl shadow-premium p-8 lg:p-12">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Testimonial Image */}
              <div className="lg:col-span-1 flex justify-center">
                <div className="relative">
                  <div className="w-48 h-48 rounded-full overflow-hidden shadow-subtle">
                    <AppImage
                      src={currentTestimonial.image}
                      alt={currentTestimonial.alt}
                      className="w-full h-full object-cover" />

                  </div>
                  {currentTestimonial.verified &&
                  <div className="absolute bottom-2 right-2 bg-success rounded-full p-2 shadow-premium">
                      <Icon name="CheckBadgeIcon" size={24} variant="solid" className="text-white" />
                    </div>
                  }
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(currentTestimonial.rating)].map((_, idx) =>
                  <Icon key={idx} name="StarIcon" size={20} variant="solid" className="text-accent" />
                  )}
                </div>

                {/* Quote */}
                <blockquote className="text-lg text-text-primary leading-relaxed">
                  "{currentTestimonial.content}"
                </blockquote>

                {/* Author Info */}
                <div className="space-y-2">
                  <div className="font-headline font-bold text-xl text-text-primary">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-text-secondary">
                    {currentTestimonial.role} • {currentTestimonial.platform}
                  </div>
                </div>

                {/* Growth Badge */}
                <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-success bg-opacity-10 border border-success">
                  <Icon name="ArrowTrendingUpIcon" size={20} variant="solid" className="text-success" />
                  <span className="font-medium text-success">{currentTestimonial.growth}</span>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-8 pt-8 border-t border-border">
              <button
                onClick={handlePrevious}
                disabled={!isHydrated}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg text-text-secondary smooth-transition hover:text-primary hover:bg-surface disabled:opacity-50"
                aria-label="Previous testimonial">

                <Icon name="ChevronLeftIcon" size={24} variant="outline" />
                <span className="font-medium">Previous</span>
              </button>

              {/* Dots Indicator */}
              <div className="flex items-center space-x-2">
                {testimonials.map((_, idx) =>
                <button
                  key={idx}
                  onClick={() => isHydrated && setCurrentIndex(idx)}
                  disabled={!isHydrated}
                  className={`w-2 h-2 rounded-full smooth-transition disabled:opacity-50 ${
                  idx === currentIndex ? 'bg-primary w-8' : 'bg-border hover:bg-primary'}`
                  }
                  aria-label={`Go to testimonial ${idx + 1}`} />

                )}
              </div>

              <button
                onClick={handleNext}
                disabled={!isHydrated}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg text-text-secondary smooth-transition hover:text-primary hover:bg-surface disabled:opacity-50"
                aria-label="Next testimonial">

                <span className="font-medium">Next</span>
                <Icon name="ChevronRightIcon" size={24} variant="outline" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialCarousel;