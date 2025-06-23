
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, Menu, X, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = () => {
    window.open('https://wa.me/919999999999?text=Hi, I would like to book a consultation', '_blank');
  };

  const handleCall = () => {
    window.open('tel:+919999999999', '_self');
  };

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Sticky Contact Bar with Language Switcher */}
      <div className="bg-gradient-to-r from-saffron-500 to-gold-500 text-white py-2 px-4 text-center text-sm font-medium">
        <div className="flex items-center justify-center space-x-6 relative">
          <button onClick={handleCall} className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Phone size={16} />
            <span>{t('callNow')}: +91 99999 99999</span>
          </button>
          <span className="hidden md:inline">|</span>
          <button onClick={handleWhatsApp} className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <MessageCircle size={16} />
            <span>{t('chatWhatsApp')}</span>
          </button>
          
          {/* Language Switcher in Announcement Bar */}
          <div className="absolute right-0 flex items-center space-x-2">
            <Globe size={16} />
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 rounded text-xs transition-all ${
                language === 'en' 
                  ? 'bg-white text-saffron-600 font-semibold' 
                  : 'bg-white/20 hover:bg-white/30'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('te')}
              className={`px-2 py-1 rounded text-xs transition-all ${
                language === 'te' 
                  ? 'bg-white text-saffron-600 font-semibold' 
                  : 'bg-white/20 hover:bg-white/30'
              }`}
            >
              తె
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-saffron-400 to-gold-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">ॐ</span>
              </div>
              <div>
                <h1 className="font-cinzel font-semibold text-xl text-deepblue-900">
                  {t('siteName')}
                </h1>
                <p className="text-sm text-gray-600">{t('tagline')}</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                to="/" 
                className={`transition-colors ${
                  isActiveLink('/') 
                    ? 'text-saffron-500 font-medium' 
                    : 'text-gray-700 hover:text-saffron-500'
                }`}
              >
                {t('home')}
              </Link>
              <Link 
                to="/services" 
                className={`transition-colors ${
                  isActiveLink('/services') 
                    ? 'text-saffron-500 font-medium' 
                    : 'text-gray-700 hover:text-saffron-500'
                }`}
              >
                {t('services')}
              </Link>
              <Link 
                to="/about" 
                className={`transition-colors ${
                  isActiveLink('/about') 
                    ? 'text-saffron-500 font-medium' 
                    : 'text-gray-700 hover:text-saffron-500'
                }`}
              >
                {t('about')}
              </Link>
              <Link 
                to="/#testimonials" 
                className="text-gray-700 hover:text-saffron-500 transition-colors"
              >
                {t('testimonials')}
              </Link>
              <Link 
                to="/blog" 
                className={`transition-colors ${
                  isActiveLink('/blog') 
                    ? 'text-saffron-500 font-medium' 
                    : 'text-gray-700 hover:text-saffron-500'
                }`}
              >
                {t('blog')}
              </Link>
              <Link 
                to="/contact" 
                className={`transition-colors ${
                  isActiveLink('/contact') 
                    ? 'text-saffron-500 font-medium' 
                    : 'text-gray-700 hover:text-saffron-500'
                }`}
              >
                {t('contact')}
              </Link>

              <Button onClick={handleWhatsApp} className="bg-gradient-to-r from-saffron-500 to-gold-500 hover:from-saffron-600 hover:to-gold-600 text-white">
                {t('bookConsultation')}
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-saffron-500"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <nav className="flex flex-col space-y-4">
                <Link 
                  to="/" 
                  className={`transition-colors ${
                    isActiveLink('/') 
                      ? 'text-saffron-500 font-medium' 
                      : 'text-gray-700 hover:text-saffron-500'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('home')}
                </Link>
                <Link 
                  to="/services" 
                  className={`transition-colors ${
                    isActiveLink('/services') 
                      ? 'text-saffron-500 font-medium' 
                      : 'text-gray-700 hover:text-saffron-500'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('services')}
                </Link>
                <Link 
                  to="/about" 
                  className={`transition-colors ${
                    isActiveLink('/about') 
                      ? 'text-saffron-500 font-medium' 
                      : 'text-gray-700 hover:text-saffron-500'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('about')}
                </Link>
                <Link 
                  to="/#testimonials" 
                  className="text-gray-700 hover:text-saffron-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('testimonials')}
                </Link>
                <Link 
                  to="/blog" 
                  className={`transition-colors ${
                    isActiveLink('/blog') 
                      ? 'text-saffron-500 font-medium' 
                      : 'text-gray-700 hover:text-saffron-500'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('blog')}
                </Link>
                <Link 
                  to="/contact" 
                  className={`transition-colors ${
                    isActiveLink('/contact') 
                      ? 'text-saffron-500 font-medium' 
                      : 'text-gray-700 hover:text-saffron-500'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('contact')}
                </Link>

                <Button onClick={handleWhatsApp} className="bg-gradient-to-r from-saffron-500 to-gold-500 hover:from-saffron-600 hover:to-gold-600 text-white w-full">
                  {t('bookConsultation')}
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
