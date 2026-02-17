
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#/' },
    { name: 'Sobre', href: '#/sobre' },
    { name: 'Eventos', href: '#/eventos' },
    { name: 'Galeria', href: '#/galeria' },
    { name: 'Depoimentos', href: '#/depoimentos' },
    { name: 'Contato', href: '#/contato' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#/" className="flex flex-col items-center">
          <span className={`text-2xl font-serif tracking-widest font-bold transition-colors ${isScrolled ? 'gold-text' : 'text-white'}`}>AURUM</span>
          <span className={`text-[10px] tracking-[0.3em] -mt-1 transition-colors ${isScrolled ? 'text-gray-500' : 'text-white/80'}`}>VENUES</span>
        </a>

        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xs uppercase tracking-widest font-medium transition-colors hover:text-[#B08D46] ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <button className={`p-2 transition-colors ${isScrolled ? 'text-gray-600' : 'text-white'} hover:text-[#B08D46]`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </button>
          <a href="#/contato" className="hidden lg:block bg-[#B08D46] text-white px-5 py-2 text-xs uppercase tracking-widest hover:bg-[#92753a] transition-all">
            Agendar Visita
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
