import React from 'react'
import { Camera, Video, Users, Briefcase, GraduationCap } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const Services = () => {
  const { t } = useLanguage();

  const services = [
    { icon: <Camera className="h-12 w-12 text-blue-600" />, title: t('photoShoots'), description: t('photoShootsDesc') },
    { icon: <Video className="h-12 w-12 text-blue-600" />, title: t('videoProduction'), description: t('videoProductionDesc') },
    { icon: <Users className="h-12 w-12 text-blue-600" />, title: t('talentManagement'), description: t('talentManagementDesc') },
    { icon: <Briefcase className="h-12 w-12 text-blue-600" />, title: t('bookingServices'), description: t('bookingServicesDesc') },
    { icon: <GraduationCap className="h-12 w-12 text-blue-600" />, title: t('modelTraining'), description: t('modelTrainingDesc') },
  ]

  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t('ourServices')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services