import React, { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import FAQList from './FAQList'

const FAQ = () => {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: t('faqQuestion1'),
      answer: t('faqAnswer1')
    },
    {
      question: t('faqQuestion2'),
      answer: t('faqAnswer2')
    },
    {
      question: t('faqQuestion3'),
      answer: t('faqAnswer3')
    },
    {
      question: t('faqQuestion4'),
      answer: t('faqAnswer4')
    },
    {
      question: t('faqQuestion5'),
      answer: t('faqAnswer5')
    }
  ]

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          {t('faqTitle')}
        </h2>
        <FAQList
          faqs={faqs}
          openIndex={openIndex}
          onToggle={handleToggle}
        />
      </div>
    </section>
  )
}

export default FAQ