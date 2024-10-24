import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const Clients = () => {
  const { t } = useLanguage();

  const clients = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Adidas_logo.png/800px-Adidas_logo.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/1200px-Zara_Logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Vogue_Logo.svg/1200px-Vogue_Logo.svg.png',
  ]

  return (
    <section id="clients" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t('ourClients')}</h2>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {clients.map((client, index) => (
            <div key={index} className="w-40 h-20">
              <img src={client} alt={`Client ${index + 1}`} className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients