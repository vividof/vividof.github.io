import React, { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Plyr from 'plyr-react'
import 'plyr/dist/plyr.css'

interface Testimonial {
  id: number
  name: string
  role: string
  videoUrl: string
  poster: string
  quote: string
}

const Testimonials = () => {
  const { t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: t('topCreator'),
      videoUrl: '/videos/testimonial1.mp4',
      poster: '/images/testimonials/poster1.jpg',
      quote: t('testimonial1')
    },
    {
      id: 2,
      name: 'Emily Davis',
      role: t('risingTalent'),
      videoUrl: '/videos/testimonial2.mp4',
      poster: '/images/testimonials/poster2.jpg',
      quote: t('testimonial2')
    },
    {
      id: 3,
      name: 'Maria Rodriguez',
      role: t('eliteModel'),
      videoUrl: '/videos/testimonial3.mp4',
      poster: '/images/testimonials/poster3.jpg',
      quote: t('testimonial3')
    }
  ]

  const plyrOptions = {
    controls: [
      'play-large',
      'play',
      'progress',
      'current-time',
      'mute',
      'volume',
      'fullscreen'
    ],
    ratio: '16:9'
  }

  const changeTestimonial = (newIndex: number) => {
    setCurrentIndex(newIndex)
  }

  const nextTestimonial = () => {
    const newIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
    changeTestimonial(newIndex)
  }

  const previousTestimonial = () => {
    const newIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    changeTestimonial(newIndex)
  }

  return (
    <section id="testimonials" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          {t('testimonials')}
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
            <div className="relative w-full bg-white dark:bg-gray-700">
              <Plyr
                source={{
                  type: 'video',
                  sources: [
                    {
                      src: testimonials[currentIndex].videoUrl,
                      type: 'video/mp4',
                    }
                  ],
                  poster: testimonials[currentIndex].poster
                }}
                options={plyrOptions}
              />
            </div>

            <div className="p-6 bg-white dark:bg-gray-700">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {testimonials[currentIndex].role}
                </p>
              </div>
              
              <blockquote className="text-gray-700 dark:text-gray-200 text-base italic mb-4">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              
              <div className="flex justify-between items-center">
                <button
                  onClick={previousTestimonial}
                  className="p-1.5 rounded-full bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors duration-200"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-200" />
                </button>
                
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => changeTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                        index === currentIndex
                          ? 'bg-blue-600 dark:bg-blue-400'
                          : 'bg-gray-300 dark:bg-gray-500 hover:bg-gray-400 dark:hover:bg-gray-400'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextTestimonial}
                  className="p-1.5 rounded-full bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors duration-200"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-200" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials