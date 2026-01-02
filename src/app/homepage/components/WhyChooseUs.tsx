import Icon from '@/components/ui/AppIcon';
import VerificationBadge from '@/components/common/VerificationBadge';

interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
  color: string;
}

interface WhyChooseUsProps {
  className?: string;
}

const WhyChooseUs = ({ className = '' }: WhyChooseUsProps) => {
  const features: Feature[] = [
    {
      id: 'manual-verification',
      icon: 'ShieldCheckIcon',
      title: 'Manual Verification Process',
      description: 'Every order goes through our rigorous manual verification system to ensure quality and authenticity. No automated bots or fake accounts.',
      color: 'text-success',
    },
    {
      id: 'realistic-expectations',
      icon: 'ChartBarIcon',
      title: 'Realistic Expectations',
      description: 'We set honest, achievable goals based on your current presence and target audience. No unrealistic promises or overnight success claims.',
      color: 'text-primary',
    },
    {
      id: 'quality-assurance',
      icon: 'CheckBadgeIcon',
      title: 'Quality Over Quantity',
      description: 'We prioritize genuine engagement from real accounts over inflated numbers. Your growth is sustainable and algorithm-friendly.',
      color: 'text-secondary',
    },
    {
      id: 'personalized-support',
      icon: 'UserGroupIcon',
      title: 'Personalized Consultation',
      description: 'Direct access to our expert team via WhatsApp and Telegram. We understand your unique needs and create custom solutions.',
      color: 'text-accent',
    },
    {
      id: 'transparent-pricing',
      icon: 'CurrencyDollarIcon',
      title: 'Transparent Pricing',
      description: 'Clear, upfront pricing with no hidden fees. Premium quality at accessible rates through our strategic partner network.',
      color: 'text-success',
    },
    {
      id: 'secure-delivery',
      icon: 'LockClosedIcon',
      title: '100% Secure & Private',
      description: 'Your account security is our priority. We never ask for passwords and all transactions are encrypted and confidential.',
      color: 'text-error',
    },
  ];

  return (
    <section className={`bg-background py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <VerificationBadge label="Trusted by 50,000+ Clients" size="md" className="mx-auto" />
          <h2 className="font-headline font-bold text-3xl lg:text-4xl text-text-primary">
            Why Choose SocialBoost Pro?
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            We're not just another SMM panel. We're your trusted partner in authentic social media growth, combining expertise with ethical practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="bg-card rounded-xl shadow-subtle p-6 space-y-4 smooth-transition hover:shadow-premium hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-lg bg-surface flex items-center justify-center ${feature.color}`}>
                <Icon name={feature.icon as any} size={28} variant="solid" />
              </div>

              <div>
                <h3 className="font-headline font-bold text-xl text-text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="mt-16 bg-gradient-trust rounded-2xl p-8 lg:p-12 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <Icon name="SparklesIcon" size={48} variant="solid" className="text-primary mx-auto" />
            <h3 className="font-headline font-bold text-2xl lg:text-3xl text-text-primary">
              Your Success Is Our Reputation
            </h3>
            <p className="text-lg text-text-secondary leading-relaxed">
              We've built our business on trust, transparency, and delivering real results. Every satisfied client strengthens our reputation as the go-to partner for authentic social media growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <div className="flex items-center space-x-2 px-4 py-2 bg-card rounded-lg shadow-subtle">
                <Icon name="CheckCircleIcon" size={20} variant="solid" className="text-success" />
                <span className="font-medium text-text-primary">98% Satisfaction Rate</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-card rounded-lg shadow-subtle">
                <Icon name="ArrowTrendingUpIcon" size={20} variant="solid" className="text-primary" />
                <span className="font-medium text-text-primary">500K+ Orders Delivered</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-card rounded-lg shadow-subtle">
                <Icon name="ClockIcon" size={20} variant="solid" className="text-accent" />
                <span className="font-medium text-text-primary">24/7 Expert Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
