
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Heart, Briefcase, Gem, Building, Activity } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const Services = () => {
  const { t } = useLanguage();

  const handleWhatsApp = () => {
    window.open('https://wa.me/919999999999?text=Hi, I would like to book a consultation', '_blank');
  };

  const services = [
    {
      icon: Star,
      title: t('horoscopeTitle'),
      description: t('horoscopeDesc'),
      gradient: 'from-saffron-500 to-gold-500'
    },
    {
      icon: Heart,
      title: t('marriageTitle'),
      description: t('marriageDesc'),
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: Briefcase,
      title: t('careerTitle'),
      description: t('careerDesc'),
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Gem,
      title: t('remediesTitle'),
      description: t('remediesDesc'),
      gradient: 'from-purple-500 to-violet-500'
    },
    {
      icon: Building,
      title: t('businessTitle'),
      description: t('businessDesc'),
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Activity,
      title: t('healthTitle'),
      description: t('healthDesc'),
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-deepblue-900 mb-4">
            {t('ourServices')}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t('servicesDescription')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-xl font-semibold text-deepblue-900 mb-2">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Button 
                    onClick={handleWhatsApp}
                    variant="outline" 
                    className="w-full border-saffron-500 text-saffron-600 hover:bg-saffron-500 hover:text-white transition-all duration-300"
                  >
                    {t('bookConsultation')}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-saffron-50 to-gold-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-deepblue-900 mb-4">
              Ready to Discover Your Future?
            </h3>
            <p className="text-gray-600 mb-6">
              Get personalized astrological guidance from our certified expert
            </p>
            <Button 
              onClick={handleWhatsApp}
              className="bg-gradient-to-r from-saffron-500 to-gold-500 hover:from-saffron-600 hover:to-gold-600 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
