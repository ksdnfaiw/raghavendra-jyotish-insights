
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Hyderabad",
      rating: 5,
      text: "Pandit ji's predictions about my marriage were incredibly accurate. The kundali matching service helped us understand our compatibility perfectly. We're happily married for 2 years now!",
      service: "Marriage Kundali Matching",
      image: "PS"
    },
    {
      name: "Rajesh Kumar",
      location: "Vijayawada", 
      rating: 5,
      text: "The business consultation changed my life. His guidance on the right timing for launching my startup was spot-on. My business is thriving now, exactly as predicted!",
      service: "Business Consultation",
      image: "RK"
    },
    {
      name: "Anitha Reddy",
      location: "Hyderabad",
      rating: 5,
      text: "After struggling with health issues for years, the gemstone recommendation and mantras have brought remarkable improvement. Very grateful for the accurate guidance.",
      service: "Gemstone Consultation",
      image: "AR"
    },
    {
      name: "Vikram Rao",
      location: "Warangal",
      rating: 5,
      text: "The 10-year forecast report was incredibly detailed and accurate. It helped me make better career decisions and avoid potential problems. Highly recommended!",
      service: "Horoscope Analysis",
      image: "VR"
    },
    {
      name: "Lakshmi Devi",
      location: "Hyderabad",
      rating: 5,
      text: "అద్భుతమైన అనుభవం! పండిత్ గారి చెప్పిన దశా-అంతర్దశా ఫలితాలు అక్షరాలా వచ్చాయి. కుండలి విశ్లేషణ చాలా వివరంగా ఉంది.",
      service: "Telugu Consultation",
      image: "LD",
      isTeluguReview: true
    },
    {
      name: "Srinivas Chary",
      location: "Karimnagar",
      rating: 5,
      text: "Professional approach and deep knowledge of Vedic astrology. The remedies suggested are practical and effective. Definitely consulting again for important decisions.",
      service: "Spiritual Remedies",
      image: "SC"
    }
  ];

  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <Badge className="bg-gradient-to-r from-saffron-100 to-gold-100 text-saffron-700 border-saffron-200 mb-4">
            Client Testimonials
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-deepblue-900">What Our</span>
            <span className="gradient-text font-cinzel"> Clients Say</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Over 500+ satisfied clients across Telugu states trust our authentic Vedic astrology guidance. 
            Here's what they have to say about their transformative experiences.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">500+</div>
            <div className="text-gray-600 text-sm sm:text-base">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">98%</div>
            <div className="text-gray-600 text-sm sm:text-base">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">4.9/5</div>
            <div className="text-gray-600 text-sm sm:text-base">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">10+</div>
            <div className="text-gray-600 text-sm sm:text-base">Years Experience</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-orange-50"
            >
              <CardContent className="p-4 sm:p-6">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-20">
                  <Quote className="w-6 sm:w-8 h-6 sm:h-8 text-saffron-500" />
                </div>

                {/* Rating */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star 
                      key={starIndex} 
                      className="w-4 sm:w-5 h-4 sm:h-5 fill-gold-400 text-gold-400" 
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className={`text-gray-700 mb-6 leading-relaxed text-sm sm:text-base ${
                  testimonial.isTeluguReview ? 'font-telugu' : ''
                }`}>
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-saffron-400 to-gold-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs sm:text-sm">
                      {testimonial.image}
                    </span>
                  </div>
                  <div>
                    <h4 className={`font-semibold text-deepblue-900 text-sm sm:text-base ${
                      testimonial.isTeluguReview ? 'font-telugu' : ''
                    }`}>
                      {testimonial.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">{testimonial.location}</p>
                    <Badge 
                      variant="secondary" 
                      className="text-xs mt-1 bg-saffron-100 text-saffron-700"
                    >
                      {testimonial.service}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gradient-to-r from-deepblue-600 to-deepblue-700 rounded-2xl p-6 sm:p-8 text-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Ready to Transform Your Life?</h3>
            <p className="text-base sm:text-lg mb-6 opacity-90">
              Join our community of satisfied clients and experience the power of authentic Vedic astrology
            </p>
            <button 
              onClick={() => window.open('https://wa.me/919999999999?text=Hi, I would like to book a consultation after reading the testimonials', '_blank')}
              className="bg-gradient-to-r from-saffron-500 to-gold-500 hover:from-saffron-600 hover:to-gold-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 hover:shadow-xl"
            >
              Book Your Consultation Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
