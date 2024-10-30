import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

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

const spanishSpeakingCountries = [
  'AR', 'BO', 'CL', 'CO', 'CR', 'CU', 'DO', 'EC', 'SV', 'GQ',
  'GT', 'HN', 'MX', 'NI', 'PA', 'PY', 'PE', 'ES', 'UY', 'VE'
];

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const detectUserLanguage = async () => {
      try {
        const storedLang = localStorage.getItem('preferredLanguage');
        if (storedLang === 'es' || storedLang === 'en') {
          setLanguage(storedLang);
          setIsLoading(false);
          return;
        }

        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        if (spanishSpeakingCountries.includes(data.country_code)) {
          setLanguage('es');
          localStorage.setItem('preferredLanguage', 'es');
        } else {
          setLanguage('en');
          localStorage.setItem('preferredLanguage', 'en');
        }
      } catch (error) {
        console.error('Error detecting language:', error);
        setLanguage('en');
      } finally {
        setIsLoading(false);
      }
    };

    detectUserLanguage();
  }, []);

  const handleSetLanguage = (newLang: Language) => {
    setLanguage(newLang);
    localStorage.setItem('preferredLanguage', newLang);
  };

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
      strategicGrowth: 'Strategic Growth',
      strategicGrowthDesc: 'We help creators develop targeted strategies for sustainable growth and engagement.',
      fastResults: 'Fast Results',
      fastResultsDesc: 'Our proven methods deliver rapid growth while maintaining long-term sustainability.',
      expertTeam: 'Expert Team',
      expertTeamDesc: 'Work with industry professionals who understand the creator economy.',
      provenSuccess: 'Proven Success',
      provenSuccessDesc: 'Join hundreds of creators who have achieved top 1% status with our guidance.',
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
      topCreators: 'Top Creators',
      topCreatorsDesc: 'Our creators consistently rank in the top percentile',
      monthlyEarnings: 'Monthly Earnings',
      monthlyEarningsDesc: 'Average earnings of our top performers',
      growthRate: 'Growth Rate',
      growthRateDesc: 'Average growth rate in first 3 months',
      followers: 'Followers',
      followersDesc: 'Average follower count of our creators',
      testimonials: 'Testimonials',
      testimonial1: 'Working with Vivid has been an incredible journey. They\'ve helped me grow both professionally and personally.',
      testimonial2: 'The team at Vivid is exceptional. Their guidance and support have been invaluable to my career.',
      testimonial3: 'Vivid opened doors I never thought possible. They truly care about their models\' success.',
      topCreator: 'Top Creator',
      risingTalent: 'Rising Talent',
      eliteModel: 'Elite Model',
      faqTitle: 'Frequently Asked Questions',
      faqQuestion1: 'How do I get started with OnlyFans?',
      faqAnswer1: 'Getting started is easy! Simply fill out our join form, and our team will guide you through the entire process, from account setup to content strategy.',
      faqQuestion2: 'What services do you provide for OnlyFans creators?',
      faqAnswer2: 'We offer comprehensive services including content strategy, photography and videography, social media management, marketing campaigns, and personal coaching to help you reach the top 1%.',
      faqQuestion3: 'How long does it take to see results?',
      faqAnswer3: 'While results vary, our proven strategies typically show significant growth within the first 30-60 days. We work closely with you to optimize your content and engagement for maximum success.',
      faqQuestion4: 'Do you help with content creation?',
      faqAnswer4: 'Yes! We provide professional photography and videography services, content planning, and creative direction to ensure your content stands out and attracts subscribers.',
      faqQuestion5: 'What makes your agency different?',
      faqAnswer5: 'We offer a full-service approach, handling everything from content creation to marketing. Our proven track record of helping creators reach the top 1% sets us apart.',
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
      backToTop: 'Back to Top',
      quickLinks: 'Quick Links',
      contactUs: 'Contact Us',
      allRightsReserved: 'All rights reserved.',
      growth: 'Growth',
      timeframe: 'Timeframe'
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
      strategicGrowth: 'Crecimiento Estratégico',
      strategicGrowthDesc: 'Ayudamos a los creadores a desarrollar estrategias específicas para un crecimiento e interacción sostenibles.',
      fastResults: 'Resultados Rápidos',
      fastResultsDesc: 'Nuestros métodos probados brindan un crecimiento rápido manteniendo la sostenibilidad a largo plazo.',
      expertTeam: 'Equipo Experto',
      expertTeamDesc: 'Trabaja con profesionales de la industria que entienden la economía de los creadores.',
      provenSuccess: 'Éxito Comprobado',
      provenSuccessDesc: 'Únete a cientos de creadores que han alcanzado el estatus del 1% superior con nuestra guía.',
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
      topCreators: 'Creadores Top',
      topCreatorsDesc: 'Nuestros creadores se ubican consistentemente en el percentil superior',
      monthlyEarnings: 'Ganancias Mensuales',
      monthlyEarningsDesc: 'Ganancias promedio de nuestros mejores creadores',
      growthRate: 'Tasa de Crecimiento',
      growthRateDesc: 'Tasa de crecimiento promedio en los primeros 3 meses',
      followers: 'Seguidores',
      followersDesc: 'Promedio de seguidores de nuestros creadores',
      testimonial1: 'Trabajar con Vivid ha sido un viaje increíble. Me han ayudado a crecer tanto profesional como personalmente.',
      testimonial2: 'El equipo de Vivid es excepcional. Su orientación y apoyo han sido invaluables para mi carrera.',
      testimonial3: 'Vivid abrió puertas que nunca pensé posibles. Realmente se preocupan por el éxito de sus modelos.',
      topCreator: 'Creador Top',
      risingTalent: 'Talento Emergente',
      eliteModel: 'Modelo Elite',
      faqTitle: 'Preguntas Frecuentes',
      faqQuestion1: '¿Cómo empiezo con OnlyFans?',
      faqAnswer1: '¡Empezar es fácil! Simplemente completa nuestro formulario de registro y nuestro equipo te guiará durante todo el proceso, desde la configuración de la cuenta hasta la estrategia de contenido.',
      faqQuestion2: '¿Qué servicios proporcionan para creadores de OnlyFans?',
      faqAnswer2: 'Ofrecemos servicios integrales que incluyen estrategia de contenido, fotografía y videografía, gestión de redes sociales, campañas de marketing y coaching personal para ayudarte a alcanzar el top 1%.',
      faqQuestion3: '¿Cuánto tiempo toma ver resultados?',
      faqAnswer3: 'Aunque los resultados varían, nuestras estrategias probadas típicamente muestran un crecimiento significativo dentro de los primeros 30-60 días. Trabajamos estrechamente contigo para optimizar tu contenido y engagement para un máximo éxito.',
      faqQuestion4: '¿Ayudan con la creación de contenido?',
      faqAnswer4: '¡Sí! Proporcionamos servicios profesionales de fotografía y videografía, planificación de contenido y dirección creativa para asegurar que tu contenido destaque y atraiga suscriptores.',
      faqQuestion5: '¿Qué hace diferente a su agencia?',
      faqAnswer5: 'Ofrecemos un enfoque de servicio completo, manejando todo desde la creación de contenido hasta el marketing. Nuestro historial probado de ayudar a los creadores a alcanzar el top 1% nos distingue.',
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
      backToTop: 'Volver arriba',
      quickLinks: 'Enlaces rápidos',
      contactUs: 'Contáctanos',
      allRightsReserved: 'Todos los derechos reservados.',
      growth: 'Crecimiento',
      timeframe: 'Periodo de tiempo'
    },
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
    </div>;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};