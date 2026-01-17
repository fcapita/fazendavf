
export enum Category {
  AVICULTURA = 'Avicultura',
  AGRICULTURA = 'Agricultura',
  SUINOCULTURA = 'Suinocultura',
  IMPORTACAO = 'Importação'
}

export interface Product {
  id: string;
  name: string;
  category: Category;
  description: string;
  longDescription?: string;
  specifications?: string[];
  features?: string[];
  price?: string;
  image: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
}

export interface Order {
  id: string;
  customer: string;
  product: string;
  quantity: number;
  status: 'Pendente' | 'Processando' | 'Enviado' | 'Concluído';
  date: string;
  total: number;
}
