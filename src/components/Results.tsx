import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { Trophy, DollarSign, TrendingUp, Users } from 'lucide-react'

const Results = () => {
  const { t } = useLanguage()

  const stats = [
    {
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      value: '1%',
      label: t('topCreators'),
      description: t('topCreatorsDesc')
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-500" />,
      value: '20K+',
      label: t('monthlyEarnings'),
      description: t('monthlyEarningsDesc')
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
      value: '500%',
      label: t('growthRate'),
      description: t('growthRateDesc')
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      value: '100K+',
      label: t('followers'),
      description: t('followersDesc')
    }
  ]

  const successStories = [
    {
      image: '/images/results/result1.jpg',
      title: t('successStory1Title'),
      description: t('successStory1Desc'),
      stats: {
        earnings: '$25,000/month',
        growth: '600%',
        time: '3 months'
      }
    },
    {
      image: '/images/results/result2.jpg',
      title: t('successStory2Title'),
      description: t('successStory2Desc'),
      stats: {
        earnings: '$32,000/month',
        growth: '800%',
        time: '4 months'
      }
    }
  ]

  return (
    <section id="results" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
          {t('ourResults')}
        </h2>

        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 text-center transform hover:scale-105 transition-transform duration-300 shadow-md"
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <h3 className="text-lg font-semibold mb-2 dark:text-white">
                {stat.label}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <div className="space-y-12">
          {successStories.map((story, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="h-64 md:h-full relative">
                    <img 
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                </div>
                <div className="md:w-2/3 p-6 md:p-8">
                  <h3 className="text-xl font-bold mb-3 dark:text-white">
                    {story.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {story.description}
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600 dark:text-green-400">
                        {story.stats.earnings}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {t('monthlyEarnings')}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                        {story.stats.growth}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {t('growth')}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
                        {story.stats.time}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {t('timeframe')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Results