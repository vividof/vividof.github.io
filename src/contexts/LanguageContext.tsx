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
      results: 'Results',
      testimonials: 'Testimonials',
      faq: 'FAQ',
      language: 'Language',
      darkMode: 'Dark Mode',
      lightMode: 'Light Mode',
      welcomeToVivid: 'WE HELP CREATORS REACH THE TOP 1% ON ONLYFANS.',
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
      ourResults: 'Our Results',
      fashionWeekParis: 'Fashion Week Paris',
      summerCollection: 'Summer Collection',
      luxuryBrandCampaign: 'Luxury Brand Campaign',
      magazineCoverShoot: 'Magazine Cover Shoot',
      followUs: 'Follow Us',
      allRightsReserved: 'All rights reserved.',
      testimonial1: 'Working with Vivid has been an incredible journey. They\'ve helped me grow both professionally and personally.',
      testimonial2: 'The team at Vivid is exceptional. Their guidance and support have been invaluable to my career.',
      testimonial3: 'Vivid opened doors I never thought possible. They truly care about their models\' success.',
      submissionSuccess: 'Form submitted successfully!',
      submissionError: 'Error submitting form. Please try again.',
      submitting: 'Submitting...',
      submit: 'Submit',
      cancel: 'Cancel',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      whyJoin: 'Why do you want to join?',
      uploadFiles: 'Upload Files',
      multipleFiles: 'You can select multiple files',
      selectedFiles: 'Selected Files',
    },
    es: {
      home: 'Inicio',
      about: 'Acerca de',
      services: 'Servicios',
      results: 'Resultados',
      testimonials: 'Testimonios',
      faq: 'Preguntas Frecuentes',
      language: 'Idioma',
      darkMode: 'Modo Oscuro',
      lightMode: 'Modo Claro',
      welcomeToVivid: 'AYUDAMOS A LOS CREADORES A ALCANZAR EL TOP 1% EN ONLYFANS.',
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
      ourResults: 'Nuestros Resultados',
      fashionWeekParis: 'Semana de la Moda de París',
      summerCollection: 'Colección de Verano',
      luxuryBrandCampaign: 'Campaña de Marca de Lujo',
      magazineCoverShoot: 'Sesión de Portada de Revista',
      followUs: 'Síguenos',
      allRightsReserved: 'Todos los derechos reservados.',
      testimonial1: 'Trabajar con Vivid ha sido un viaje increíble. Me han ayudado a crecer tanto profesional como personalmente.',
      testimonial2: 'El equipo de Vivid es excepcional. Su orientación y apoyo han sido invaluables para mi carrera.',
      testimonial3: 'Vivid abrió puertas que nunca pensé posibles. Realmente se preocupan por el éxito de sus modelos.',
      submissionSuccess: '¡Formulario enviado con éxito!',
      submissionError: 'Error al enviar el formulario. Por favor, inténtalo de nuevo.',
      submitting: 'Enviando...',
      submit: 'Enviar',
      cancel: 'Cancelar',
      name: 'Nombre',
      email: 'Correo electrónico',
      phone: 'Teléfono',
      whyJoin: '¿Por qué quieres unirte?',
      uploadFiles: 'Subir archivos',
      multipleFiles: 'Puedes seleccionar múltiples archivos',
      selectedFiles: 'Archivos seleccionados',
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