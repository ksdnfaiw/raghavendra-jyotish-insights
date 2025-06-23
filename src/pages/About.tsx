
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Award, BookOpen, Users, Star, Clock, Heart } from 'lucide-react';

const AboutPage = () => {
  const handleConsultation = () => {
    window.open('https://wa.me/919999999999?text=Hi, I would like to know more about your services and book a consultation', '_blank');
  };

  const achievements = [
    {
      icon: Award,
      title: "Certified Astrologer",
      description: "Certified by the Indian Council of Astrological Sciences with advanced training in Vedic astrology"
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Regular participation in astrology conferences and workshops to stay updated with ancient wisdom"
    },
    {
      icon: Users,
      title: "500+ Satisfied Clients",
      description: "Successfully guided over 500 individuals and families across Telugu states"
    },
    {
      icon: Star,
      title: "98% Accuracy Rate",
      description: "Maintained consistently high accuracy in predictions and guidance over the years"
    }
  ];

  const values = [
    {
      title: "Authenticity",
      description: "We follow traditional Vedic astrology principles passed down through generations, ensuring authentic and accurate readings."
    },
    {
      title: "Compassion",
      description: "Every consultation is conducted with empathy and understanding, recognizing that each person's journey is unique."
    },
    {
      title: "Integrity",
      description: "We provide honest, straightforward guidance without creating unnecessary fear or false hopes."
    },
    {
      title: "Confidentiality",
      description: "All personal information and consultation details are kept strictly confidential."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-saffron-50 to-gold-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-gradient-to-r from-saffron-100 to-gold-100 text-saffron-700 border-saffron-200 mb-4">
              About Us
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-deepblue-900">Meet</span>
              <span className="gradient-text font-cinzel"> Pandit Sri Raghavendra</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              With over 10 years of dedicated practice in Vedic astrology, Pandit Sri Raghavendra has been 
              a trusted spiritual guide for hundreds of families across Hyderabad and Telugu states.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-deepblue-900 mb-6">Our Journey</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Born into a family of traditional astrologers in Andhra Pradesh, Pandit Sri Raghavendra 
                  was introduced to the ancient science of Vedic astrology from a young age. Under the 
                  guidance of his grandfather, a renowned astrologer, he began his formal training at the age of 15.
                </p>
                <p>
                  After completing his studies in Sanskrit and Vedic scriptures, he spent several years 
                  studying under various masters across South India, learning different schools of 
                  astrological thought including Parashari, Jaimini, and KP systems.
                </p>
                <p>
                  Today, he combines traditional wisdom with modern understanding to provide practical, 
                  relevant guidance that helps people navigate their life challenges with confidence and clarity.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-saffron-100 to-gold-100 rounded-2xl p-8 text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-saffron-400 to-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-4xl font-bold">ॐ</span>
                </div>
                <h3 className="text-xl font-bold text-deepblue-900 mb-2">Pandit Sri Raghavendra</h3>
                <p className="text-gray-600">Vedic Astrology Expert</p>
                <div className="flex justify-center mt-4 space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-deepblue-900 mb-4">Achievements & Recognition</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our commitment to authentic Vedic astrology and client satisfaction has earned us 
              recognition and trust from the community.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <achievement.icon className="w-12 h-12 text-saffron-500 mx-auto mb-4" />
                  <h3 className="font-bold text-deepblue-900 mb-2">{achievement.title}</h3>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-deepblue-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core values guide our practice and ensure that every client receives 
              the highest quality of service and genuine care.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-saffron-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-bold text-deepblue-900 mb-2">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
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
          <Heart className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let us guide you towards a brighter future with authentic Vedic astrology wisdom. 
            Your journey to clarity and peace of mind starts with a single consultation.
          </p>
          <Button 
            onClick={handleConsultation}
            className="bg-gradient-to-r from-saffron-500 to-gold-500 hover:from-saffron-600 hover:to-gold-600 text-white px-8 py-4 text-lg"
          >
            Book Your Consultation Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
