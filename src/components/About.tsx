import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { Target, Rocket, Users, Award } from 'lucide-react'

const About = () => {
  const { t } = useLanguage()

  const features = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: 'Strategic Growth',
      description: 'We help creators develop targeted strategies for sustainable growth and engagement.'
    },
    {
      icon: <Rocket className="w-8 h-8 text-green-600" />,
      title: 'Fast Results',
      description: 'Our proven methods deliver rapid growth while maintaining long-term sustainability.'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: 'Expert Team',
      description: 'Work with industry professionals who understand the creator economy.'
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-600" />,
      title: 'Proven Success',
      description: 'Join hundreds of creators who have achieved top 1% status with our guidance.'
    }
  ]

  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 dark:text-white">{t('aboutUs')}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            {t('aboutDescription')}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {t('aboutDescription2')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About