
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

// Simple Hash-based Router implementation
const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    const path = currentPath.split('/')[1] || '';
    
    switch (path) {
      case '':
        return <Home />;
      case 'eventos':
        return <Events />;
      case 'galeria':
        return <Gallery />;
      case 'contato':
        return <Contact />;
      case 'sobre':
        return (
          <div className="pt-32 pb-20 px-6 min-h-screen bg-[#FDFBF7]">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-serif gold-text mb-8">Nossa História</h1>
              <p className="text-gray-600 font-light text-lg leading-relaxed mb-12">
                A Aurum Venues nasceu de uma paixão por criar momentos inesquecíveis. Localizado no coração de São Paulo, nosso espaço combina a majestade da arquitetura clássica com o dinamismo das necessidades modernas.
              </p>
              <img src="https://picsum.photos/id/160/1200/600" alt="Espaço" className="w-full h-[400px] object-cover mb-12" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                <div>
                  <h3 className="text-2xl font-serif mb-4">Missão</h3>
                  <p className="text-sm text-gray-500 font-light">Prover um cenário de excelência onde sonhos e metas se encontram, através de infraestrutura impecável e atendimento personalizado.</p>
                </div>
                <div>
                  <h3 className="text-2xl font-serif mb-4">Visão</h3>
                  <p className="text-sm text-gray-500 font-light">Ser a referência máxima em venues de luxo na América Latina, celebrando a diversidade de eventos com o mesmo padrão de ouro.</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'depoimentos':
        return (
          <div className="pt-32 pb-20 px-6 min-h-screen bg-[#FDFBF7]">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-5xl font-serif gold-text mb-6">O que dizem sobre nós</h1>
                <p className="text-gray-500 font-light">Histórias reais de quem viveu a experiência Aurum.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-white p-12 shadow-sm border border-gray-100">
                       <div className="flex items-center space-x-4 mb-6">
                          <img src={`https://picsum.photos/id/${i+50}/100/100`} className="w-16 h-16 rounded-full object-cover grayscale" />
                          <div>
                             <h4 className="font-serif text-lg">Cliente Satisfeito {i}</h4>
                             <span className="text-[10px] uppercase tracking-widest text-[#B08D46]">Evento realizado em 2023</span>
                          </div>
                       </div>
                       <p className="text-gray-600 italic font-light leading-relaxed">
                          "O serviço foi impecável do início ao fim. A equipe da Aurum Venues entendeu perfeitamente nossa visão e entregou um evento que nossos convidados ainda comentam meses depois."
                       </p>
                    </div>
                 ))}
              </div>
            </div>
          </div>
        );
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
