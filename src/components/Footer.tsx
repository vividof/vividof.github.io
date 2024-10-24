import React from 'react'
import { Facebook, Instagram, Twitter } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Vivid</h3>
            <p className="text-gray-400">{t('discoverTopTalent')}</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">{t('quickLinks')}</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white">{t('home')}</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">{t('about')}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white">{t('services')}</a></li>
              <li><a href="#works" className="text-gray-400 hover:text-white">{t('works')}</a></li>
              <li><a href="#clients" className="text-gray-400 hover:text-white">{t('clients')}</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">{t('followUs')}</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><Facebook /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Instagram /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Twitter /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2024 Vivid. {t('allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer