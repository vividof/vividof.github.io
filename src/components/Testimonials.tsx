import React, { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { mediaConfig } from '../config/media'
import { Play } from 'lucide-react'

const Testimonials = () => {
  const { t } = useLanguage();
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const handleVideoPlay = (index: number) => {
    setPlayingVideo(index);
  };

  return (
    <section id="testimonials" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">{t('testimonials')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mediaConfig.testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                {playingVideo === index ? (
                  <video 
                    controls
                    autoPlay
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    preload="none"
                  >
                    <source src={testimonial.videoUrl} type="video/mp4" />
                  </video>
                ) : (
                  <div 
                    className="absolute top-0 left-0 w-full h-full cursor-pointer group"
                    onClick={() => handleVideoPlay(index)}
                  >
                    <img 
                      src={testimonial.poster}
                      alt={`Testimonial ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-opacity duration-300">
                      <Play className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials