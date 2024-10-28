import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { mediaConfig } from '../config/media'

const Results = () => {
  const { t } = useLanguage();

  return (
    <section id="results" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">{t('ourResults')}</h2>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-lg leading-relaxed dark:text-gray-200">
            We Are a Full Start To Finish Management Agency for OnlyFans Creators Ready at Your Service. Our Goal Is To Help You Reach The Top 1% of Creators (and better), earn more than $20,000 Per Month, And Scale Your Business To The Next Level.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mediaConfig.results.map((result, index) => (
            <div key={index} className="relative overflow-hidden group rounded-lg shadow-lg">
              <img 
                src={result.image} 
                alt={`Result ${index + 1}`} 
                className="w-full h-64 object-cover transition duration-300 transform group-hover:scale-110" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Results