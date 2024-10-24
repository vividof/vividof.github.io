import React, { useState } from 'react'
import JoinUsForm from './JoinUsForm'
import { useLanguage } from '../contexts/LanguageContext'

const Home = () => {
  const [showJoinUsForm, setShowJoinUsForm] = useState(false);
  const { t } = useLanguage();

  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          alt="Model on runway"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">{t('welcomeToVivid')}</h1>
        <p className="text-xl mb-8">{t('discoverTopTalent')}</p>
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