import React from 'react'
import { mediaConfig } from '../config/media'

const Models = () => {
  const modelData = mediaConfig.models;

  return (
    <section id="models" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Top Models</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modelData.map((model, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={model.image} 
                alt={model.name} 
                className="w-full h-64 object-cover" 
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{model.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Models