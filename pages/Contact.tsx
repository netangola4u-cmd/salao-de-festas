
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 min-h-screen bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Contact Info */}
          <div>
            <h1 className="text-5xl font-serif gold-text mb-8">Vamos planejar algo <span className="italic">extraordinário?</span></h1>
            <p className="text-gray-600 font-light text-lg mb-12 leading-relaxed">
              Agende uma visita guiada exclusiva e descubra como a Aurum Venues pode elevar o nível da sua celebração ou evento corporativo.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 flex items-center justify-center bg-white shadow-sm gold-text text-xl">📍</div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold mb-1">Localização</h4>
                  <p className="text-gray-500 text-sm">Av. Paulista, 1234 - Bela Vista, São Paulo/SP</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 flex items-center justify-center bg-white shadow-sm gold-text text-xl">📞</div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold mb-1">Telefone / WhatsApp</h4>
                  <p className="text-gray-500 text-sm">(11) 9876-5432</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 flex items-center justify-center bg-white shadow-sm gold-text text-xl">✉️</div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold mb-1">E-mail</h4>
                  <p className="text-gray-500 text-sm">contato@aurumvenues.com</p>
                </div>
              </div>
            </div>

            <div className="mt-16 h-64 bg-gray-200 grayscale contrast-125 border border-gray-100 overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-400 text-xs uppercase tracking-[0.5em]">Mapa Interativo Aurum</span>
              </div>
              <img src="https://picsum.photos/id/10/800/400?blur=2" alt="Map mockup" className="w-full h-full object-cover opacity-50" />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 md:p-16 shadow-2xl border-t-4 gold-border relative">
            <h3 className="text-2xl font-serif mb-8">Solicite uma Proposta</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-gray-400 block mb-2">Nome Completo</label>
                  <input type="text" className="w-full bg-gray-50 border-b border-gray-200 p-3 text-sm focus:outline-none focus:border-[#B08D46]" placeholder="Seu nome" />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-gray-400 block mb-2">E-mail</label>
                  <input type="email" className="w-full bg-gray-50 border-b border-gray-200 p-3 text-sm focus:outline-none focus:border-[#B08D46]" placeholder="seu@email.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-gray-400 block mb-2">Tipo de Evento</label>
                  <select className="w-full bg-gray-50 border-b border-gray-200 p-3 text-sm focus:outline-none focus:border-[#B08D46]">
                    <option>Casamento</option>
                    <option>Evento Corporativo</option>
                    <option>Noivado</option>
                    <option>Evento Privado</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-gray-400 block mb-2">Data Pretendida</label>
                  <input type="date" className="w-full bg-gray-50 border-b border-gray-200 p-3 text-sm focus:outline-none focus:border-[#B08D46]" />
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-widest text-gray-400 block mb-2">Estimativa de Convidados</label>
                <input type="number" className="w-full bg-gray-50 border-b border-gray-200 p-3 text-sm focus:outline-none focus:border-[#B08D46]" placeholder="Ex: 200" />
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-widest text-gray-400 block mb-2">Mensagem / Observações</label>
                <textarea rows={4} className="w-full bg-gray-50 border-b border-gray-200 p-3 text-sm focus:outline-none focus:border-[#B08D46]" placeholder="Conte-nos um pouco sobre sua ideia..."></textarea>
              </div>

              <button type="submit" className="w-full bg-[#B08D46] text-white py-5 text-sm uppercase tracking-[0.3em] font-bold hover:bg-[#92753a] transition-all shadow-lg">
                Enviar Mensagem
              </button>
            </form>

            <p className="mt-8 text-center text-[10px] text-gray-400 uppercase tracking-widest">
              Entraremos em contato em até 24 horas úteis.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
