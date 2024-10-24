import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">{t('aboutUs')}</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-6">
            {t('aboutDescription')}
          </p>
          <p className="text-lg text-gray-700">
            {t('aboutDescription2')}
          </p>
        </div>
      </div>
    </section>
  )
}

export default About