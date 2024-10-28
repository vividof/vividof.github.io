import React, { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { mediaConfig } from '../config/media'

const Testimonials = () => {
  const { t } = useLanguage();
  const [videoErrors, setVideoErrors] = useState<Record<number, boolean>>({});

  const handleVideoError = (index: number) => {
    setVideoErrors(prev => ({ ...prev, [index]: true }));
  };

  return (
    <section id="testimonials" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">{t('testimonials')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mediaConfig.testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
              {videoErrors[index] ? (
                <div className="w-full aspect-video bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                  <img 
                    src={testimonial.poster} 
                    alt={`Testimonial ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <video 
                  controls
                  poster={testimonial.poster}
                  className="w-full aspect-video object-cover"
                  preload="metadata"
                  onError={() => handleVideoError(index)}
                >
                  <source src={testimonial.videoUrl} type="video/mp4" />
                  <img 
                    src={testimonial.poster} 
                    alt={`Testimonial ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </video>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials