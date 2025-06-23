
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

const BlogPage = () => {
  const blogPosts = [
    {
      title: "Understanding Manglik Dosha: Myths vs Reality",
      excerpt: "Learn the truth about Manglik Dosha and how it actually affects marriage compatibility. We separate facts from common misconceptions.",
      category: "Marriage Astrology",
      date: "December 15, 2024",
      readTime: "8 min read",
      author: "Pandit Sri Raghavendra",
      featured: true
    },
    {
      title: "2024 Marriage Muhurat Dates for Telugu Families",
      excerpt: "Complete list of auspicious dates for weddings in 2024 according to Telugu calendar and Vedic astrology principles.",
      category: "Muhurat",
      date: "December 10, 2024",
      readTime: "6 min read",
      author: "Pandit Sri Raghavendra",
      featured: false
    },
    {
      title: "How to Choose the Right Gemstone Based on Your Birth Chart",
      excerpt: "Detailed guide on selecting gemstones that align with your planetary positions for maximum benefit and positive energy.",
      category: "Gemstones",
      date: "December 5, 2024",
      readTime: "10 min read",
      author: "Pandit Sri Raghavendra",
      featured: false
    },
    {
      title: "Career Astrology: Finding Your Professional Path",
      excerpt: "Discover how your birth chart reveals your natural talents and the best career choices for lasting success and satisfaction.",
      category: "Career",
      date: "November 28, 2024",
      readTime: "12 min read",
      author: "Pandit Sri Raghavendra",
      featured: false
    },
    {
      title: "Vastu Tips for Home and Office Prosperity",
      excerpt: "Simple yet effective Vastu guidelines to enhance positive energy flow in your living and working spaces.",
      category: "Vastu Shastra",
      date: "November 20, 2024",
      readTime: "7 min read",
      author: "Pandit Sri Raghavendra",
      featured: false
    },
    {
      title: "Understanding Planetary Dashas and Life Phases",
      excerpt: "Learn about major planetary periods in your life and how they influence different aspects of your personal and professional journey.",
      category: "Vedic Astrology",
      date: "November 15, 2024",
      readTime: "15 min read",
      author: "Pandit Sri Raghavendra",
      featured: false
    }
  ];

  const categories = ["All", "Marriage Astrology", "Career", "Gemstones", "Muhurat", "Vastu Shastra", "Vedic Astrology"];

  const handleConsultation = () => {
    window.open('https://wa.me/919999999999?text=Hi, I read your blog and would like to book a consultation', '_blank');
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-saffron-50 to-gold-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-gradient-to-r from-saffron-100 to-gold-100 text-saffron-700 border-saffron-200 mb-4">
              Blog & Insights
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-deepblue-900">Astrology</span>
              <span className="gradient-text font-cinzel"> Wisdom & Insights</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the depths of Vedic astrology through our carefully crafted articles. 
              Gain insights into ancient wisdom and practical guidance for modern life.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <Button 
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 
                  ? "bg-gradient-to-r from-saffron-500 to-gold-500 hover:from-saffron-600 hover:to-gold-600" 
                  : "border-saffron-300 text-saffron-600 hover:bg-saffron-50"
                }
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-deepblue-900 mb-4">Featured Article</h2>
          </div>
          
          {blogPosts.filter(post => post.featured).map((post, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 mb-12">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="bg-gradient-to-br from-saffron-100 to-gold-100 p-12 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-saffron-400 to-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-white text-3xl font-bold">ॐ</span>
                      </div>
                      <Badge className="bg-saffron-200 text-saffron-700 mb-4">
                        {post.category}
                      </Badge>
                      <p className="text-sm text-gray-600">Featured Article</p>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-deepblue-900 mb-4">{post.title}</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">{post.excerpt}</p>
                    <Button className="bg-gradient-to-r from-saffron-500 to-gold-500 hover:from-saffron-600 hover:to-gold-600">
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-deepblue-900 mb-4">Latest Articles</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <Badge className="bg-saffron-100 text-saffron-700 mb-4">
                    {post.category}
                  </Badge>
                  <h3 className="text-xl font-bold text-deepblue-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-saffron-300 text-saffron-600 hover:bg-saffron-50"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button 
              variant="outline"
              className="border-saffron-300 text-saffron-600 hover:bg-saffron-50 px-8 py-3"
            >
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-deepblue-600 to-deepblue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated with Astrology Insights
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and receive weekly astrology tips, 
            predictions, and guidance directly in your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4 mb-8">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-500"
            />
            <Button className="bg-gradient-to-r from-saffron-500 to-gold-500 hover:from-saffron-600 hover:to-gold-600 px-6">
              Subscribe
            </Button>
          </div>
          <Button 
            onClick={handleConsultation}
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-deepblue-700"
          >
            Book Personal Consultation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
