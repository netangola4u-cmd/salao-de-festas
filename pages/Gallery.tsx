
import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../constants';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('Todos');
  const categories = ['Todos', 'Casamentos', 'Corporativo', 'Catering', 'Decoração'];

  const filteredItems = filter === 'Todos' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif gold-text mb-6">Galeria de Inspirações</h1>
          <p className="text-gray-500 font-light">Explore cada ângulo da sofisticação Aurum Venues.</p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-xs uppercase tracking-[0.2em] pb-1 transition-all border-b-2 ${filter === cat ? 'gold-border gold-text' : 'border-transparent text-gray-400 hover:text-gray-800'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-like Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden bg-white shadow-sm aspect-square md:aspect-[3/4]">
              <img 
                src={item.url} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-center p-6">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.4em] text-[#B08D46] mb-2 block">{item.category}</span>
                  <h3 className="text-white text-2xl font-serif">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Placeholder */}
        <div className="mt-16 text-center">
          <button className="border border-[#B08D46] gold-text px-10 py-4 text-xs uppercase tracking-widest hover:gold-bg hover:text-white transition-all">
            Ver Mais Fotos no Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
