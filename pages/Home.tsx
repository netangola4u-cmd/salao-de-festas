
import React from 'react';
import { EVENT_CATEGORIES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
            alt="Venue Hero" 
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-serif mb-8 leading-tight animate-fade-in">
            Onde grandes histórias ganham um cenário <span className="italic">extraordinário</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-light mb-12 tracking-widest uppercase">
            Sofisticação • Exclusividade • Emoção
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a href="#/contato" className="bg-[#B08D46] text-white px-10 py-4 text-sm uppercase tracking-widest hover:bg-[#92753a] transition-all border border-[#B08D46]">
              Agendar Visita Exclusiva
            </a>
            <a href="#/eventos" className="bg-transparent text-white px-10 py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all border border-white">
              Conhecer o Espaço
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </div>
      </section>

      {/* Versatility Section */}
      <section className="py-32 px-6 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif gold-text mb-6">Versatilidade Excepcional</h2>
            <div className="w-24 h-[1px] bg-[#B08D46] mx-auto mb-8"></div>
            <p className="max-w-2xl mx-auto text-gray-600 font-light leading-relaxed">
              De casamentos luxuosos a eventos corporativos de alto nível, nosso espaço foi projetado para se adaptar perfeitamente a cada visão, garantindo impecabilidade em cada detalhe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EVENT_CATEGORIES.slice(0, 2).map((item) => (
              <div key={item.id} className="group relative overflow-hidden h-[500px] cursor-pointer">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-12 text-white">
                  <h3 className="text-3xl font-serif mb-2">{item.title}</h3>
                  <p className="text-sm font-light mb-6 opacity-90">{item.subtitle}</p>
                  <a href={`#/eventos/${item.id}`} className="text-xs uppercase tracking-[0.3em] font-bold border-b border-white w-fit pb-1 hover:border-[#B08D46] hover:text-[#B08D46] transition-colors">
                    Ver Detalhes
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-3xl font-serif gold-text mb-16 tracking-widest uppercase">Nossos Serviços Exclusivos</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: '📅', title: 'Planejamento', desc: 'Assessoria completa de ponta a ponta.' },
              { icon: '🍽️', title: 'Catering Premium', desc: 'Gastronomia assinada por chefs renomados.' },
              { icon: '✨', title: 'Decoração', desc: 'Projetos autorais e personalizados.' },
              { icon: '💻', title: 'Tecnologia', desc: 'Infraestrutura audiovisual de última geração.' },
            ].map((service, i) => (
              <div key={i} className="text-center p-8 border border-gray-50 hover:border-[#B08D46] transition-all group">
                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300 inline-block">{service.icon}</div>
                <h4 className="font-serif text-xl mb-2">{service.title}</h4>
                <p className="text-xs text-gray-500 font-light">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / Infrastructure Callout */}
      <section className="py-20 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          <div>
            <div className="text-4xl font-serif gold-text mb-2">800</div>
            <div className="text-[10px] uppercase tracking-widest text-gray-400">Capacidade Máxima</div>
          </div>
          <div>
            <div className="text-4xl font-serif gold-text mb-2">1200m²</div>
            <div className="text-[10px] uppercase tracking-widest text-gray-400">Espaço Total</div>
          </div>
          <div>
            <div className="text-4xl font-serif gold-text mb-2">150+</div>
            <div className="text-[10px] uppercase tracking-widest text-gray-400">Vagas Estacionamento</div>
          </div>
          <div>
            <div className="text-4xl font-serif gold-text mb-2">100%</div>
            <div className="text-[10px] uppercase tracking-widest text-gray-400">Climatizado</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
