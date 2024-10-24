import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FAQ = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: 'How do I get started with OnlyFans?',
      answer: 'Getting started is easy! Simply fill out our join form, and our team will guide you through the entire process, from account setup to content strategy.'
    },
    {
      question: 'What services do you provide for OnlyFans creators?',
      answer: 'We offer comprehensive services including content strategy, photography and videography, social media management, marketing campaigns, and personal coaching to help you reach the top 1%.'
    },
    {
      question: 'How long does it take to see results?',
      answer: 'While results vary, our proven strategies typically show significant growth within the first 30-60 days. We work closely with you to optimize your content and engagement for maximum success.'
    },
    {
      question: 'Do you help with content creation?',
      answer: 'Yes! We provide professional photography and videography services, content planning, and creative direction to ensure your content stands out and attracts subscribers.'
    },
    {
      question: 'What makes your agency different?',
      answer: 'We offer a full-service approach, handling everything from content creation to marketing. Our proven track record of helping creators reach the top 1% sets us apart.'
    }
  ];

  return (
    <section id="faq" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <span className="font-medium text-left dark:text-white">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-white dark:bg-gray-800 rounded-b-lg border-t dark:border-gray-700">
                  <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ