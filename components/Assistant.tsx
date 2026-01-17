
import React, { useState } from 'react';
import { MessageSquare, Send, X, Bot } from 'lucide-react';
import { askAssistant } from '../services/geminiService';

const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'Olá! Sou o assistente da Fazenda Vitória Francisco. Como posso ajudar com sua produção hoje?' }
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const response = await askAssistant(userMsg);
    setMessages(prev => [...prev, { role: 'bot', text: response }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#DAA520] hover:bg-[#C0941C] text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center space-x-2"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="hidden sm:inline font-semibold">Dúvida no campo?</span>
        </button>
      )}

      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-80 sm:w-96 border border-gray-200 overflow-hidden flex flex-col max-h-[500px]">
          <div className="bg-[#4A5D23] p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2 text-white">
              <Bot className="w-5 h-5" />
              <span className="font-bold">Assistente Agrícola</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' ? 'bg-[#DAA520] text-white' : 'bg-gray-100 text-gray-800'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-3 rounded-2xl text-sm animate-pulse text-gray-500">
                  Pensando...
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-gray-100 flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Pergunte sobre plantio, criação..."
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#4A5D23]"
            />
            <button
              onClick={handleSend}
              className="bg-[#4A5D23] text-white p-2 rounded-lg hover:bg-[#2D3B16] transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Assistant;
