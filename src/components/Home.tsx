import React, { useState } from 'react'
import JoinUsForm from './JoinUsForm'
import { useLanguage } from '../contexts/LanguageContext'
import { mediaConfig } from '../config/media'

const Home = () => {
  const [showJoinUsForm, setShowJoinUsForm] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const { t } = useLanguage();

  const handleVideoError = () => {
    setVideoFailed(true);
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        {!videoFailed ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            onError={handleVideoError}
            poster={mediaConfig.home.fallbackImage}
          >
            <source src={mediaConfig.home.backgroundVideo} type="video/mp4" />
          </video>
        ) : (
          <img
            src={mediaConfig.home.fallbackImage}
            alt="Model on runway"
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">{t('welcomeToVivid')}</h1>
        <div className="space-x-4">
          <button
            onClick={() => setShowJoinUsForm(true)}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition duration-300"
          >
            {t('joinUs')}
          </button>
          <a href="#about" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">
            {t('learnMore')}
          </a>
        </div>
      </div>
      {showJoinUsForm && <JoinUsForm onClose={() => setShowJoinUsForm(false)} />}
    </section>
  )
}

export default Home