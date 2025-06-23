
import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-deepblue-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-saffron-400 to-gold-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">ॐ</span>
              </div>
              <div>
                <h3 className="font-cinzel font-semibold text-lg">{t('siteName')}</h3>
                <p className="text-sm text-gray-300">{t('tagline')}</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Authentic Vedic astrology guidance with traditional wisdom and modern insights.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-saffron-300">{t('quickLinks')}</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">{t('home')}</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">{t('services')}</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">{t('about')}</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">{t('blog')}</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">{t('contact')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-saffron-300">{t('contactInfo')}</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-gold-400" />
                <span className="text-gray-300 text-sm">+91 99999 99999</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-gold-400" />
                <span className="text-gray-300 text-sm">info@raghavendra.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="text-gold-400 mt-0.5" />
                <span className="text-gray-300 text-sm">{t('address')}</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock size={16} className="text-gold-400 mt-0.5" />
                <span className="text-gray-300 text-sm">{t('hours')}</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4 text-saffron-300">{t('followUs')}</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="mt-12 border-t border-gray-700 pt-8">
          <h4 className="font-semibold mb-4 text-saffron-300 text-center">Visit Our Location</h4>
          <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.8364374984457!2d78.33135278!3d17.491488900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9142d8b1c5bf%3A0x1!2s17%C2%B029'29.4%22N%2078%C2%B019'52.9%22E!5e0!3m2!1sen!2sin!4v1703000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sri Raghavendra Jyotishalayam Location"
            ></iframe>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 {t('siteName')}. {t('allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
