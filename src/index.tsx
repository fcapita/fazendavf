
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

console.log("🚀 Fazenda Vitória Francisco: Iniciando aplicação...");

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
} else {
  console.error("❌ Erro Crítico: Elemento root não encontrado.");
}
