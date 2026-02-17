
import React from 'react';
import { EVENT_CATEGORIES } from '../constants';

const Events: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen">
      <section className="py-20 px-6 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.5em] text-gray-500 mb-4 block">Experiências</span>
            <h1 className="text-5xl md:text-6xl font-serif gold-text mb-6">Celebrações sob Medida</h1>
            <p className="max-w-3xl mx-auto text-gray-600 font-light text-lg">
              Na Aurum Venues, cada evento é tratado como uma obra de arte única. Conheça as possibilidades para o seu próximo grande momento.
            </p>
          </div>

          <div className="space-y-32">
            {EVENT_CATEGORIES.map((event, index) => (
              <div key={event.id} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                <div className="w-full lg:w-1/2 relative">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
                  </div>
                  <div className="absolute -bottom-6 -right-6 md:bottom-12 md:-right-12 bg-white p-8 shadow-xl hidden md:block">
                     <span className="text-3xl font-serif gold-text">0{index + 1}</span>
                  </div>
                </div>
                
                <div className="w-full lg:w-1/2">
                  <h2 className="text-4xl font-serif mb-4">{event.title}</h2>
                  <h3 className="text-lg gold-text italic mb-6 font-serif">{event.subtitle}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed font-light">
                    {event.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                    {event.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <span className="w-1.5 h-1.5 rounded-full gold-bg"></span>
                        <span className="text-sm text-gray-700 font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <a href="#/contato" className="inline-block bg-[#1A1A1A] text-white px-8 py-4 text-xs uppercase tracking-widest hover:bg-[#B08D46] transition-all">
                    {event.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Call to Action */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif mb-8 italic">"A infraestrutura necessária para o sucesso, o requinte exigido pela sua história."</h2>
          <div className="flex flex-wrap justify-center gap-10">
             <div className="flex flex-col items-center">
                <span className="text-xs uppercase tracking-widest text-gray-500 mb-2">Acústica</span>
                <span className="text-sm font-semibold">Tratamento Premium</span>
             </div>
             <div className="flex flex-col items-center">
                <span className="text-xs uppercase tracking-widest text-gray-500 mb-2">Cozinha</span>
                <span className="text-sm font-semibold">Industrial High-End</span>
             </div>
             <div className="flex flex-col items-center">
                <span className="text-xs uppercase tracking-widest text-gray-500 mb-2">Acessibilidade</span>
                <span className="text-sm font-semibold">Totalmente Adaptado</span>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
