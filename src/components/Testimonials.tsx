
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const Testimonials = () => {
  const { t, language } = useLanguage();

  const testimonials = language === 'en' ? [
    {
      name: "Priya Sharma",
      location: "Hyderabad",
      rating: 5,
      text: "Pandit Sri Raghavendra's predictions were incredibly accurate. His guidance helped me make the right career decisions at the perfect time.",
      service: "Career Guidance"
    },
    {
      name: "Raj Kumar",
      location: "Vijayawada", 
      rating: 5,
      text: "The marriage compatibility analysis was detailed and very helpful. We're happily married now and everything he predicted has come true.",
      service: "Marriage Compatibility"
    },
    {
      name: "Meera Reddy",
      location: "Warangal",
      rating: 5,
      text: "His remedies for my health issues worked wonderfully. I'm grateful for his authentic Vedic knowledge and caring approach.",
      service: "Health Predictions"
    }
  ] : [
    {
      name: "ప్రియా శర్మ",
      location: "హైదరాబాద్",
      rating: 5,
      text: "పండిత్ శ్రీ రాఘవేంద్ర గారి భవిష్యవాణులు చాలా ఖచ్చితంగా ఉన్నాయి. వారి మార్గదర్శకత్వం సరైన సమయంలో సరైన కెరీర్ నిర్ణయాలు తీసుకోవడంలో నాకు సహాయపడింది.",
      service: "కెరీర్ మార్గదర్శకత్వం"
    },
    {
      name: "రాజ్ కుమార్",
      location: "విజయవాడ",
      rating: 5,
      text: "వివాహ అనుకూలత విశ్లేషణ వివరంగా మరియు చాలా సహాయకరంగా ఉంది. మేము ఇప్పుడు సంతోషంగా వివాహం చేసుకున్నాము మరియు అతను అంచనా వేసిన ప్రతిదీ నిజమైంది.",
      service: "వివాహ అనుకూలత"
    },
    {
      name: "మీరా రెడ్డి",
      location: "వరంగల్",
      rating: 5,
      text: "నా ఆరోగ్య సమస్యలకు వారి పరిహారాలు అద్భుతంగా పనిచేశాయి. వారి ప్రామాణిక వైదిక జ్ఞానం మరియు శ్రద్ధతో కూడిన విధానానికి నేను కృతజ్ఞుడను.",
      service: "ఆరోగ్య భవిష్యవాణులు"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-saffron-50 via-gold-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-deepblue-900 mb-4">
            {t('testimonialsTitle')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('testimonialsSubtitle')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-4">
                  <Quote className="text-saffron-400 opacity-50" size={32} />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-gold-400 fill-current" size={16} />
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-deepblue-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-saffron-600 font-medium">{testimonial.service}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
