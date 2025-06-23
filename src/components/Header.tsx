
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, Menu, X, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
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
      {/* Sticky Contact Bar */}
      <div className="bg-gradient-to-r from-saffron-500 to-gold-500 text-white py-2 px-4 text-center text-sm font-medium">
        <div className="flex items-center justify-center space-x-6">
          <button onClick={handleCall} className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Phone size={16} />
            <span>{t('callNow')}: +91 99999 99999</span>
          </button>
          <span className="hidden md:inline">|</span>
          <button onClick={handleWhatsApp} className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <MessageCircle size={16} />
            <span>{t('chatWhatsApp')}</span>
          </button>
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
              
              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                  className="flex items-center space-x-1 text-gray-700 hover:text-saffron-500 transition-colors"
                >
                  <Globe size={16} />
                  <span>{language === 'en' ? 'English' : 'తెలుగు'}</span>
                </button>
                
                {isLanguageMenuOpen && (
                  <div className="absolute right-0 mt-2 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                    <button
                      onClick={() => {
                        setLanguage('en');
                        setIsLanguageMenuOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                        language === 'en' 
                          ? 'bg-saffron-50 text-saffron-600 font-medium' 
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      English
                    </button>
                    <button
                      onClick={() => {
                        setLanguage('te');
                        setIsLanguageMenuOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                        language === 'te' 
                          ? 'bg-saffron-50 text-saffron-600 font-medium' 
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      తెలుగు
                    </button>
                  </div>
                )}
              </div>

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
                
                {/* Mobile Language Switcher */}
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm text-gray-600 mb-2">Language:</p>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => {
                        setLanguage('en');
                        setIsMenuOpen(false);
                      }}
                      className={`px-3 py-1 rounded text-sm transition-colors ${
                        language === 'en' 
                          ? 'bg-saffron-500 text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      English
                    </button>
                    <button
                      onClick={() => {
                        setLanguage('te');
                        setIsMenuOpen(false);
                      }}
                      className={`px-3 py-1 rounded text-sm transition-colors ${
                        language === 'te' 
                          ? 'bg-saffron-500 text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      తెలుగు
                    </button>
                  </div>
                </div>

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
