
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Services = () => {
  const services = [
    {
      title: "Personalized Kundali Reading & Life Predictions",
      description: "Comprehensive horoscope analysis with 10-year planetary forecast including Dasha/Antardasha periods",
      features: [
        "Complete birth chart analysis",
        "10-year detailed forecast",
        "Dosha identification (Shani, Rahu-Ketu)",
        "Career & financial guidance",
        "Health predictions",
        "Custom remedies included"
      ],
      duration: "15-page PDF report within 24hrs",
      popular: true
    },
    {
      title: "Scientific Ashtakoota Compatibility Analysis",
      description: "Complete marriage kundali matching with Gun Milan scoring and Manglik Dosha analysis",
      features: [
        "36-point compatibility check",
        "Manglik Dosha detailed analysis",
        "Best marriage timing",
        "Remedies for doshas",
        "Family compatibility",
        "Future marital harmony prediction"
      ],
      duration: "Detailed report in 12 hours",
      popular: false
    },
    {
      title: "Business & Career Consultation",
      description: "Professional guidance for career growth, business ventures, and financial prosperity",
      features: [
        "Career path analysis",
        "Business launch timing",
        "Partnership compatibility",
        "Investment guidance",
        "Professional growth predictions",
        "Wealth accumulation remedies"
      ],
      duration: "1-hour consultation + report",
      popular: false
    },
    {
      title: "Spiritual Remedies & Gemstone Consultation",
      description: "Personalized spiritual solutions including mantras, poojas, and authentic gemstone recommendations",
      features: [
        "Customized mantra prescription",
        "Pooja recommendations",
        "Gemstone authentication",
        "Yantra suggestions",
        "Fasting guidelines",
        "Temple visit guidance"
      ],
      duration: "Immediate guidance + follow-up",
      popular: false
    }
  ];

  const handleBookService = (serviceName: string) => {
    const message = `Hi, I would like to book ${serviceName} consultation. Please provide more details.`;
    window.open(`https://wa.me/919999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <Badge className="bg-gradient-to-r from-saffron-100 to-gold-100 text-saffron-700 border-saffron-200 mb-4">
            Our Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-deepblue-900">Comprehensive</span>
            <span className="gradient-text font-cinzel"> Vedic Solutions</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            From detailed horoscope analysis to marriage compatibility, we offer authentic 
            Vedic astrology services tailored to your specific needs and life situations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                service.popular ? 'ring-2 ring-saffron-400 shadow-xl' : 'shadow-lg hover:shadow-xl'
              }`}
            >
              {service.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-saffron-500 to-gold-500 text-white px-3 sm:px-4 py-1 text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="w-full">
                    <CardTitle className="text-lg sm:text-xl mb-2 text-deepblue-900 pr-4">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-sm sm:text-base">
                      {service.description}
                    </CardDescription>
                  </div>
                </div>
                
                <div className="pt-4">
                  <p className="text-sm text-gray-500">{service.duration}</p>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Features List */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-deepblue-900 mb-3 text-sm sm:text-base">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <span className="w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-saffron-400 to-gold-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                          <span className="text-white text-xs">✓</span>
                        </span>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Process Steps */}
                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-4">
                  <h4 className="font-semibold text-deepblue-900 mb-2 text-sm sm:text-base">Simple Process:</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>1. Submit your birth details</p>
                    <p>2. Receive detailed analysis</p>
                    <p>3. Get personalized remedies</p>
                  </div>
                </div>
                
                {/* CTA Button */}
                <Button 
                  onClick={() => handleBookService(service.title)}
                  className={`w-full py-4 sm:py-6 text-base sm:text-lg font-semibold transition-all duration-300 ${
                    service.popular 
                      ? 'bg-gradient-to-r from-saffron-500 to-gold-500 hover:from-saffron-600 hover:to-gold-600 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gradient-to-r from-deepblue-600 to-deepblue-700 hover:from-deepblue-700 hover:to-deepblue-800 text-white'
                  }`}
                >
                  Book This Service
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gradient-to-r from-saffron-500 to-gold-500 rounded-2xl p-6 sm:p-8 text-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Not Sure Which Service You Need?</h3>
            <p className="text-base sm:text-lg mb-6 opacity-90">
              Get a FREE 5-minute consultation to understand which service best fits your requirements.
            </p>
            <Button 
              onClick={() => handleBookService("Free consultation")}
              variant="secondary"
              size="lg"
              className="bg-white text-saffron-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold"
            >
              Get Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
