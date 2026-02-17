
import React from 'react';
import { BRAND_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center md:text-left">
          <div>
            <h3 className="text-xl font-serif gold-text mb-6 tracking-widest uppercase">{BRAND_NAME}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Onde cada detalhe é planejado para superar as mais altas expectativas. Transformamos celebrações em legados.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              {/* Social icons placeholder */}
              <div className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center hover:bg-[#B08D46] hover:border-[#B08D46] transition-all cursor-pointer">
                <span className="text-xs">IG</span>
              </div>
              <div className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center hover:bg-[#B08D46] hover:border-[#B08D46] transition-all cursor-pointer">
                <span className="text-xs">FB</span>
              </div>
              <div className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center hover:bg-[#B08D46] hover:border-[#B08D46] transition-all cursor-pointer">
                <span className="text-xs">IN</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] font-semibold mb-6">Contato</h4>
            <ul className="text-gray-400 text-sm space-y-4">
              <li>Av. Paulista, 1234, São Paulo, SP</li>
              <li>Telefone: (11) 9876-5432</li>
              <li>Email: contato@aurumvenues.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] font-semibold mb-6">Newsletter Exclusiva</h4>
            <p className="text-gray-400 text-xs mb-4">Receba tendências de eventos e convites para nossos showrooms.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="bg-transparent border border-gray-700 px-4 py-2 text-xs w-full focus:outline-none focus:border-[#B08D46]"
              />
              <button className="bg-[#B08D46] px-4 py-2 text-xs uppercase font-bold hover:bg-[#92753a]">Enviar</button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-10 text-center">
          <p className="text-gray-500 text-[10px] uppercase tracking-widest">
            © 2024 {BRAND_NAME}. Todos os direitos reservados. Design para excelência.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
