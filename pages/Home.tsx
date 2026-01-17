
import React from 'react';
import { ArrowRight, ChevronRight, Truck, Microscope, Beef, Bird, Wheat } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MOCK_NEWS, MOCK_PRODUCTS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000"
            alt="Fazenda"
            className="w-full h-full object-cover brightness-[0.4]"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 max-w-3xl leading-tight">
            Cultivando o Futuro de <span className="text-[#DAA520]">Angola</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-200">
            Referência em Avicultura, Agricultura e Inovação no campo. Unindo tradição e tecnologia para alimentar nações.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/importacao" className="bg-[#DAA520] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#C0941C] transition-all flex items-center justify-center">
              Ver Catálogo de Insumos <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link to="/sobre" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center">
              Nossa História
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2D3B16] mb-4">Nossos Pilares de Atuação</h2>
            <div className="w-24 h-1 bg-[#DAA520] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Avicultura', icon: <Bird className="w-10 h-10" />, desc: 'Produção de larga escala de frangos e ovos premium.', path: '/avicultura' },
              { title: 'Agricultura', icon: <Wheat className="w-10 h-10" />, desc: 'Grãos e cultivos sazonais com alta produtividade.', path: '/agricultura' },
              { title: 'Suinocultura', icon: <Beef className="w-10 h-10" />, desc: 'Genética de ponta e manejo humanizado.', path: '/suinocultura' },
              { title: 'Importação', icon: <Truck className="w-10 h-10" />, desc: 'Insumos globais para o produtor local.', path: '/importacao' },
            ].map((pillar) => (
              <Link
                key={pillar.title}
                to={pillar.path}
                className="group p-8 bg-[#F8F9FA] rounded-2xl border border-gray-100 hover:border-[#4A5D23] hover:shadow-xl transition-all"
              >
                <div className="text-[#4A5D23] mb-6 group-hover:scale-110 transition-transform">{pillar.icon}</div>
                <h3 className="text-2xl font-bold text-[#2D3B16] mb-4">{pillar.title}</h3>
                <p className="text-gray-600 mb-6">{pillar.desc}</p>
                <span className="text-[#4A5D23] font-semibold flex items-center group-hover:translate-x-2 transition-transform">
                  Saiba mais <ChevronRight className="ml-1 w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights / News */}
      <section className="py-20 bg-[#4A5D23] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">Notícias do Campo</h2>
              <p className="text-gray-300">Atualizações sobre nossas produções e o mercado agrícola.</p>
            </div>
            <Link to="/noticias" className="hidden md:flex items-center text-[#DAA520] font-bold hover:underline">
              Ver todas <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {MOCK_NEWS.map((item) => (
              <div key={item.id} className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 flex flex-col md:flex-row">
                <div className="w-full md:w-48 h-48">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex-1">
                  <span className="text-[#DAA520] text-sm font-bold uppercase tracking-widest">{item.category}</span>
                  <h3 className="text-2xl font-bold mt-2 mb-3 leading-tight">{item.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{item.excerpt}</p>
                  <Link to={`/noticias/${item.id}`} className="inline-flex items-center text-white hover:text-[#DAA520] transition-colors">
                    Ler artigo <ChevronRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F8F9FA] rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between">
            <div className="max-w-xl mb-8 md:mb-0">
              <h2 className="text-4xl font-bold text-[#2D3B16] mb-6">Precisa de Insumos Agrícolas de Alta Qualidade?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Importamos fertilizantes, sementes e equipamentos das melhores marcas mundiais para garantir sua produtividade.
              </p>
              <div className="flex gap-4">
                <a href="https://wa.me/244000000000" className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold flex items-center hover:bg-[#128C7E] transition-colors shadow-lg">
                  Chamar no WhatsApp
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&q=80&w=800"
                alt="Insumos"
                className="w-full max-w-sm rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <p className="text-[#4A5D23] font-black text-3xl">100%</p>
                <p className="text-xs text-gray-500 font-bold uppercase">Garantia de Qualidade</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
