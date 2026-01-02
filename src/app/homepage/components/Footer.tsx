'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface FooterProps {
  className?: string;
}

const Footer = ({ className = '' }: FooterProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentYear, setCurrentYear] = useState('2026');

  useEffect(() => {
    setIsHydrated(true);
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  const footerLinks = {
    services: [
      { label: 'Instagram Growth', href: '#services' },
      { label: 'YouTube Services', href: '#services' },
      { label: 'TikTok Boost', href: '#services' },
      { label: 'Facebook Marketing', href: '#services' },
      { label: 'Twitter/X Growth', href: '#services' },
    ],
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Pricing', href: '/pricing-packages' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Contact', href: '#contact' },
    ],
    support: [
      { label: 'Help Center', href: '#support' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Refund Policy', href: '#refund-policy' },
      { label: 'Terms of Service', href: '#terms' },
      { label: 'Privacy Policy', href: '#privacy' },
    ],
  };

  const socialLinks = [
    { name: 'Instagram', icon: 'CameraIcon', href: 'https://instagram.com/socialboostpro' },
    { name: 'Facebook', icon: 'UserGroupIcon', href: 'https://facebook.com/socialboostpro' },
    { name: 'Twitter', icon: 'ChatBubbleLeftEllipsisIcon', href: 'https://twitter.com/socialboostpro' },
    { name: 'LinkedIn', icon: 'BriefcaseIcon', href: 'https://linkedin.com/company/socialboostpro' },
  ];

  return (
    <footer className={`bg-surface border-t border-border ${className}`}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/homepage" className="flex items-center space-x-2 group">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="smooth-transition group-hover:scale-105"
              >
                <rect width="40" height="40" rx="8" fill="url(#footer-logo-gradient)" />
                <path d="M20 10L25 15L20 20L15 15L20 10Z" fill="white" opacity="0.9" />
                <path d="M20 20L25 25L20 30L15 25L20 20Z" fill="white" opacity="0.7" />
                <defs>
                  <linearGradient id="footer-logo-gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2563EB" />
                    <stop offset="1" stopColor="#1E40AF" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-xl font-headline font-bold text-text-primary">SocialBoost Pro</span>
            </Link>
            <p className="text-text-secondary leading-relaxed max-w-sm">
              Your trusted partner for authentic social media growth. Manual verification, quality assurance, and personalized support for sustainable results.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-card flex items-center justify-center text-text-secondary smooth-transition hover:bg-primary hover:text-white"
                  aria-label={social.name}
                >
                  <Icon name={social.icon as any} size={20} variant="outline" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-headline font-bold text-text-primary mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-text-secondary smooth-transition hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-headline font-bold text-text-primary mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-text-secondary smooth-transition hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-headline font-bold text-text-primary mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-text-secondary smooth-transition hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-text-secondary text-sm">
              {isHydrated ? (
                <span>&copy; {currentYear} SocialBoost Pro. All rights reserved.</span>
              ) : (
                <span>&copy; 2026 SocialBoost Pro. All rights reserved.</span>
              )}
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="#terms" className="text-text-secondary smooth-transition hover:text-primary">
                Terms
              </Link>
              <Link href="#privacy" className="text-text-secondary smooth-transition hover:text-primary">
                Privacy
              </Link>
              <Link href="#cookies" className="text-text-secondary smooth-transition hover:text-primary">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;