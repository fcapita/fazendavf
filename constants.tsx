
import { Category, Product, NewsItem, Order } from './types';

export const COLORS = {
  mossGreen: '#4A5D23',
  gold: '#DAA520',
  lightGray: '#F8F9FA',
  darkGreen: '#2D3B16',
};

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Ovos Caipira Extra',
    category: Category.AVICULTURA,
    description: 'Ovos frescos produzidos com alimentação 100% natural.',
    image: 'https://images.unsplash.com/photo-1582733315328-d46ed997e72b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    name: 'Fertilizante NPK 15-15-15',
    category: Category.IMPORTACAO,
    description: 'Insumo de alta qualidade importado da Europa para solos tropicais.',
    price: 'Sob Consulta',
    image: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    name: 'Matrizes Suínas (Genética F1)',
    category: Category.SUINOCULTURA,
    description: 'Leitões de alta linhagem para melhoria de plantel.',
    image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    name: 'Milho Híbrido de Grão',
    category: Category.AGRICULTURA,
    description: 'Produção em larga escala com técnicas de agricultura de precisão.',
    image: 'https://images.unsplash.com/photo-1551730459-92db2a308d6a?auto=format&fit=crop&q=80&w=800'
  }
];

export const MOCK_NEWS: NewsItem[] = [
  {
    id: '1',
    title: 'Modernização da Avicultura em Angola',
    date: '15 Mai, 2024',
    excerpt: 'Como a Fazenda Vitória Francisco está liderando a transição para aviários automatizados.',
    image: 'https://images.unsplash.com/photo-1518398046578-8cca57732e17?auto=format&fit=crop&q=80&w=800',
    category: 'Avicultura'
  },
  {
    id: '2',
    title: 'Guia de Fertilização Sazonal',
    date: '10 Mai, 2024',
    excerpt: 'Dicas práticas para maximizar a colheita de milho e soja no clima angolano.',
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800',
    category: 'Agricultura'
  }
];

export const MOCK_ORDERS: Order[] = [
  { id: 'FV-001', customer: 'Cooperativa Agrícola do Huambo', product: 'Fertilizante NPK', quantity: 200, status: 'Processando', date: '2024-05-18', total: 45000 },
  { id: 'FV-002', customer: 'Talho Luanda Prime', product: 'Meia Carcaça Suína', quantity: 15, status: 'Pendente', date: '2024-05-19', total: 12500 },
  { id: 'FV-003', customer: 'Supermercado Kero', product: 'Ovos Extra (Dúzia)', quantity: 500, status: 'Concluído', date: '2024-05-15', total: 8000 },
];
