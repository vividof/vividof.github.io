import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const translations: Record<Language, Record<string, string>> = {
    en: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      works: 'Works',
      clients: 'Clients',
      language: 'Language',
      darkMode: 'Dark Mode',
      lightMode: 'Light Mode',
      welcomeToVivid: 'Welcome to Vivid',
      discoverTopTalent: 'Discover the world\'s top modeling talent',
      joinUs: 'Join Us',
      learnMore: 'Learn More',
      aboutUs: 'About Us',
      aboutDescription: 'Vivid is a premier modeling agency dedicated to discovering and nurturing the world\'s top modeling talent. With years of experience in the fashion industry, we provide unparalleled opportunities for models to showcase their unique beauty and style on global platforms.',
      aboutDescription2: 'Our team of industry experts works tirelessly to connect our models with leading brands, designers, and photographers, ensuring successful collaborations that push the boundaries of fashion and creativity.',
      ourServices: 'Our Services',
      photoShoots: 'Photo Shoots',
      photoShootsDesc: 'Professional photo sessions for various purposes.',
      videoProduction: 'Video Production',
      videoProductionDesc: 'High-quality video content for commercials and more.',
      talentManagement: 'Talent Management',
      talentManagementDesc: 'Comprehensive management services for models.',
      bookingServices: 'Booking Services',
      bookingServicesDesc: 'Securing modeling jobs and contracts for our talent.',
      modelTraining: 'Model Training',
      modelTrainingDesc: 'Professional development and coaching for aspiring models.',
      ourWorks: 'Our Works',
      fashionWeekParis: 'Fashion Week Paris',
      summerCollection: 'Summer Collection',
      luxuryBrandCampaign: 'Luxury Brand Campaign',
      magazineCoverShoot: 'Magazine Cover Shoot',
      ourClients: 'Our Clients',
      quickLinks: 'Quick Links',
      followUs: 'Follow Us',
      allRightsReserved: 'All rights reserved.',
    },
    es: {
      home: 'Inicio',
      about: 'Acerca de',
      services: 'Servicios',
      works: 'Trabajos',
      clients: 'Clientes',
      language: 'Idioma',
      darkMode: 'Modo Oscuro',
      lightMode: 'Modo Claro',
      welcomeToVivid: 'Bienvenido a Vivid',
      discoverTopTalent: 'Descubre el mejor talento de modelaje del mundo',
      joinUs: 'Únete a nosotros',
      learnMore: 'Aprende más',
      aboutUs: 'Sobre nosotros',
      aboutDescription: 'Vivid es una agencia de modelos de primer nivel dedicada a descubrir y nutrir el mejor talento de modelaje del mundo. Con años de experiencia en la industria de la moda, ofrecemos oportunidades sin igual para que los modelos muestren su belleza y estilo únicos en plataformas globales.',
      aboutDescription2: 'Nuestro equipo de expertos de la industria trabaja incansablemente para conectar a nuestros modelos con marcas, diseñadores y fotógrafos líderes, asegurando colaboraciones exitosas que empujan los límites de la moda y la creatividad.',
      ourServices: 'Nuestros servicios',
      photoShoots: 'Sesiones fotográficas',
      photoShootsDesc: 'Sesiones de fotos profesionales para diversos propósitos.',
      videoProduction: 'Producción de video',
      videoProductionDesc: 'Contenido de video de alta calidad para comerciales y más.',
      talentManagement: 'Gestión de talento',
      talentManagementDesc: 'Servicios integrales de gestión para modelos.',
      bookingServices: 'Servicios de reserva',
      bookingServicesDesc: 'Asegurando trabajos y contratos de modelaje para nuestro talento.',
      modelTraining: 'Entrenamiento de modelos',
      modelTrainingDesc: 'Desarrollo profesional y entrenamiento para modelos aspirantes.',
      ourWorks: 'Nuestros trabajos',
      fashionWeekParis: 'Semana de la Moda de París',
      summerCollection: 'Colección de Verano',
      luxuryBrandCampaign: 'Campaña de Marca de Lujo',
      magazineCoverShoot: 'Sesión de Portada de Revista',
      ourClients: 'Nuestros clientes',
      quickLinks: 'Enlaces rápidos',
      followUs: 'Síguenos',
      allRightsReserved: 'Todos los derechos reservados.',
    },
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};