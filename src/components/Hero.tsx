
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Shield, Users, Clock } from 'lucide-react';

const Hero = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919999999999?text=Hi, I would like to book a consultation', '_blank');
  };

  const handleFreeHoroscope = () => {
    // This would typically open a modal or navigate to a form
    console.log('Opening free horoscope form');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-orange-50 via-white to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 mandala-bg opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-gold-400 to-saffron-500 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-br from-deepblue-400 to-saffron-500 rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <Badge className="bg-gradient-to-r from-saffron-100 to-gold-100 text-saffron-700 border-saffron-200 text-sm px-4 py-2">
              <Shield className="w-4 h-4 mr-2" />
              Certified by Indian Council of Astrological Sciences
            </Badge>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="gradient-text font-cinzel">10+ Years</span>
                <br />
                <span className="text-deepblue-900">of Authentic</span>
                <br />
                <span className="text-deepblue-900">Vedic Astrology</span>
                <br />
                <span className="gradient-text font-cinzel">Guidance</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-xl">
                Expert consultation in Hyderabad with personalized horoscope analysis, 
                kundali matching, and spiritual remedies based on ancient Vedic traditions.
              </p>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-2">
                  <Users className="w-5 h-5 text-saffron-500" />
                  <span className="text-2xl font-bold text-deepblue-900">500+</span>
                </div>
                <p className="text-sm text-gray-600">Clients Served</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-2">
                  <Star className="w-5 h-5 text-gold-500" />
                  <span className="text-2xl font-bold text-deepblue-900">98%</span>
                </div>
                <p className="text-sm text-gray-600">Accuracy Rate</p>
              </div>
              <div className="text-center col-span-2 md:col-span-1">
                <div className="flex items-center justify-center space-x-1 mb-2">
                  <Clock className="w-5 h-5 text-saffron-500" />
                  <span className="text-2xl font-bold text-deepblue-900">10+</span>
                </div>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleWhatsApp}
                size="lg" 
                className="bg-gradient-to-r from-saffron-500 to-gold-500 hover:from-saffron-600 hover:to-gold-600 text-white px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                📞 Book a Consultation
              </Button>
              <Button 
                onClick={handleFreeHoroscope}
                variant="outline" 
                size="lg" 
                className="border-2 border-saffron-500 text-saffron-600 hover:bg-saffron-50 px-8 py-6 text-lg font-semibold"
              >
                🆓 Get Free Horoscope Summary
              </Button>
            </div>

            {/* Quick Features */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-saffron-500 rounded-full mr-2"></span>
                24-hour report delivery
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-gold-500 rounded-full mr-2"></span>
                Telugu & English consultation
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-deepblue-500 rounded-full mr-2"></span>
                Custom remedies included
              </span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-saffron-100 to-gold-100 rounded-2xl p-8 shadow-2xl">
                <div className="aspect-[4/5] bg-gradient-to-br from-saffron-200 to-gold-200 rounded-xl flex items-center justify-center">
                  {/* Placeholder for Pandit Sri Raghavendra's Photo */}
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 bg-gradient-to-br from-saffron-400 to-gold-500 rounded-full mx-auto flex items-center justify-center">
                      <span className="text-4xl text-white">🕉️</span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-cinzel font-semibold text-xl text-deepblue-900">
                        Pandit Sri Raghavendra
                      </h3>
                      <p className="text-gray-600">Vedic Astrology Expert</p>
                      <div className="flex justify-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-saffron-400 to-gold-500 rounded-full opacity-80"></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br from-deepblue-400 to-saffron-400 rounded-full opacity-60"></div>
              </div>
              
              {/* Floating Testimonial Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-4 max-w-xs animate-float" style={{animationDelay: '2s'}}>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-saffron-400 to-gold-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">R</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Ramesh Kumar</h4>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-gold-400 text-gold-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2">
                  "Accurate predictions helped me make the right decisions. Highly recommended!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
