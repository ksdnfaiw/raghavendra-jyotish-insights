
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Clock, Users, Award } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      title: "Horoscope Analysis",
      description: "Comprehensive birth chart reading with detailed planetary positions, dashas, and life predictions. Our in-depth analysis covers all 12 houses of your kundali.",
      features: ["Complete birth chart analysis", "10-year planetary forecast", "Dasha and Antardasha predictions", "Detailed PDF report"],
      duration: "2-3 hours consultation",
      category: "Astrology"
    },
    {
      title: "Marriage Kundali Matching",
      description: "Traditional Ashtakoota compatibility analysis for marriage proposals. We examine Guna Milan, Manglik Dosha, and planetary compatibility.",
      features: ["36-point compatibility check", "Manglik Dosha analysis", "Best marriage timing", "Remedial measures if needed"],
      duration: "1-2 hours consultation",
      category: "Marriage"
    },
    {
      title: "Career Guidance",
      description: "Professional astrology consultation for career decisions, job changes, business ventures, and educational choices based on your planetary positions.",
      features: ["Career path analysis", "Best timing for job changes", "Business venture guidance", "Educational direction"],
      duration: "1.5 hours consultation",
      category: "Career"
    },
    {
      title: "Gemstone Consultation",
      description: "Personalized gemstone recommendations based on your birth chart to enhance positive planetary influences and reduce negative effects.",
      features: ["Detailed gemstone analysis", "Wearing instructions", "Mantras for activation", "Quality specifications"],
      duration: "1 hour consultation",
      category: "Remedies"
    },
    {
      title: "Vastu Shastra",
      description: "Ancient Indian architectural science consultation for homes and offices to ensure positive energy flow and prosperity.",
      features: ["Complete Vastu analysis", "Room-wise recommendations", "Remedial solutions", "Directional guidelines"],
      duration: "2 hours consultation",
      category: "Vastu"
    },
    {
      title: "Muhurat Selection",
      description: "Auspicious timing selection for important life events like weddings, housewarming, business launches, and other ceremonies.",
      features: ["Detailed muhurat analysis", "Multiple time options", "Planetary strength check", "Customized recommendations"],
      duration: "1 hour consultation",
      category: "Timing"
    }
  ];

  const handleConsultation = () => {
    window.open('https://wa.me/919999999999?text=Hi, I would like to book a consultation for the services I saw on your website', '_blank');
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-saffron-50 to-gold-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-gradient-to-r from-saffron-100 to-gold-100 text-saffron-700 border-saffron-200 mb-4">
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-deepblue-900">Comprehensive</span>
              <span className="gradient-text font-cinzel"> Astrology Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience authentic Vedic astrology guidance with our comprehensive range of services. 
              Each consultation is personalized to your unique birth chart and life circumstances.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-8 h-8 text-saffron-500 mr-2" />
                <span className="text-3xl font-bold gradient-text">500+</span>
              </div>
              <p className="text-gray-600">Satisfied Clients</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="w-8 h-8 text-gold-500 mr-2" />
                <span className="text-3xl font-bold gradient-text">4.9</span>
              </div>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Award className="w-8 h-8 text-saffron-500 mr-2" />
                <span className="text-3xl font-bold gradient-text">10+</span>
              </div>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Clock className="w-8 h-8 text-gold-500 mr-2" />
                <span className="text-3xl font-bold gradient-text">24hrs</span>
              </div>
              <p className="text-gray-600">Report Delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <Badge className="mb-4 bg-saffron-100 text-saffron-700">
                    {service.category}
                  </Badge>
                  <h3 className="text-xl font-bold text-deepblue-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-deepblue-800 mb-2">What's Included:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <span className="text-saffron-500 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.duration}
                    </span>
                    <Button 
                      onClick={handleConsultation}
                      className="bg-gradient-to-r from-saffron-500 to-gold-500 hover:from-saffron-600 hover:to-gold-600"
                      size="sm"
                    >
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-deepblue-600 to-deepblue-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Discover Your Life's Path?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book your personalized consultation today and gain clarity about your future. 
            Our experienced astrologer will guide you through every aspect of your life.
          </p>
          <Button 
            onClick={handleConsultation}
            className="bg-gradient-to-r from-saffron-500 to-gold-500 hover:from-saffron-600 hover:to-gold-600 text-white px-8 py-4 text-lg"
          >
            Book Your Consultation Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
