
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

console.log("🚀 Fazenda Vitória Francisco: Iniciando aplicação...");

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("❌ Erro Crítico: Elemento root não encontrado no DOM.");
} else {
  try {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("✅ Fazenda Vitória Francisco: Aplicação montada com sucesso.");
  } catch (err) {
    console.error("💥 Erro fatal durante a montagem do React:", err);
  }
}
