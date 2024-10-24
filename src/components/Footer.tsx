import React from 'react'
import { Instagram } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Vivid</h3>
          </div>
          <div className="w-full md:w-1/2">
            <h4 className="text-lg font-semibold mb-2">{t('followUs')}</h4>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/vivid.of" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white"
              >
                <Instagram />
              </a>
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