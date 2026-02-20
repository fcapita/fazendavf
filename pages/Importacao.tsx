
import React, { useState, useEffect } from 'react';
import { MOCK_PRODUCTS } from '../constants';
import { Category, Product } from '../types';
import { Search, Info, X, CheckCircle2, MessageSquare, Truck } from 'lucide-react';

const Importacao: React.FC = () => {
  const [filter, setFilter] = useState<string>('Todos');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = ['Todos', 'Fertilizantes', 'Sementes', 'Maquinaria', 'Implementos'];

  const filteredProducts = MOCK_PRODUCTS.filter(p => {
    const matchesCategory = Category.IMPORTACAO === p.category;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const nome = formData.get('nome') as string;
    
    // Validação simples de segurança contra injeção de script
    if (/[<>]/.test(nome)) {
      alert('Por favor, utilize apenas caracteres válidos no nome.');
      return;
    }

    alert('Solicitação enviada com sucesso! Nossa equipe entrará em contato.');
    e.currentTarget.reset();
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <span className="text-brand-gold font-bold uppercase tracking-widest">Soluções Globais</span>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mt-4 mb-6">Importação de Insumos</h1>
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
                  filter === cat ? 'bg-brand-moss text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar insumo..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value.slice(0, 50))} // Limite de busca para performance/segurança
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-moss"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <div 
              key={product.id} 
              onClick={() => setSelectedProduct(product)}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
            >
              <div className="h-56 overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white bg-opacity-90 text-brand-moss px-4 py-2 rounded-full font-bold text-sm">Ver Detalhes</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-brand-dark">{product.name}</h3>
                  <span className="bg-green-50 text-brand-moss text-xs font-black uppercase px-2 py-1 rounded">Disponível</span>
                </div>
                <p className="text-gray-500 text-sm mb-6 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-brand-gold font-bold">Sob Consulta</span>
                  <div className="bg-brand-moss text-white p-3 rounded-xl hover:bg-brand-dark transition-colors shadow-lg">
                    <Info className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Product Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <div 
              className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm transition-opacity" 
              onClick={() => setSelectedProduct(null)}
            />
            
            <div className="bg-white w-full max-w-5xl max-h-[90vh] rounded-3xl shadow-2xl relative z-10 overflow-hidden flex flex-col md:flex-row animate-scale-up">
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 p-2 bg-white bg-opacity-80 rounded-full text-gray-800 hover:text-red-600 transition-colors z-20 shadow-lg"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden bg-gray-100">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto bg-white flex flex-col">
                <div className="mb-8">
                  <span className="bg-green-50 text-brand-moss text-xs font-black uppercase px-3 py-1 rounded-full mb-4 inline-block">
                    {selectedProduct.category}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">{selectedProduct.name}</h2>
                  <p className="text-brand-gold text-xl font-bold mb-6">Preço Sob Consulta</p>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    {selectedProduct.longDescription || selectedProduct.description}
                  </p>

                  {selectedProduct.features && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {selectedProduct.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-sm text-gray-700">
                          <CheckCircle2 className="w-5 h-5 text-brand-moss mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-auto flex flex-col sm:flex-row gap-4">
                  <a 
                    href={`https://wa.me/244923000000?text=Olá, tenho interesse no produto: ${encodeURIComponent(selectedProduct.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-500 text-white py-4 rounded-2xl font-bold text-center flex items-center justify-center hover:bg-green-600 transition-all shadow-lg transform active:scale-95"
                  >
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Cotar via WhatsApp
                  </a>
                  <button 
                    className="flex-1 bg-brand-moss text-white py-4 rounded-2xl font-bold flex items-center justify-center hover:bg-brand-dark transition-all shadow-lg transform active:scale-95"
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
        <div className="mt-24 bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
          <div className="lg:w-1/2 bg-brand-moss p-12 text-white">
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
                  <div className="bg-brand-gold rounded-full p-1 mr-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2 p-12">
            <form className="space-y-6" onSubmit={handleFormSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Nome</label>
                  <input name="nome" required type="text" maxLength={100} className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-brand-moss" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Empresa/Fazenda</label>
                  <input name="empresa" required type="text" maxLength={100} className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-brand-moss" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Produto de Interesse</label>
                <select name="produto" className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-brand-moss">
                  <option>Fertilizantes NPK</option>
                  <option>Sementes de Milho/Soja</option>
                  <option>Maquinaria Pesada</option>
                  <option>Sistemas de Irrigação</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Mensagem/Detalhes</label>
                <textarea name="mensagem" rows={4} maxLength={1000} className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-brand-moss"></textarea>
              </div>
              <button type="submit" className="w-full bg-brand-gold text-white py-4 rounded-xl font-bold text-lg hover:brightness-110 transition-all shadow-lg">
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
