
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, MessageCircle, Mail, MapPin, Clock, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi, I'm ${formData.name}. I'm interested in ${formData.service}. ${formData.message}. My contact: ${formData.email}, ${formData.phone}`;
    window.open(`https://wa.me/919573686899?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919573686899?text=Hi, I would like to book a consultation', '_blank');
  };

  const handleCall = () => {
    window.open('tel:+919573686899', '_self');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91 9573 686899",
      action: handleCall,
      description: "Call us directly for immediate assistance"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: "Chat with us instantly",
      action: handleWhatsApp,
      description: "Quick responses on WhatsApp"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@raghavendrajyotishalayam.com",
      action: () => window.open('mailto:info@raghavendrajyotishalayam.com'),
      description: "Send us detailed inquiries"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Hyderabad, Telangana",
      action: () => {},
      description: "Serving clients across Telugu states"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", time: "9:00 AM - 7:00 PM" },
    { day: "Saturday", time: "9:00 AM - 5:00 PM" },
    { day: "Sunday", time: "10:00 AM - 4:00 PM" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-saffron-50 to-gold-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-gradient-to-r from-saffron-100 to-gold-100 text-saffron-700 border-saffron-200 mb-4">
              Contact Us
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-deepblue-900">Get in</span>
              <span className="gradient-text font-cinzel"> Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to discover what the stars have in store for you? Reach out to us today and 
              begin your journey towards clarity and enlightenment.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-saffron-400 to-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-deepblue-900 mb-2">{info.title}</h3>
                  <p className="text-saffron-600 font-medium mb-2">{info.details}</p>
                  <p className="text-sm text-gray-600 mb-4">{info.description}</p>
                  {info.action && (
                    <Button 
                      onClick={info.action}
                      variant="outline"
                      className="border-saffron-300 text-saffron-600 hover:bg-saffron-50"
                      size="sm"
                    >
                      Contact Now
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form and Info */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-deepblue-900 mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron-500"
                    >
                      <option value="">Select a service</option>
                      <option value="Horoscope Analysis">Horoscope Analysis</option>
                      <option value="Marriage Kundali Matching">Marriage Kundali Matching</option>
                      <option value="Career Guidance">Career Guidance</option>
                      <option value="Gemstone Consultation">Gemstone Consultation</option>
                      <option value="Vastu Shastra">Vastu Shastra</option>
                      <option value="Muhurat Selection">Muhurat Selection</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Tell us about your specific requirements or questions..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-saffron-500 to-gold-500 hover:from-saffron-600 hover:to-gold-600"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Office Hours and Additional Info */}
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Clock className="w-6 h-6 text-saffron-500 mr-3" />
                    <h3 className="text-xl font-bold text-deepblue-900">Office Hours</h3>
                  </div>
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                        <span className="text-gray-700">{schedule.day}</span>
                        <span className="text-saffron-600 font-medium">{schedule.time}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-4 bg-saffron-50 rounded-lg">
                    <p className="text-sm text-saffron-700">
                      <strong>Emergency Consultations:</strong> Available 24/7 for urgent matters. 
                      Additional charges may apply for after-hours consultations.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-deepblue-900 mb-4">Why Choose Us?</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-saffron-500 rounded-full mt-2"></div>
                      <p className="text-gray-700">Certified and experienced astrologer</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-saffron-500 rounded-full mt-2"></div>
                      <p className="text-gray-700">Authentic Vedic astrology practices</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-saffron-500 rounded-full mt-2"></div>
                      <p className="text-gray-700">Personalized consultations</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-saffron-500 rounded-full mt-2"></div>
                      <p className="text-gray-700">Confidential and compassionate service</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
