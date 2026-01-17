
import React, { useState, useEffect } from 'react';
import { MOCK_PRODUCTS } from '../constants';
import { Category, Product } from '../types';
import { Search, ShoppingCart, Info, X, CheckCircle2, MessageSquare, Truck } from 'lucide-react';

const Importacao: React.FC = () => {
  const [filter, setFilter] = useState<string>('Todos');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  const categories = ['Todos', 'Fertilizantes', 'Sementes', 'Maquinaria', 'Implementos'];

  const filteredProducts = MOCK_PRODUCTS.filter(p => p.category === Category.IMPORTACAO);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProduct]);

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
            <div 
              key={product.id} 
              onClick={() => setSelectedProduct(product)}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 ease-out group cursor-pointer"
            >
              <div className="h-56 overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/90 text-[#4A5D23] px-4 py-2 rounded-full font-bold text-sm">Ver Detalhes</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-[#2D3B16]">{product.name}</h3>
                  <span className="bg-[#F0F4E8] text-[#4A5D23] text-[10px] font-black uppercase px-2 py-1 rounded">Disponível</span>
                </div>
                <p className="text-gray-500 text-sm mb-6 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-[#DAA520] font-bold">Sob Consulta</span>
                  <div className="bg-[#4A5D23] text-white p-3 rounded-xl hover:bg-[#2D3B16] transition-colors shadow-lg active:scale-95 transition-transform">
                    <Info className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Product Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
              onClick={() => setSelectedProduct(null)}
            />
            
            <div className="bg-white w-full max-w-5xl max-h-[90vh] rounded-[40px] shadow-2xl relative z-10 overflow-hidden flex flex-col md:flex-row animate-[scale-up_0.3s_ease-out]">
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 p-2 bg-white/80 backdrop-blur-md rounded-full text-gray-800 hover:text-red-600 transition-colors z-20 shadow-lg"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image Section */}
              <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden bg-gray-100">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto bg-white flex flex-col">
                <div className="mb-8">
                  <span className="bg-[#F0F4E8] text-[#4A5D23] text-xs font-black uppercase px-3 py-1 rounded-full mb-4 inline-block">
                    {selectedProduct.category}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#2D3B16] mb-4">{selectedProduct.name}</h2>
                  <p className="text-[#DAA520] text-xl font-bold mb-6">Preço Sob Consulta</p>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    {selectedProduct.longDescription || selectedProduct.description}
                  </p>

                  {/* Highlights/Features */}
                  {selectedProduct.features && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {selectedProduct.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-sm text-gray-700">
                          <CheckCircle2 className="w-5 h-5 text-[#4A5D23] mr-2 shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Technical Specs */}
                  {selectedProduct.specifications && (
                    <div className="bg-[#F8F9FA] rounded-2xl p-6 mb-8">
                      <h4 className="text-[#2D3B16] font-bold mb-4 uppercase text-xs tracking-widest">Especificações Técnicas</h4>
                      <div className="space-y-3">
                        {selectedProduct.specifications.map((spec, i) => (
                          <div key={i} className="flex justify-between text-sm border-b border-gray-200 pb-2 last:border-0 last:pb-0">
                            <span className="text-gray-500">{spec.split(':')[0]}</span>
                            <span className="font-semibold text-[#4A5D23]">{spec.split(':')[1]}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="mt-auto flex flex-col sm:flex-row gap-4">
                  <a 
                    href={`https://wa.me/244923000000?text=Olá, tenho interesse no produto: ${selectedProduct.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#25D366] text-white py-4 rounded-2xl font-bold text-center flex items-center justify-center hover:bg-[#128C7E] transition-all shadow-lg active:scale-95"
                  >
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Cotar via WhatsApp
                  </a>
                  <button 
                    className="flex-1 bg-[#4A5D23] text-white py-4 rounded-2xl font-bold flex items-center justify-center hover:bg-[#2D3B16] transition-all shadow-lg active:scale-95"
                    onClick={() => {
                      alert(`Solicitação de cotação para ${selectedProduct.name} enviada ao setor comercial.`);
                      setSelectedProduct(null);
                    }}
                  >
                    <Truck className="w-5 h-5 mr-2" />
                    Solicitar Entrega
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

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
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Formulário enviado com sucesso!'); }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Nome</label>
                  <input required type="text" className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#4A5D23]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Empresa/Fazenda</label>
                  <input required type="text" className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#4A5D23]" />
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
              <button type="submit" className="w-full bg-[#DAA520] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#C0941C] transition-all shadow-lg">
                Enviar Solicitação
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scale-up {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default Importacao;
