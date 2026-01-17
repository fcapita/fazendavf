
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Assistant from './components/Assistant';
import Home from './pages/Home';
import Importacao from './pages/Importacao';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans selection:bg-[#DAA520] selection:text-white">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/importacao" element={<Importacao />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Outras rotas seriam similares, usando o mesmo padrão visual */}
            <Route path="/avicultura" element={<div className="p-20 text-center"><h1 className="text-4xl font-bold">Página em Construção: Avicultura</h1><p className="mt-4">Foco em produção de frangos e ovos em Angola.</p></div>} />
            <Route path="/agricultura" element={<div className="p-20 text-center"><h1 className="text-4xl font-bold">Página em Construção: Agricultura</h1><p className="mt-4">Inovações em milho e soja sazonais.</p></div>} />
            <Route path="/suinocultura" element={<div className="p-20 text-center"><h1 className="text-4xl font-bold">Página em Construção: Suinocultura</h1><p className="mt-4">Genética de alta performance.</p></div>} />
          </Routes>
        </main>
        
        {/* Footer */}
        <footer id="contato" className="bg-[#2D3B16] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              <div className="col-span-1 lg:col-span-1">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="bg-[#DAA520] p-1.5 rounded">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold">Fazenda Vitória <span className="text-[#DAA520]">Francisco</span></h2>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Transformando o setor agrícola em Angola com inovação, ética e compromisso com o produtor.
                </p>
                <div className="flex space-x-4">
                  {/* Social Icons Placeholder */}
                  <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#DAA520] transition-colors cursor-pointer border border-white/10">FB</div>
                  <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#DAA520] transition-colors cursor-pointer border border-white/10">IG</div>
                  <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#DAA520] transition-colors cursor-pointer border border-white/10">LI</div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-6 text-[#DAA520] uppercase tracking-wider">Páginas</h3>
                <ul className="space-y-4 text-gray-400">
                  <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                  <li><a href="/#/avicultura" className="hover:text-white transition-colors">Avicultura</a></li>
                  <li><a href="/#/agricultura" className="hover:text-white transition-colors">Agricultura</a></li>
                  <li><a href="/#/importacao" className="hover:text-white transition-colors">Importação de Insumos</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-6 text-[#DAA520] uppercase tracking-wider">Legal</h3>
                <ul className="space-y-4 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Licenças Agrícolas</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-6 text-[#DAA520] uppercase tracking-wider">Contato</h3>
                <ul className="space-y-4 text-gray-400">
                  <li className="flex items-start">
                    <span className="mr-3 text-[#DAA520]">📍</span>
                    Estrada Nacional, Km 12, Huambo, Angola
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-[#DAA520]">📞</span>
                    +244 923 000 000
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-[#DAA520]">✉️</span>
                    contato@vitoriafrancisco.ao
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="pt-8 border-t border-white/10 text-center text-sm text-gray-500">
              <p>© {new Date().getFullYear()} Fazenda Vitória Francisco. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>

        <Assistant />
      </div>
    </Router>
  );
};

export default App;
