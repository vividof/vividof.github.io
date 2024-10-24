import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    { videoUrl: '/videos/testimonial1.mp4', poster: '/images/testimonials/poster1.jpg' },
    { videoUrl: '/videos/testimonial2.mp4', poster: '/images/testimonials/poster2.jpg' },
    { videoUrl: '/videos/testimonial3.mp4', poster: '/images/testimonials/poster3.jpg' },
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">{t('testimonials')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
              <video 
                controls
                poster={testimonial.poster}
                className="w-full aspect-video object-cover"
                preload="none"
              >
                <source src={testimonial.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials