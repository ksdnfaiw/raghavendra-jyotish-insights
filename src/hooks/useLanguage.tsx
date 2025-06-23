import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'te';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    callNow: 'Call Now',
    chatWhatsApp: 'Chat on WhatsApp',
    siteName: 'Sri Raghavendra Jyotishalayam',
    tagline: 'Authentic Vedic Astrology',
    home: 'Home',
    services: 'Services',
    about: 'About',
    testimonials: 'Testimonials',
    blog: 'Blog',
    contact: 'Contact',
    bookConsultation: 'Book Consultation',
    
    // Hero Section
    heroTitle: '25+ Years of Authentic Vedic Astrology Guidance in Hyderabad',
    heroSubtitle: 'Discover your destiny with ancient wisdom and personalized guidance from certified Vedic astrologer Pandit Sri Raghavendra',
    getReading: 'Get Your Reading',
    learnMore: 'Learn More',
    trustedBy: 'Trusted by 500+ clients with 98% accuracy rate',
    
    // Services
    ourServices: 'Our Services',
    servicesDescription: 'Comprehensive astrological services to guide you through life\'s journey',
    
    // Service items
    horoscopeTitle: 'Horoscope Analysis',
    horoscopeDesc: 'Detailed birth chart analysis with planetary positions and predictions',
    
    marriageTitle: 'Marriage Compatibility',
    marriageDesc: 'Scientific Kundali matching using traditional Ashtakoota system',
    
    careerTitle: 'Career Guidance',
    careerDesc: 'Professional direction based on planetary influences and Dasha periods',
    
    remediesTitle: 'Astrological Remedies',
    remediesDesc: 'Personalized solutions including gemstones, mantras, and rituals',
    
    businessTitle: 'Business Astrology',
    businessDesc: 'Strategic timing and partnership compatibility for business ventures',
    
    healthTitle: 'Health Predictions',
    healthDesc: 'Health insights and preventive measures based on astrological analysis',
    
    // Testimonials
    testimonialsTitle: 'What Our Clients Say',
    testimonialsSubtitle: 'Real experiences from satisfied clients',
    
    // Footer
    quickLinks: 'Quick Links',
    contactInfo: 'Contact Information',
    followUs: 'Follow Us',
    allRightsReserved: 'All rights reserved.',
    address: 'H.No.6-99-12, Chanda Nagar MMTS Lane, Huda Colony, Chanda Nagar-500050',
    hours: 'Mon-Sun: 10:00 AM - 6:00 PM',
    visitLocation: 'Visit Our Location',
    consultation: 'Namaskaram Pandit Ji, I would like to learn more about your astrology consultation services.'
  },
  te: {
    // Header
    callNow: 'ఇప్పుడే కాల్ చేయండి',
    chatWhatsApp: 'వాట్సప్‌లో చాట్ చేయండి',
    siteName: 'శ్రీ రాఘవేంద్ర జ్యోతిష్‌ఆలయం',
    tagline: 'ప్రామాణిక వైదిక జ్యోతిష్యం',
    home: 'హోమ్',
    services: 'సేవలు',
    about: 'గురించి',
    testimonials: 'సాక్ష్యాలు',
    blog: 'బ్లాగ్',
    contact: 'సంప్రదింపులు',
    bookConsultation: 'సంప్రదింపు బుక్ చేయండి',
    
    // Hero Section
    heroTitle: 'హైదరాబాద్‌లో 25+ సంవత్సరాల ప్రామాణిక వైదిక జ్యోతిష్య మార్గదర్శకత్వం',
    heroSubtitle: 'ప్రమాణీకృత వైదిక జ్యోతిష్యుడు పండిత్ శ్రీ రాఘవేంద్ర నుండి పురాతన జ్ఞానం మరియు వ్యక్తిగత మార్గదర్శకత్వంతో మీ విధిని తెలుసుకోండి',
    getReading: 'మీ రీడింగ్ పొందండి',
    learnMore: 'మరింత తెలుసుకోండి',
    trustedBy: '98% ఖచ్చితత్వ రేటుతో 500+ క్లయింట్లచే విశ్వసించబడింది',
    
    // Services
    ourServices: 'మా సేవలు',
    servicesDescription: 'జీవిత ప్రయాణంలో మిమ్మల్ని మార్గదర్శనం చేయడానికి సమగ్ర జ్యోతిష్య సేవలు',
    
    // Service items
    horoscopeTitle: 'జన్మ పత్రిక విశ్లేషణ',
    horoscopeDesc: 'గ్రహ స్థానాలు మరియు భవిష్యవాణులతో వివరణాత్మక జన్మ చార్ట్ విశ్లేషణ',
    
    marriageTitle: 'వివాహ అనుకూలత',
    marriageDesc: 'సాంప్రదాయ అష్టకూట వ్యవస్థను ఉపయోగించి శాస్త్రీయ కుండలి మ్యాచింగ్',
    
    careerTitle: 'కెరీర్ మార్గదర్శకత్వం',
    careerDesc: 'గ్రహ ప్రభావాలు మరియు దశా కాలాల ఆధారంగా వృత్తిపరమైన దిశ',
    
    remediesTitle: 'జ్యోతిష్య పరిహారాలు',
    remediesDesc: 'రత్నాలు, మంత్రాలు మరియు కర్మకాండలతో సహిత వ్యక్తిగత పరిష్కారాలు',
    
    businessTitle: 'వ్యాపార జ్యోతిష్యం',
    businessDesc: 'వ్యాపార వ్యవహారాలకు వ్యూహాత్మక సమయం మరియు భాగస్వామ్య అనుకూలత',
    
    healthTitle: 'ఆరోగ్య భవిష్యవాణులు',
    healthDesc: 'జ్యోతిష్య విశ్లేషణ ఆధారంగా ఆరోగ్య అంతర్దృష్టులు మరియు నివారణ చర్యలు',
    
    // Testimonials
    testimonialsTitle: 'మా క్లయింట్లు చెప్పేది',
    testimonialsSubtitle: 'సంతృప్తి చెందిన క్లయింట్ల నుండి నిజమైన అనుభవాలు',
    
    // Footer
    quickLinks: 'త్వరిత లింకులు',
    contactInfo: 'సంప్రదింపు సమాచారం',
    followUs: 'మమ్మల్ని అనుసరించండి',
    allRightsReserved: 'అన్ని హక్కులు రక్షించబడ్డాయి.',
    address: 'ఇంటి నెం.6-99-12, చందా నగర్ MMTS లేన్, హుడా కాలనీ, చందా నగర్-500050',
    hours: 'సోమ-ఆది: ఉదయం 10:00 - సాయంత్రం 6:00',
    visitLocation: 'మా స్థానాన్ని సందర్శించండి',
    consultation:'నమస్కారం పండిట్ జీ, మీ జ్యోతిష సంప్రదింపు సేవల గురించి నేను మరింత తెలుసుకోవాలనుకుంటున్నాను.'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'te')) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('preferred-language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
