
import React from 'react';
import { Button } from '@/components/ui/button';
import { Star, Users, Award } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const Hero = () => {
  const { t } = useLanguage();

  const handleWhatsApp = () => {
    window.open('https://wa.me/919573686899?text=Hi, I would like to book a consultation', '_blank');
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-saffron-50 via-gold-50 to-white py-20 mandala-bg overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-gold-300 rounded-full opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-saffron-300 rounded-full opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-2xl md:text-2xl lg:text-4xl font-cinzel font-bold text-deepblue-900 leading-tight">
                {t('heroTitle')}
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                {t('heroSubtitle')}
              </p>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 py-4">
              <div className="flex items-center space-x-2">
                <Star className="text-gold-500 fill-current" size={20} />
                <span className="text-sm font-medium text-gray-700">4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="text-saffron-500" size={20} />
                <span className="text-sm font-medium text-gray-700">500+ Clients</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="text-gold-500" size={20} />
                <span className="text-sm font-medium text-gray-700">Certified Expert</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleWhatsApp}
                className="bg-gradient-to-r from-saffron-500 to-gold-500 hover:from-saffron-600 hover:to-gold-600 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {t('getReading')}
              </Button>
              <Button 
                onClick={scrollToServices}
                variant="outline" 
                className="border-2 border-saffron-500 text-saffron-600 hover:bg-saffron-50 px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300"
              >
                {t('learnMore')}
              </Button>
            </div>

            {/* Social proof */}
            <p className="text-sm text-gray-600 flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>{t('trustedBy')}</span>
            </p>
          </div>

          {/* Image placeholder */}
          <div className="relative">
               <img style={{width:"100%",height:"85%",borderRadius:"20px"}} src="https://media.istockphoto.com/id/1394514999/photo/woman-holding-a-astrology-book-astrological-wheel-projection-choose-a-zodiac-sign-astrology.jpg?s=612x612&w=0&k=20&c=XIH-aZ13vTzkcGUTbVLwPcp_TUB4hjVdeSSY-taxlOo="/>
          
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
              <Star className="text-gold-500 fill-current" size={24} />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg">
              <Award className="text-saffron-500" size={24} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
