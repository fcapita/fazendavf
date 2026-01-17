
import React, { useState } from 'react';
import { MOCK_PRODUCTS } from '../constants';
import { Category } from '../types';
import { Search, ShoppingCart, Info } from 'lucide-react';

const Importacao: React.FC = () => {
  const [filter, setFilter] = useState<string>('Todos');
  
  const categories = ['Todos', 'Fertilizantes', 'Sementes', 'Maquinaria', 'Implementos'];

  const filteredProducts = MOCK_PRODUCTS.filter(p => p.category === Category.IMPORTACAO);

  return (
    <div className="bg-[#F8F9FA] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <span className="text-[#DAA520] font-bold uppercase tracking-[0.2em]">Soluções Globais</span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D3B16] mt-4 mb-6">Importação de Insumos</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Garantimos o acesso às melhores tecnologias agrícolas do mundo para o produtor angolano, com logística eficiente e suporte técnico.
          </p>
        </header>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <div className="flex bg-white p-1 rounded-xl shadow-sm border border-gray-100 overflow-x-auto max-w-full">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
                  filter === cat ? 'bg-[#4A5D23] text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar insumo..."
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4A5D23]"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-[#2D3B16]">{product.name}</h3>
                  <span className="bg-[#F0F4E8] text-[#4A5D23] text-[10px] font-black uppercase px-2 py-1 rounded">Disponível</span>
                </div>
                <p className="text-gray-500 text-sm mb-6 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-[#DAA520] font-bold">Sob Consulta</span>
                  <button className="bg-[#4A5D23] text-white p-3 rounded-xl hover:bg-[#2D3B16] transition-colors shadow-lg">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quote Form */}
        <div className="mt-24 bg-white rounded-[40px] shadow-xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
          <div className="lg:w-1/2 bg-[#4A5D23] p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">Solicite um Orçamento Personalizado</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Nossa equipe comercial está pronta para oferecer as melhores condições de importação direta para sua fazenda ou cooperativa.
            </p>
            <ul className="space-y-4">
              {[
                'Logística integrada em toda Angola',
                'Consultoria técnica de aplicação',
                'Preços competitivos direto do fabricante',
                'Flexibilidade de pagamento'
              ].map((item, i) => (
                <li key={i} className="flex items-center">
                  <div className="bg-[#DAA520] rounded-full p-1 mr-3">
                    <Info className="w-3 h-3 text-white" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2 p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Nome</label>
                  <input type="text" className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#4A5D23]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Empresa/Fazenda</label>
                  <input type="text" className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#4A5D23]" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Produto de Interesse</label>
                <select className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#4A5D23] appearance-none">
                  <option>Fertilizantes NPK</option>
                  <option>Sementes de Milho/Soja</option>
                  <option>Maquinaria Pesada</option>
                  <option>Sistemas de Irrigação</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Mensagem/Detalhes</label>
                <textarea rows={4} className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#4A5D23]"></textarea>
              </div>
              <button className="w-full bg-[#DAA520] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#C0941C] transition-all shadow-lg">
                Enviar Solicitação
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Importacao;
