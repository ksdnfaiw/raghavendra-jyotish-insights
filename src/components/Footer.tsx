
import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, Star } from 'lucide-react';

const Footer = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919999999999?text=Hi, I would like more information about your services', '_blank');
  };

  const handleCall = () => {
    window.open('tel:+919999999999', '_self');
  };

  const handleEmail = () => {
    window.open('mailto:info@sri-raghavendra-jyotish.com', '_self');
  };

  return (
    <footer className="bg-gradient-to-br from-deepblue-900 to-deepblue-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-saffron-400 to-gold-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">ॐ</span>
              </div>
              <div>
                <h3 className="font-cinzel font-semibold text-xl">
                  Sri Raghavendra Jyotishalayam
                </h3>
                <p className="text-sm text-gray-300">Authentic Vedic Astrology</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Expert Vedic astrology consultation with 10+ years of experience in 
              horoscope analysis, kundali matching, and spiritual guidance for Telugu and English speaking clients.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-gold-400 text-gold-400" />
                <span className="text-sm">4.9/5 Rating</span>
              </div>
              <div className="text-sm text-gray-300">500+ Clients</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-saffron-300">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-saffron-300 transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-saffron-300 transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-saffron-300 transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-saffron-300 transition-colors">Testimonials</a></li>
              <li><a href="#blog" className="text-gray-300 hover:text-saffron-300 transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-saffron-300 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-saffron-300">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-300 hover:text-saffron-300 transition-colors">Horoscope Analysis</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-saffron-300 transition-colors">Kundali Matching</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-saffron-300 transition-colors">Business Consultation</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-saffron-300 transition-colors">Gemstone Guidance</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-saffron-300 transition-colors">Spiritual Remedies</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-saffron-300 transition-colors">Manglik Dosha Solutions</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-saffron-300">Contact Us</h4>
            <div className="space-y-4">
              <button 
                onClick={handleCall}
                className="flex items-center space-x-3 text-gray-300 hover:text-saffron-300 transition-colors w-full text-left"
              >
                <Phone className="w-5 h-5" />
                <span>+91 99999 99999</span>
              </button>
              
              <button 
                onClick={handleWhatsApp}
                className="flex items-center space-x-3 text-gray-300 hover:text-saffron-300 transition-colors w-full text-left"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Consultation</span>
              </button>
              
              <button 
                onClick={handleEmail}
                className="flex items-center space-x-3 text-gray-300 hover:text-saffron-300 transition-colors w-full text-left"
              >
                <Mail className="w-5 h-5" />
                <span>info@sri-raghavendra-jyotish.com</span>
              </button>
              
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>Hyderabad, Telangana<br />Serving Pan-India</span>
              </div>
              
              <div className="flex items-center space-x-3 text-gray-300">
                <Clock className="w-5 h-5" />
                <span>Available 24/7</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3 mt-6">
              <button 
                onClick={handleWhatsApp}
                className="w-full bg-gradient-to-r from-saffron-500 to-gold-500 hover:from-saffron-600 hover:to-gold-600 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
              >
                📞 Book Consultation
              </button>
              <button className="w-full border border-saffron-400 text-saffron-300 hover:bg-saffron-400 hover:text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300">
                🆓 Free Horoscope
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Sri Raghavendra Jyotishalayam. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-saffron-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-saffron-300 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-saffron-300 transition-colors">Disclaimer</a>
            </div>
          </div>
          
          {/* Certifications & Trust Badges */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-6 pt-6 border-t border-gray-700">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="text-sm text-gray-400">
                🏆 Certified by Indian Council of Astrological Sciences
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>🔒 SSL Secured</span>
              <span>✅ Verified Astrologer</span>
              <span>⭐ 500+ Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
