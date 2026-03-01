
import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, Send, X, Bot, AlertCircle } from 'lucide-react';
import { askAssistant } from '../services/geminiService';

const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'bot' | 'error'; text: string }[]>([
    { role: 'bot', text: 'Olá! Sou o assistente da Fazenda Vitória Francisco. Como posso ajudar com sua produção hoje?' }
  ]);
  const [loading, setLoading] = useState(false);
  const isMounted = useRef(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    isMounted.current = true;
    if (isOpen) scrollToBottom();
    return () => {
      isMounted.current = false;
    };
  }, [isOpen, messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const response = await askAssistant(userMsg);
      
      if (isMounted.current) {
        setMessages(prev => [...prev, { role: 'bot', text: response }]);
      }
    } catch (err: any) {
      console.warn("Assistent Interaction Error:", err);
      if (isMounted.current) {
        setMessages(prev => [...prev, { 
          role: 'error', 
          text: 'Conexão interrompida. Por favor, tente novamente em alguns instantes.' 
        }]);
      }
    } finally {
      if (isMounted.current) {
        setLoading(false);
      }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-brand-gold hover:bg-[#C0941C] text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center space-x-2"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="hidden sm:inline font-semibold">Assistente Agrícola</span>
        </button>
      )}

      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-80 sm:w-96 border border-gray-200 overflow-hidden flex flex-col max-h-[500px] animate-scale-up">
          <div className="bg-brand-moss p-4 flex justify-between items-center shadow-sm">
            <div className="flex items-center space-x-2 text-white">
              <Bot className="w-5 h-5" />
              <span className="font-bold">IA Vitória Francisco</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200 p-1">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-brand-gold text-white rounded-tr-none' 
                    : msg.role === 'error'
                    ? 'bg-red-50 text-red-700 border border-red-100 flex items-center'
                    : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
                }`}>
                  {msg.role === 'error' && <AlertCircle className="w-4 h-4 mr-2 flex-shrink-0" />}
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-100 p-3 rounded-2xl rounded-tl-none text-sm text-gray-400 flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-gray-100 bg-white flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Digite sua dúvida..."
              disabled={loading}
              className="flex-1 border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-moss disabled:bg-gray-50"
            />
            <button
              onClick={handleSend}
              disabled={loading || !input.trim()}
              className="bg-brand-moss text-white p-2.5 rounded-xl hover:bg-brand-dark transition-colors disabled:opacity-50"
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
